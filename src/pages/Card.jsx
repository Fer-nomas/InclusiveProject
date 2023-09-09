import React from "react";

function Card(props) {
  return (
    <li className=" w-full lg:p-4 py-2 lg:w-1/3 h-[600px]">
      <div className="bg-transparent border-4 border-[#57c78f] w-full h-full px-6 py-8 gap-10 flex flex-col rounded-xl justify-start">
        <img
          className=" w-full h-72 rounded-xl border-2 border-black"
          srcset={props.img}
        />
        <h3 className="text-center text-lg">{props.info}</h3>
      </div>
    </li>
  );
}

export default Card;
