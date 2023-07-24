/* eslint-disable no-unused-vars */
import { Logo } from "../components";
import { CgMenuRightAlt } from "react-icons/cg";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { navlinks } from "../utils/constants";
import { AiOutlineUserAdd, AiOutlineUserDelete } from "react-icons/ai";
import { useProductsContext } from "../context/productsContext";
import { useCartContext } from "../context/cartContext";
import { useUserContext } from "../context/userContext";

const Navbar = () => {
  const { sidebarOpen } = useProductsContext();
  const { total_items } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();

  return (
    <nav className="w-full h-20 bg-logoPurple">
      <header className="flex items-center justify-between w-full py-1 pr-4 mx-auto text-white md:px-4 lg:px-10 ">
        <div className="flex items-center gap- scale-[.7] md:scale-[1] pt-1 ">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <ul className="items-center justify-between hidden gap-2 font-bold capitalize flex-2 md:flex md:gap-4 relative ">
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
          {myUser && (
            <Link
              to="/checkout"
              className="group transition duration-300 mt-2 mx-1 "
            >
              Checkout
              <div className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-1 bg-sweetOrange"></div>
            </Link>
          )}
        </ul>

        <div className="items-center hidden gap-7 md:flex">
          <div className="relative flex items-center gap-1">
            <Link to="cart" className="flex items-center gap-1">
              <span className="font-bold capitalize">Cart</span>
              <BsCart className="scale-[1.5] " />
              <span className="absolute flex  items-center justify-center w-6 h-6 font-bold bg-white rounded-full text-logoPurple -top-2 -right-4">
                {total_items}
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-1">
            {myUser ? (
              <button
                className="flex items-center gap-1"
                onClick={() => {
                  logout({ returnTo: window.location.origin });
                }}
              >
                <span className="font-bold capitalize">Logout</span>
                <AiOutlineUserDelete className="scale-[1.5]" />
              </button>
            ) : (
              <button
                className="flex items-center gap-1"
                onClick={loginWithRedirect}
              >
                <span className="font-bold capitalize">Login</span>
                <AiOutlineUserAdd className="scale-[1.5]" />
              </button>
            )}
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
