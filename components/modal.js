import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function DetailsModal({ modalIsOpen, setIsOpen, details }) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="w-[700px] max-h-[80vh] overflow-y-auto p-10 mx-auto relative">
        <p
          className="text-gray-400 font-light font-sm cursor-pointer absolute top-0 right-3"
          onClick={() => setIsOpen(false)}
        >
          Close
        </p>

        <div className="flex gap-0 text-gray-600 items-center">
          <p className="w-[20%] font-medium pr-10">Name</p>
          <p className="w-[80%] font-normal">{details?.name}</p>
        </div>
        <div className="flex gap-0 text-gray-600 items-center">
          <p className="w-[20%] font-medium pr-10">Email</p>
          <p className="w-[80%] font-normal">{details?.email}</p>
        </div>
        <div className="flex gap-0 text-gray-600 items-center">
          <p className="w-[20%] font-medium pr-10">Phone</p>
          <p className="w-[80%] font-normal">{details?.phone}</p>
        </div>

        <div className="flex gap-0 text-gray-600 items-center">
          <p className="w-[20%] font-medium pr-10">Age</p>
          <p className="w-[80%] font-normal">{details?.age}</p>
        </div>
        <div className="flex gap-0 text-gray-600 items-center">
          <p className="w-[20%] font-medium pr-10">Gender</p>
          <p className="w-[80%] font-normal">{details?.gender}</p>
        </div>
        <div className="flex gap-0 text-gray-600 items-center">
          <p className="w-[20%] font-medium pr-10">Token</p>
          <p className="w-[80%] font-normal">{details?.token}</p>
        </div>

        <button className="bg-blue-600 text-white block mx-auto w-[120px] print outline-none cursor-pointer mt-10 text-center p-3">
          Print
        </button>
      </div>
    </Modal>
  );
}
export default DetailsModal;
