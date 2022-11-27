import React, { useRef, useState } from "react";
import DetailsModal from "./modal";
import { useDownloadExcel } from "react-export-table-to-excel";

const Dashboard = ({ user, data }) => {
  const [activeDetails, setactiveDetails] = useState(false);
  const tableRef = useRef(null);
  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Users table",
    sheet: "Users",
  });
  return (
    <div className="w-full px-10 mt-20">
      <DetailsModal
        details={activeDetails}
        setIsOpen={setactiveDetails}
        modalIsOpen={activeDetails?.name}
      />

      <table className="" ref={tableRef}>
        <thead>
          <tr className="border-b-[1px] border-gray-500">
            <td className="font-bold text-lg text-gray-500 w-[200px] break-all">
              Name
            </td>
            <td className="font-bold text-lg text-gray-500 w-[200px] break-all">
              Age
            </td>
            <td className="font-bold text-lg text-gray-500 w-[200px] break-all">
              Email
            </td>
            <td className="font-bold text-lg text-gray-500 w-[200px] break-all">
              Phone
            </td>
            <td className="font-bold text-lg text-gray-500 w-[200px] break-all">
              Gender
            </td>
            <td className="font-bold text-lg text-gray-500 w-[200px] break-all">
              Token
            </td>
          </tr>
        </thead>
        <tbody>
          {data?.map(({ name, age, email, token, gender, phone }, index) => (
            <tr
              onClick={() =>
                setactiveDetails({ name, age, email, token, gender, phone })
              }
              key={index}
              className="border-[1px] border-black "
            >
              <td className="p-2">{name}</td>
              <td className="p-2">{age}</td>
              <td className="p-2">{email}</td>
              <td className="p-2">{phone}</td>
              <td className="p-2">{gender}</td>
              <td className="p-2">{token}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="w-full text-center">
        <button
          onClick={onDownload}
          className="text-center border-[1px] my-5 border-black bg-black text-white px-5 py-2 "
        >
          DownLoad
        </button>
      </div>
      {/* <ul className="w-full flex justify-between items-center mb-3 border-b-[2px] border-gray-800">
        <li className="font-bold text-lg text-gray-500 w-[200px] break-all">
          Name
        </li>
        <li className="font-bold text-lg text-gray-500 w-[200px] break-all">
          Age
        </li>
        <li className="font-bold text-lg text-gray-500 w-[200px] break-all">
          Email
        </li>

        <li className="font-bold text-lg text-gray-500 w-[200px] break-all">
          Phone
        </li>
        <li className="font-bold text-lg text-gray-500 w-[200px] break-all">
          Gender
        </li>

        <li className="font-bold text-lg text-gray-500 w-[200px] break-all">
          Token
        </li>
      </ul>
      {data?.map(({ name, age, email, token, gender, phone }, index) => (
        <ul
          onClick={() =>
            setactiveDetails({ name, age, email, token, gender, phone })
          }
          key={index}
          className="w-full flex justify-between items-center mb-2 border-b-[1px] border-gray-500"
        >
          <li className="font-normal text-base cursor-pointer  text-gray-500 w-[200px] break-all">
            {name}
          </li>
          <li className="font-normal text-base cursor-pointer  text-gray-500 w-[200px] break-all">
            {age}
          </li>
          <li className="font-normal text-base cursor-pointer  text-gray-500 w-[200px] break-all">
            {email}
          </li>

          <li className="font-normal text-base cursor-pointer  text-gray-500 w-[200px] break-all">
            {phone}
          </li>
          <li className="font-normal text-base cursor-pointer  text-gray-500 w-[200px] break-all">
            {gender}
          </li>

          <li className="font-normal text-base cursor-pointer  text-gray-500 w-[200px] break-all">
            {token}
          </li>
        </ul>
      ))} */}
    </div>
  );
};

export default Dashboard;
