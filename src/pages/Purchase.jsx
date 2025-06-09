import React, { useState, useEffect } from "react";
import { Plus, SquarePen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Purchase = () => {
  const navigate = useNavigate();
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:7239/api/v1/Invoice")
      .then((response) => {
        console.log(response);
        setInvoices(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const gotoDetail = () => {
    navigate("/detail");
  };

  const gotoUpdateDetail = (item) => {
    navigate(`/update/${item.invoiceId}`);
  };

  return (
    <div>
      <div className='overflow-x-auto rounded-box border border-gray-300 bg-base-100'>
        <table className='table'>
          <thead className='bg-gray-400 text-white '>
            <tr>
              <th className='border-r-2 border-white text-xl text-center'>
                DATE
              </th>
              <th className='border-r-2 border-white text-xl text-center'>
                INVOICE NO
              </th>
              <th className='border-r-2 border-white text-xl text-center'>
                QTY
              </th>
              <th className='border-r-2 border-white text-xl text-center'>
                AMOUNT
              </th>
            </tr>
          </thead>
          <tbody className='text-lg'>
            {invoices.length > 0 &&
              invoices.map((item) => (
                <tr
                  className='borderborder-gray-300 hover:bg-gray-100 cursor-pointer'
                  onClick={() => gotoUpdateDetail(item)}
                >
                  <th className='border-r border-gray-300'>
                    {item.invoiceDate}
                  </th>
                  <td className='border-r border-gray-300'>{item.invoiceNo}</td>
                  <td className='border-r border-gray-300 text-end'>
                    {item.totalQty}
                  </td>
                  <td className='border-r border-gray-300 text-end'>
                    {item.totalAmount}
                  </td>
                </tr>
              ))}

            <tr className='border border-gray-300 font-bold bg-gray-100'>
              <td colSpan={2} className='border-r border-gray-300 text-left'>
                <button
                  onClick={gotoDetail}
                  className='bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 hover:scale-105 transition-all duration-200 cursor-pointer shadow-md'
                >
                  + New
                </button>
              </td>
              <td className='border-r border-gray-300 text-end'>
                {invoices.reduce((sum, item) => sum + item.totalQty, 0)}
              </td>
              <td className='border-r border-gray-300 text-end'>
                {invoices.reduce((sum, item) => sum + item.totalAmount, 0)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Purchase;
