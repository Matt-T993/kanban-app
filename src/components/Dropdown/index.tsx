import React from "react";

interface IDropDown {
  show: boolean;
}

export default function Dropdown({ show }: IDropDown) {
  return (
    <div
      className={`${show ? "block" : "hidden"} w-48 absolute top-full bg-white
     border shadow-lg right-0 py-2 rounded-2xl`}
    >
      <div className="hover:bg-gray-300">
        <button className="text-sm px-4 py-2">Edit Board</button>
      </div>
      <div className="hover:bg-gray-300">
        <button className="text-sm px-4 py-2">Delete Button</button>
      </div>
    </div>
  );
}
