import { Outlet, Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoX } from "react-icons/go";

import { ShowContext } from "../context/ShowContext";
import { useContext, useEffect } from "react";

let Header = () => {
  const context = useContext(ShowContext);
  const [show, setShow] = context;

  function changeShow() {
    setShow("-translate-x-80");
  }

  function navBurger(e) {
    if (show !== "-translate-x-1") return setShow("-translate-x-1");
    else return setShow("-translate-x-80");
  }

  return (
    <div>
      <nav className={`fixed bg-[#FDE5EC] h-[60px] w-screen z-20 `}>
        <ul className="flex items-center justify-between px-8">
          <li>
            {show !== "-translate-x-1" ? (
              <RxHamburgerMenu
                onClick={navBurger}
                className="cursor-pointer text-4xl"
              />
            ) : (
              <GoX onClick={navBurger} className="cursor-pointer text-4xl" />
            )}
          </li>
          <li>
            <Link to="/">
              <img
                className="h-[52px] m-1 cursor-pointer"
                srcSet={
                  "https://cdn.discordapp.com/attachments/749326094800519179/1141900179746857040/cositoooooo.png"
                }
              />
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <div
        className={`rounded-r-2xl shadow-2xl  h-[350px] fixed w-[250px] left-0 top-10 pt-8 gap-6 items-start flex-col bg-[#FDE5EC] z-100  ${show}`}
      >
        <Link
          className="w-full text-center cursor-pointer z-110  p-2 font-normal text-xl"
          to={"/"}
          onClick={changeShow}
        >
          <div className="border-b-2 border-black py-2  text-2xl">Inicio</div>
        </Link>
        <Link
          onClick={changeShow}
          className="w-full text-center cursor-pointer z-110  p-2 font-normal text-xl"
          to={"/test"}
        >
          <div className="border-b-2 border-black py-2  text-2xl">
            Abecedario
          </div>
        </Link>
        <Link
          onClick={changeShow}
          className="w-full text-center cursor-pointer z-110  p-2 font-normal text-xl"
          to={"/"}
        >
          <div className="border-b-2 border-black py-2  text-2xl">
            Abecedario
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
