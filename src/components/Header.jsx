import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaDeleteLeft } from "react-icons/fa6";

const Header = () => {
  const [data, setData] = useState({
    username: "",
  });

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form
        className="flex flex-col justify-center items-center border w-fit m-1"
        onSubmit={(e) => {
          e.preventDefault();
          if (data.username == "") {
            return alert("The field is empty...");
          } else {
            console.log(data);
          }

          setData({
            username: "",
          });
        }}
      >
        <label htmlFor="userName">User Name</label>
        <input
          className={`${data.username.length > 10 ? "text-blue-600 border" : "text-black border-b"} outline-none m-10 p-10 rounded-2xl`}
          onChange={handleInput}
          type="text"
          name="username"
          id=""
          value={data.username}
        />
        <button type="submit">submit</button>
      </form>
      <h1 className="h-[10vh] flex justify-center items-center border m-1">
        This is the Header
      </h1>
      <NavLink
        to={"/"}
        className="px-2 border my-2 w-[80%] m-auto rounded-2xl h-10 flex justify-center items-center underline text-2xl font-mono "
      >
        Hello World!
      </NavLink>

      <NavLink
        className={"flex gap-3 items-center border w-fit p-3 rounded-2xl m-2"}
        to={"/header"}
      >
        Header <FaDeleteLeft />
      </NavLink>
    </div>
  );
};

export default Header;
