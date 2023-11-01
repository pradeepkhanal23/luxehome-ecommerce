import { RiErrorWarningLine } from "react-icons/ri";

const Modal = ({ closeModal, message, title, action }) => {
  return (
    <div className="fixed inset-0 w-full min-h-screen bg-black bg-opacity-80 z-[1000]">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 w-[90%] max-w-lg z-1000 mx-auto bg-white text-black rounded-md shadow-lg py-8">
        <div className="flex justify-center scale-[2] my-3">
          <RiErrorWarningLine />
        </div>
        <h2 className="text-center text-lg font-bold uppercase text-red-500">
          {title}
        </h2>
        <p className="text-center mt-2 text-md">{message}</p>
        <div className="flex justify-around w-2/3  mt-4 mx-auto gap-x-5">
          <button
            className="bg-red-500 text-white px-8 py-1 rounded-md "
            onClick={() => {
              closeModal();
              action();
            }}
          >
            Confirm
          </button>
          <button
            className="text-white bg-black px-8 py-2 rounded-md"
            onClick={() => closeModal()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
