import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const ToggleHandleClick = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col content-center p-5 m-2 shadow-lg ">
      <div className="flex col-span-3">
        <img
          //onClick={()=>ToggleHandleClick()} creates a new function every time the component renders, use when you need to pass arguments
          //onClick={ToggleHandleClick} it passes only the function reference (more efficient)
          onClick={ToggleHandleClick}
          className="h-9 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"
          alt="Hamburger-menu"
        />
        <a href="/">
          <img
            className="h-9 mx-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt="Youtube-logo"
          />
        </a>
      </div>
      <div className="col-span-8 ">
        <input
          type="text"
          className="w-1/2 px-2 border border-gray-400 p-2 rounded-l-3xl"
        />
        <button className=" border px-2 p-2 bg-gray-200  rounded-r-3xl">
          🔍
        </button>
      </div>
      <div className="col-span-1 flex">
        <img
          className="h-10"
          src="https://i.pinimg.com/736x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Header;
