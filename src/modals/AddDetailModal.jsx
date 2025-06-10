import Modal from "react-modal";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AddDetailModal = ({ isOpen, closeModal, addItem }) => {
  const [details, setDetails] = useState({
    stockCode: "",
    description: "",
    qty: null,
    price: null,
  });

  const handleDetailsChange = ({ target: { id, value } }) => {
    setDetails((prev) => ({ ...prev, [id]: value }));
  };

  const onConfirm = (e) => {
    e.preventDefault();
    const { stockCode, description, qty, price } = details;
    const numericQty = typeof qty === "number" ? qty : Number(qty);
    const numericPrice = typeof price === "number" ? price : Number(price);

    const isValid =
      stockCode?.trim() &&
      description?.trim() &&
      !isNaN(numericQty) &&
      numericQty > 0 &&
      !isNaN(numericPrice) &&
      numericPrice > 0;

    if (!isValid) {
      toast.error("Please fill in all fields with valid values.");
      return;
    }

    const newItem = {
      ...details,
      qty: numericQty,
      price: numericPrice,
    };

    addItem(newItem);
    setDetails({
      stockCode: "",
      description: "",
      qty: null,
      price: null,
    });
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
            <div className='basis-1/4'>Code</div>
            <input
              id='stockCode'
              type='text'
              className='border-b-1 border-gray-900 text-lg focus:outline-none focus:ring-0 '
              value={details.stockCode}
              onChange={handleDetailsChange}
            />
          </div>
          <div className='flex flex-row gap-12'>
            <div className='basis-1/4'>Description</div>
            <input
              id='description'
              type='text'
              className='border-b-1 border-gray-900 text-lg focus:outline-none focus:ring-0 '
              value={details.description}
              onChange={handleDetailsChange}
            />
          </div>
          <div className='flex flex-row gap-12'>
            <div className='basis-1/4'>Qty</div>
            <input
              id='qty'
              type='number'
              className='border-b-1 border-gray-900 text-lg focus:outline-none focus:ring-0 '
              value={details.qty}
              onChange={handleDetailsChange}
            />
          </div>
          <div className='flex flex-row gap-12'>
            <div className='basis-1/4'>Price</div>
            <input
              id='price'
              type='number'
              className='border-b-1 border-gray-900 text-lg focus:outline-none focus:ring-0 '
              value={details.price}
              onChange={handleDetailsChange}
            />
          </div>
          <div className='flex justify-center mt-6'>
            <button
              onClick={onConfirm}
              type='button'
              className='bg-[#4B18D6] px-6 py-2 text-white text-lg rounded-md hover:bg-[#3a14aa] hover:scale-105 transition-all duration-200 shadow-md cursor-pointer'
            >
              Add Detail
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddDetailModal;
