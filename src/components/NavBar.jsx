import React from "react";
import { Menu } from "lucide-react";

const NavBar = () => {
  return (
    <div className='navbar bg-[#4B18D6] shadow-sm'>
      <div className='flex-none'>
        <div className='dropdown'>
          <label
            tabIndex={0}
            className='btn btn-ghost hover:bg-transparent focus:bg-transparent active:bg-transparent focus:outline-none border-none shadow-none'
          >
            <Menu color='white' />
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <a>Link 1</a>
            </li>
            <li>
              <a>Link 2</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex-1'>
        <a className='text-xl text-white'>Purchase</a>
      </div>
    </div>
  );
};

export default NavBar;
