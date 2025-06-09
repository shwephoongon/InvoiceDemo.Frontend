import React, { useEffect, useState } from "react";
import AddDetailModal from "../modals/AddDetailModal";
import moment from "moment";
import { Save } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePurchaseDetail = () => {
  const { invoiceId } = useParams();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState({
    invoiceNo: "",
    invoiceDate: new Date(),
  });
  const [invoiceItems, setInvoiceItems] = useState([]);

  useEffect(() => {
    onLoadInvoice();
  }, []);

  const onLoadInvoice = async () => {
    try {
      const response = await axios.get(
        `https://localhost:7239/api/v1/Invoice/${invoiceId}`
      );
      if (response.status === 200) {
        setData({
          invoiceNo: response.data.invoiceNo,
          invoiceDate: response.data.invoiceDate,
        });
        setInvoiceItems(response.data.invoicedetails);
      }
    } catch (error) {
      console.log("err", error);
    }
  };

  const onSaveInvoice = async (e) => {
    e.preventDefault();

    const payload = {
      invoiceNo: data.invoiceNo,
      invoiceDate: data.invoiceDate,
      items: invoiceItems.map((item) => ({
        ...item,
        qty: Number(item.qty),
        price: Number(item.price),
      })),
    };

    try {
      const response = await axios.put(
        `https://localhost:7239/api/v1/Invoice/${invoiceId}`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        toast.success(`Invoice updated successfully!`, {
          position: "top-right",
        });
        navigate("/");
      }
    } catch (error) {
      console.log("err", error);
      toast.error(error?.response?.data.message);
    }
  };

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

  const totalQty = invoiceItems.reduce(
    (sum, item) => sum + Number(item.qty || 0),
    0
  );

  const totalAmount = invoiceItems.reduce(
    (sum, item) => sum + Number(item.price * item.qty || 0),
    0
  );

  const removeItem = (indexToRemove) => {
    setInvoiceItems((prevItems) =>
      prevItems.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div className='p-4 mt-2 ml-6'>
      <div className='w-1/3'>
        <div className='flex flex-row mb-8'>
          <div className='basis-1/4'>
            <label className='text-lg'>Date</label>
          </div>
          <div className='basis-3/4'>
            <input
              type='text'
              className='border-b border-gray-900 text-lg focus:outline-none focus:ring-0 w-1/2'
              value={moment(data.invoiceDate).format("YYYY/MM/DD")}
              disabled
            />
          </div>
        </div>

        <div className='flex flex-row'>
          <div className='basis-1/4'>
            <label className='text-lg'>Invoice No</label>
          </div>
          <div className='basis-3/4'>
            <input
              id='invoiceNo'
              type='text'
              className='border-b border-gray-900 text-lg focus:outline-none focus:ring-0 w-1/2'
              value={data.invoiceNo}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className='flex flex-row gap-4 mt-12'>
        <div
          className='bg-[#4B18D6] cursor-pointer px-6 py-2 w-36 text-white text-center text-lg '
          onClick={onOpenModal}
        >
          Add Detail
        </div>
        <button
          className='bg-[#4B18D6] cursor-pointer p-2 w-12 text-white text-center flex justify-center items-center text-lg '
          onClick={onSaveInvoice}
        >
          <Save size={25} />
        </button>
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
            {invoiceItems.map((item, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{item.stockCode}</td>
                <td>{item.description}</td>
                <td>{item.qty}</td>
                <td>{item.price}</td>
                <td>{item.qty * item.price}</td>
                <td>
                  <button
                    className='bg-red-500 text-white px-2 py-1 rounded'
                    onClick={() => removeItem(index)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='flex flex-row gap-24 mt-6'>
        <p>Total QTY</p>
        <p>{totalQty}</p>
      </div>
      <div className='flex flex-row gap-24'>
        <p>Total Amount</p>
        <p>{totalAmount}</p>
      </div>
      <AddDetailModal
        isOpen={openModal}
        closeModal={closeModal}
        addItem={addItem}
      />
    </div>
  );
};

export default UpdatePurchaseDetail;
