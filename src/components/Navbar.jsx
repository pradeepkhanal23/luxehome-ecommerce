import { Logo } from "../components";
import { CgMenuRightAlt } from "react-icons/cg";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { navlinks } from "../utils/constants";
// eslint-disable-next-line no-unused-vars
import { AiOutlineUserAdd, AiOutlineUserDelete } from "react-icons/ai";
import { useProductsContext } from "../context/productsContext";

const Navbar = () => {
  const { sidebarOpen } = useProductsContext();

  return (
    <nav className="w-full h-20 bg-logoPurple">
      <header className="flex items-center justify-between w-full py-1 pr-4 mx-auto text-white md:px-4 lg:px-10 ">
        <div className="flex items-center gap- scale-[.7] md:scale-[1] pt-1 ">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <ul className="items-center justify-between hidden gap-2 font-bold uppercase flex-2 md:flex md:gap-4 relative ">
          {/* <div className="w-full h-[3px] mb-2 bg-sweetOrange absolute -bottom-3"></div> */}
          {navlinks.map((link) => {
            const { id, path, name } = link;
            return (
              <Link
                key={id}
                to={path}
                className="group transition duration-300 mt-2 mx-1"
              >
                {name}
                <div className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-1 bg-sweetOrange"></div>
              </Link>
            );
          })}
        </ul>

        <div className="items-center hidden gap-5 md:flex">
          <div className="relative flex items-center gap-1">
            <Link to="cart" className="flex items-center gap-1">
              <span>Cart</span>
              <BsCart className="scale-[1.5] " />
              <span className="absolute flex items-center justify-center w-5 h-5 font-bold bg-white rounded-full text-logoPurple -top-2 -right-3">
                1
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <Link to="/" className="flex items-center gap-1">
              <span>Login</span>
              <AiOutlineUserAdd className="scale-[1.5]" />
            </Link>
          </div>
        </div>

        <CgMenuRightAlt
          className="scale-[1.8] mt-1 md:hidden cursor-pointer "
          onClick={sidebarOpen}
        />
      </header>
    </nav>
  );
};
export default Navbar;
