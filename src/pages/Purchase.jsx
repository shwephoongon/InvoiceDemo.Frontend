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
  return (
    <div className=''>
      <div className='overflow-x-auto rounded-box border border-gray-300 bg-base-100'>
        <table className='table'>
          {/* head */}
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
                <tr className='border border-gray-300'>
                  <th className='border-r border-gray-300'>
                    {item.invoiceDate}
                  </th>
                  <td className='border-r border-gray-300'>{item.invoiceNo}</td>
                  <td className='border-r border-gray-300 text-end'>{item.totalQty}</td>
                  <td className='border-r border-gray-300 text-end'>{item.totalAmount}</td>
                </tr>
              ))}

            {/* <tr className='border border-gray-300'>
              <th className='border-r border-gray-300'>2</th>
              <td className='border-r border-gray-300'>Hart Hagerty</td>
              <td className='border-r border-gray-300 text-end'>15</td>
              <td className='border-r border-gray-300 text-end'>Purple</td>
            </tr>

            <tr className='border border-gray-300'>
              <th className='border-r border-gray-300'>3</th>
              <td className='border-r border-gray-300'>3</td>
              <td className='border-r border-gray-300 text-end'>6</td>
              <td className='border-r border-gray-300 text-end'>Red</td>
            </tr> */}
            <tr className='border border-gray-300 bg-gray-300'>
              <th className='border-r border-gray-300'>
                <div
                  className='flex flex-col justify-center items-center'
                  onClick={gotoDetail}
                >
                  <Plus size={35} strokeWidth={4} />
                  <p className='text-white'>New</p>
                </div>
              </th>
              <td className='border-r border-gray-300'></td>
              <td className='border-r border-gray-300 text-end'>6</td>
              <td className='border-r border-gray-300 text-end'>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Purchase;
