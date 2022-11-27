import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import firebaseDb from "../firebase";

const ref = firebaseDb.firestore().collection("enteries");

const Index = () => {
  const initialData = {
    name: "",
    age: "",
    phone: "",
    email: "",
    token: "",
    gender: "male",
  };
  const [inputFields, setInputFields] = useState(initialData);
  const { name, email, age, phone, token, gender } = inputFields;
  const [loading, setloading] = useState(false);

  const inputClass = `w-full bg-white border-gray-300 mt-2 mb-3 border-[1px] outline-none text-gray-600 placeholder:text-gray-200 p-2 text-base"`;
  const labelClass = `text-gray-600 text-base uppercase font-medium`;

  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    const newEntry = await ref.add(inputFields);
    if (newEntry.id) {
      toast.success("Submission was successfull");
      setInputFields(initialData);
    } else {
      toast.error("Submission failed, please try again, later");
    }
    setloading(false);
  };

  return (
    <>
      {/* <ToastContainer /> */}

      <form
        onSubmit={handleSubmit}
        className="pb-16 w-[500px] max-w-[93%]  mx-auto "
      >
        <div className="w-full bg-white shadow-sm border-gray-300 accent-gray-300 mt-20 mb-8 border-[1.3px] shadow-gray-100 px-4 pt-8 py-8 ">
          <label className={labelClass}>Name*</label>
          <input
            className={inputClass}
            placeholder="Full name"
            required
            value={name}
            name={"name"}
            type="text"
            onChange={(e) => handleChange(e)}
          />
          <label className={labelClass}>Email*</label>
          <input
            className={inputClass}
            placeholder="email@abc.com.."
            value={email}
            name={"email"}
            required
            type="email"
            onChange={(e) => handleChange(e)}
          />
          <label className={labelClass}>Phone*</label>
          <input
            className={inputClass}
            placeholder="Phone"
            value={phone}
            name={"phone"}
            type="tel"
            required
            onChange={(e) => handleChange(e)}
          />
          <label className={labelClass}>Gender*</label>
          <div className="flex gap-4 items-center mt-2 mb-3">
            <div className="flex items-center gap-2">
              {" "}
              <input
                className={"h-4 w-4"}
                placeholder="Gender"
                value={"male"}
                type="radio"
                name={"gender"}
                onChange={(e) =>
                  setInputFields({ ...inputFields, gender: "male" })
                }
                checked={gender === "male"}
              />
              <span className="text-gray-600 text-base">Male</span>
            </div>
            <div className="flex items-center gap-2">
              {" "}
              <input
                className={"h-4 w-4"}
                placeholder="Gender"
                value={"female"}
                type="radio"
                name={"gender"}
                onChange={(e) =>
                  setInputFields({ ...inputFields, gender: "female" })
                }
                checked={gender === "female"}
              />
              <span className="text-gray-600 text-base">Female</span>
            </div>
            <div className="flex items-center gap-2">
              {" "}
              <input
                className={"h-4 w-4"}
                placeholder="Gender"
                value={"other"}
                type="radio"
                name={"gender"}
                onChange={(e) =>
                  setInputFields({ ...inputFields, gender: "other" })
                }
                checked={gender === "other"}
              />
              <span className="text-gray-600 text-base">Other</span>
            </div>
          </div>

          <label className={labelClass}>Age*</label>
          <input
            className={inputClass}
            placeholder="Enter your age"
            value={age}
            name={"age"}
            required
            type={"number"}
            onChange={(e) => handleChange(e)}
          />
          <label className={labelClass}>Token*</label>
          <input
            className={inputClass}
            placeholder="Enter your token number"
            value={token}
            name={"token"}
            required
            type="text"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button
          disabled={loading}
          type="submit"
          className="bg-green-700 border-transparent cursor-pointer w-[150px] font-light hover:text-green-700 transition-all duration-300 ease-in-out hover:bg-white border-[1px] hover:border-green-700 hover:bg-white-700 text-white text-center  py-2 px-4 rounded"
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </>
  );
};

export default Index;
