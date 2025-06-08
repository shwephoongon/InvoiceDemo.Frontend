import React, { useEffect, useState } from "react";
import AddDetailModal from "../modals/AddDetailModal";
import moment from "moment";
const PurchaseDetail = () => {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState({
    invoiceNo: "",
    invoiceDate: new Date(),
  });
  const [invoiceItems, setInvoiceItems] = useState([]);

  const closeModal = () => {
    setOpenModal(false);
  };

  const onOpenModal = () => {
    setOpenModal(true);
  };

  const handleChange = ({ target: { id, value } }) => {
    setData((prev) => ({ ...prev, [id]: value }));
  };

  const addItem = (details) => {
    setInvoiceItems((prev) => [...prev, details]);
    closeModal();
  };

  useEffect(() => console.log("hi", invoiceItems), [invoiceItems]);
  return (
    <div className='p-4 mt-2 ml-6'>
      <div className='flex flex-row gap-12 mb-8'>
        <label>Date</label>
        <input
          type='text'
          className='border-b-1 border-gray-900 text-lg focus:outline-none focus:ring-0 '
          value={moment(data.invoiceDate).format("YYYY/MM/DD")}
          disabled
        />
      </div>
      <div className='flex flex-row gap-12'>
        <label>Invoice No</label>
        <input
          id='invoiceNo'
          type='text'
          className='border-b-1 border-gray-900 text-lg focus:outline-none focus:ring-0 '
          value={data.invoiceNo}
          onChange={handleChange}
        />
      </div>
      <div
        className='bg-[#4B18D6] px-6 py-2 w-36 text-white mt-6 text-center text-lg '
        onClick={onOpenModal}
      >
        Add Detail
      </div>
      <div className='overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mt-6'>
        <table className='table w-[1000px]'>
          {/* head */}
          <thead className='bg-gray-400 text-white '>
            <tr>
              <th className='border-r-2 border-white  text-center'>Sr</th>
              <th className='border-r-2 border-white text-center'>
                Stock Code
              </th>
              <th className='border-r-2 border-white text-center'>
                Description
              </th>
              <th className='border-r-2 border-white text-center'>Qty</th>
              <th className='border-r-2 border-white text-center'>Price</th>
              <th className='border-r-2 border-white text-center'>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>

            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>

            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='flex flex-row gap-24 mt-6'>
        <p>Total QTY</p>
        <p>15</p>
      </div>
      <div className='flex flex-row gap-24'>
        <p>Total Amount</p>
        <p>12,500</p>
      </div>
      <AddDetailModal
        isOpen={openModal}
        closeModal={closeModal}
        addItem={addItem}
      />
    </div>
  );
};

export default PurchaseDetail;
