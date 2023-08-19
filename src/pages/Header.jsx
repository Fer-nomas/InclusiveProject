import { Outlet, Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoX } from "react-icons/go";
import Inclusivo from "../assets/inclusivo.png";
import { ShowContext } from "../context/ShowContext";
import { useContext } from "react";

let Header = () => {
  const context = useContext(ShowContext);
  const [show, setShow] = context;
  
  function navBurger(e) {
    if (show == "hidden") return setShow("flex");
    else return setShow("hidden");
  }

  return (
    <div>
      <nav
        className={`fixed bg-[#FDE5EC] h-[60px] shadow-xl w-screen z-20 `}
      >
        <ul className="flex items-center justify-between px-8">
          <li>
            {show == "hidden" ? (
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
                srcSet= "https://cdn.discordapp.com/attachments/749326094800519179/1141900179746857040/cositoooooo.png"
              />
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <div
        className={` h-[350px] fixed w-[250px] left-0 top-10 pt-8 gap-6 items-center flex-col bg-[#FDE5EC] z-100  ${show}`}
      >
        <Link
          className="w-full text-center cursor-pointer z-110 border-b-2 p-2 font-normal text-xl border-gray-600"
          to={"/"}
        >
          <div>Inicio</div>
        </Link>
        <Link
          className="w-full text-center cursor-pointer z-110 border-b-2 p-2 font-normal text-xl border-gray-600"
          to={"/test"}
        >
          <div>Abecedario</div>
        </Link>
        <Link
          className="w-full text-center cursor-pointer z-110 border-b-2 p-2 font-normal text-xl border-gray-600"
          to={"/"}
        >
          <div>Abecedario</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
