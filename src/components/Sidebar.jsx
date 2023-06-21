import Logo from "./Logo";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { navlinks } from "../navlinks";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsCart } from "react-icons/bs";

const Sidebar = () => {
  const isOpen = false;
  return (
    <aside
      className={`${
        isOpen ? "sidebar show-sidebar transition-all ease-linear" : "sidebar"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <Link to="/">
          <Logo />
        </Link>
        <AiOutlineClose className="scale-[1.5] mt-1" />
      </div>
      <ul className="flex flex-col gap-2 font-bold uppercase">
        {navlinks.map((link) => {
          const { id, path, name } = link;
          return (
            <Link
              key={id}
              to={path}
              className="p-2 transition ease-out hover:translate-x-1 hover:bg-slate-200 hover:text-logoPurple"
            >
              {name}
            </Link>
          );
        })}
      </ul>
      <div className="flex items-center justify-center gap-5 ">
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
    </aside>
  );
};
export default Sidebar;
