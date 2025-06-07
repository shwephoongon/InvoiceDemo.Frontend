import React from "react";
import Modal from "react-modal";

const AddDetailModal = ({ isOpen, closeModal }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        //onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className='w-1/3 p-6 bg-white rounded-lg mx-auto mt-20 outline-none'
        //// style={customStyles}
        overlayClassName='fixed inset-0 bg-black/40  flex justify-center items-start'
      >
        <form>
          <div className='flex flex-row gap-12 mb-8'>
            <label>Date</label>
            <input
              type='text'
              className='border-b-1 border-gray-900 text-lg focus:outline-none focus:ring-0 '
            />
          </div>
          <div className='flex flex-row gap-12'>
            <label>Invoice No</label>
            <input
              type='text'
              className='border-b-1 border-gray-900 text-lg focus:outline-none focus:ring-0 '
            />
          </div>
          <div className='flex flex-row gap-12'>
            <label>Code</label>
            <input
              type='text'
              className='border-b-1 border-gray-900 text-lg focus:outline-none focus:ring-0 '
            />
          </div>
          <div className='flex flex-row gap-12'>
            <label>Description</label>
            <input
              type='text'
              className='border-b-1 border-gray-900 text-lg focus:outline-none focus:ring-0 '
            />
          </div>
          <div className='flex flex-row gap-12'>
            <label>Qty</label>
            <input
              type='text'
              className='border-b-1 border-gray-900 text-lg focus:outline-none focus:ring-0 '
            />
          </div>
          <div className='flex flex-row gap-12'>
            <label>Price</label>
            <input
              type='text'
              className='border-b-1 border-gray-900 text-lg focus:outline-none focus:ring-0 '
            />
          </div>
          <button className='bg-[#4B18D6] px-6 py-2 w-36 text-white mt-6 text-center text-lg '>
            Add Detail
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddDetailModal;
