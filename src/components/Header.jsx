import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaDeleteLeft } from "react-icons/fa6";
import { listItems } from "../constants/links";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header
        className={`${isOpen ? "flex flex-col justify-around" : "hidden"} fixed z-20 items-center text-[14px] right-0 left-0  gap-3 w-[25%] h-screen list-none p-10 border bg-blue-900  text-white `}
      >
        {listItems.map((item) => (
          <li
            onClick={() => setIsOpen(false)}
            className="border p-2 rounded-md hover:bg-white hover:text-blue-900 hover:underline  text-[18px] transition-all duration-150 flex"
            key={item.id}
          >
            <NavLink to={item.path}>{item.name}</NavLink>
          </li>
        ))}
      </header>
      <header className="flex list-none justify-between p-10 border bg-blue-900  text-white ">
        <GiHamburgerMenu
          onClick={() => setIsOpen(true)}
          className="text-2xl md:hidden lg:hidden"
        />
        {listItems.map((item) => (
          <ul key={item.id}>
            <li className="border p-2 rounded-md hover:bg-white hover:text-blue-900 hover:underline  text-[18px] transition-all duration-150 hidden lg:flex md:flex">
              <NavLink to={item.path}>{item.name}</NavLink>
            </li>
          </ul>
        ))}
        <NavLink
          key={7}
          className={
            "border p-2 rounded-md hover:bg-white hover:text-blue-900 hover:underline  text-[18px] transition-all duration-150 "
          }
          to={"/contact"}
        >
          Contact
        </NavLink>
      </header>
      <div
        onClick={() => setIsOpen(false)}
        className={`${isOpen ? "fixed left-0 right-0 top-0 bottom-0 opacity-60" : "hidden"} w-full h-[100vh]   bg-gray-400`}
      ></div>
    </div>
  );
};

export default Header;
