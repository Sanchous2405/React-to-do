import React from "react";
import { BsCheck } from "react-icons/bs";



const Check = ({ isComplited }) => {
  return (
    <div
      className={`border-2 rounded-lg border-pink-400 ${
        isComplited ? "bg-pink-400 " : ""
      } w-6 h-6 mr-3 flex items-center justify-center `}
    >
      {isComplited && <BsCheck size={24} className={"text-grey-900"} />}
    </div>
  );
};

export default Check;
