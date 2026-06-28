import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex p-5 h-[50vh] border w-[50%] m-auto">
      <form
        className="flex flex-col gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (data.username == "") {
            return alert("The field is empty...");
          } else {
            console.log(data);
          }
          setData({
            username: "",
            email: "",
            password: "",
          });
        }}
      >
        <div className="flex border gap-5 w-full">
          <label htmlFor="userName">User Name</label>
          <input
            className="border w-full"
            onChange={handleInput}
            type="text"
            name="username"
            id=""
            value={data.username}
          />
        </div>
        <div className="flex border gap-5 w-full">
          <label htmlFor="userName">User Name</label>
          <input
            className="border w-full"
            onChange={handleInput}
            type="text"
            name="username"
            id=""
            value={data.username}
          />
        </div>
        <div className="flex border gap-5 w-full">
          <label htmlFor="userName">User Name</label>
          <input
            className="border w-full"
            onChange={handleInput}
            type="text"
            name="username"
            id=""
            value={data.username}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Contact;
