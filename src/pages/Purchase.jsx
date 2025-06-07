import React from "react";
import { Plus, SquarePen } from "lucide-react";
import { useNavigation, useNavigate } from "react-router-dom";

const Purchase = () => {
  const navigate = useNavigate();
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
            {/* row 1 */}
            <tr className='border border-gray-300'>
              <th className='border-r border-gray-300'>1</th>
              <td className='border-r border-gray-300'>Cy Ganderton</td>
              <td className='border-r border-gray-300 text-end'>5</td>
              <td className='border-r border-gray-300 text-end'>Blue</td>
              {/* Last td no right border */}
            </tr>
            {/* row 2 */}
            <tr className='border border-gray-300'>
              <th className='border-r border-gray-300'>2</th>
              <td className='border-r border-gray-300'>Hart Hagerty</td>
              <td className='border-r border-gray-300 text-end'>15</td>
              <td className='border-r border-gray-300 text-end'>Purple</td>
            </tr>
            {/* row 3 */}
            <tr className='border border-gray-300'>
              <th className='border-r border-gray-300'>3</th>
              <td className='border-r border-gray-300'>3</td>
              <td className='border-r border-gray-300 text-end'>6</td>
              <td className='border-r border-gray-300 text-end'>Red</td>
            </tr>
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
