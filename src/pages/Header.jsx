import { Outlet, Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoX } from "react-icons/go";
import { AiOutlineSearch } from "react-icons/ai";
import { MesaggeContext } from "../context/MessageContext";

import { ShowContext } from "../context/ShowContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

let Header = () => {
  const context = useContext(ShowContext);
  const [show, setShow] = context;

  const context2 = useContext(MesaggeContext);
  const [mesagge, setMesagge] = context2;

 

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    navBurger();

    const onScroll = () => {
      if (window.scrollY > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function navBurger() {
    if (show != "-translate-x-1") return setShow("-translate-x-1");
    else return setShow("-translate-x-80");
  }

  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/search");
  }

  useEffect(() => {
    setMesagge("");
  }, []);

  return (
    <div>
      <nav
        className={`fixed bg-[#FDE5EC] h-[60px] w-screen z-20 border-b-2 border-[#0007] `}
      >
        <ul className="flex items-center justify-between px-8">
          <li>
            {show !== "-translate-x-1" ? (
              <RxHamburgerMenu
                onClick={navBurger}
                className="cursor-pointer text-4xl"
              />
            ) : (
              <GoX onClick={()=>{navBurger()}} className="cursor-pointer text-4xl" />
            )}
          </li>
          <form
            onSubmit={handleSubmit}
            className={
              scrolled ? "relative bg-white p-2 pr-8 rounded-full" : "hidden"
            }
          >
            <input
              placeholder="Busca alguna frase"
              type="text"
              onChange={(e) => {
                setMesagge(e.target.value);
              }}
              className="outline-none lg:w-[700px]"
            />
            <AiOutlineSearch
              onClick={handleSubmit}
              className="absolute top-[10px] text-xl text-blue-500 right-2"
            />
          </form>
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
        className={`rounded-r-2xl  shadow-2xl fixed w-[250px] left-0 top-10 gap-8 pt-4 bg-[#FDE5EC] z-100  ${show}`}
      >
        <Link
          className="w-full text-center cursor-pointer z-110  p-2 font-normal text-lg"
          to={"/"}
        >
          <div className="border-b-2 border-[#0007] py-2  text-2xl">Inicio</div>
        </Link>
        <Link
          className="w-full text-center cursor-pointer z-110  p-2 font-normal text-lg"
          to={"/abecedario"}
        >
          <div className="border-b-2 border-[#0007] py-2  text-2xl">
            Abecedario
          </div>
        </Link>
        <Link
          className="w-full text-center cursor-pointer z-110  p-2 font-normal text-lg"
          to={"/numeros"}
        >
          <div className="border-b-2 border-[#0007] py-2  text-2xl">
            Numeros
          </div>
        </Link>
        <Link
          className="w-full text-center cursor-pointer z-110  p-2 font-normal text-lg"
          to={"/meses"}
        >
          <div className="border-b-2 border-[#0007] py-2  text-2xl">Meses</div>
        </Link>

        {/* <Link
          
          className="w-full text-center cursor-pointer z-110  p-2 font-normal text-xl"
          to={"/"}
        >
          <div className="border-b-2 border-black py-2  text-2xl">
            si
          </div>
        </Link> */}
      </div>
    </div>
  );
};

export default Header;
