import Logo from "./Logo";
import { CgMenuRightAlt } from "react-icons/cg";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { navlinks } from "../navlinks";
// eslint-disable-next-line no-unused-vars
import { AiOutlineUserAdd, AiOutlineUserDelete } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="w-full ">
      <header className="flex items-center justify-between w-full py-1 pr-4 mx-auto text-white md:px-4 lg:px-10 bg-logoPurple">
        <div className="flex items-center gap-3 scale-[.9] md:scale-[1] ">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <ul className="items-center justify-between hidden gap-2 font-bold uppercase md:flex md:gap-4 ">
          {navlinks.map((link) => {
            const { id, path, name } = link;
            return (
              <Link
                key={id}
                to={path}
                className="p-1 hover:bg-white hover:text-logoPurple hover:rounded-lg"
              >
                {name}
              </Link>
            );
          })}
        </ul>

        <div className="items-center hidden gap-5 md:flex">
          <div className="relative flex items-center gap-1">
            <span>Cart</span>
            <Link to="cart">
              <BsCart className="scale-[1.5] " />
              <span className="absolute flex items-center justify-center w-5 h-5 font-bold bg-white rounded-full text-logoPurple -top-3 -right-3">
                1
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <span>Login</span>
            <Link to="/">
              <AiOutlineUserAdd className="scale-[1.5]" />
            </Link>
          </div>
        </div>

        <CgMenuRightAlt className="scale-[2] mt-.5 md:hidden " />
      </header>
    </nav>
  );
};
export default Navbar;
