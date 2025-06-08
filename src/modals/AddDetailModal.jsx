import Modal from "react-modal";
import { useEffect, useState } from "react";

const AddDetailModal = ({ isOpen, closeModal, addItem }) => {
  const [details, setDetails] = useState({
    code: "",
    description: "",
    qty: null,
    price: null,
  });

  const handleDetailsChange = ({ target: { id, value } }) => {
    setDetails((prev) => ({ ...prev, [id]: value }));
  };

  const onConfirm = (e) => {
    e.preventDefault();
    addItem(details);
  };
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className='w-1/3 p-6 bg-white rounded-lg mx-auto mt-20 outline-none'
        overlayClassName='fixed inset-0 bg-black/40  flex justify-center items-start'
      >
        <form>
          <div className='flex flex-row gap-12'>
            <label>Code</label>
            <input
              id='code'
              type='text'
              className='border-b-1 border-gray-900 text-lg focus:outline-none focus:ring-0 '
              value={details.code}
              onChange={handleDetailsChange}
            />
          </div>
          <div className='flex flex-row gap-12'>
            <label>Description</label>
            <input
              id='description'
              type='text'
              className='border-b-1 border-gray-900 text-lg focus:outline-none focus:ring-0 '
              value={details.description}
              onChange={handleDetailsChange}
            />
          </div>
          <div className='flex flex-row gap-12'>
            <label>Qty</label>
            <input
              id='qty'
              type='text'
              className='border-b-1 border-gray-900 text-lg focus:outline-none focus:ring-0 '
              value={details.qty}
              onChange={handleDetailsChange}
            />
          </div>
          <div className='flex flex-row gap-12'>
            <label>Price</label>
            <input
              id='price'
              type='text'
              className='border-b-1 border-gray-900 text-lg focus:outline-none focus:ring-0 '
              value={details.price}
              onChange={handleDetailsChange}
            />
          </div>
          <button
            onClick={onConfirm}
            className='bg-[#4B18D6] px-6 py-2 w-36 text-white mt-6 text-center text-lg '
          >
            Add Detail
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddDetailModal;
