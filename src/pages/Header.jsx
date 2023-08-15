import { Outlet, Link } from "react-router-dom";
import {
  primaryColor,
  secundaryColor,
  terciaryColor,
  ultimateColor,
} from "../colors";
import Inclusivo from "../assets/inclusivo.png";

let Header = () => {
  return (
    <div>
      <nav
        className={`bg-[${secundaryColor}] h-[60px] w-screen shadow-xl fixed z-20 `}
      >
        <ul className="flex">
          <li>
            <Link to="/">
              <img
                className="h-[60px] mx-4 cursor-pointer"
                srcSet={Inclusivo}
                alt=""
              />
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Header;
