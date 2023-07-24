import Logo from "./Logo";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineUserDelete } from "react-icons/ai";
import { navlinks } from "../utils/constants";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { useProductsContext } from "../context/productsContext";
import { useCartContext } from "../context/cartContext";
import { useUserContext } from "../context/userContext";

const Sidebar = () => {
  const { isSidebarOpen, sidebarClose } = useProductsContext();
  const { total_items } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();

  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar "}`}>
      <div className="flex items-center justify-between gap-3">
        <Link to="/">
          <Logo />
        </Link>
        <AiOutlineClose
          className="scale-[1.5] mt-1 cursor-pointer"
          onClick={sidebarClose}
        />
      </div>
      <ul className="flex flex-col gap-2 font-bold uppercase">
        {navlinks.map((link) => {
          const { id, path, name } = link;
          return (
            <Link
              key={id}
              to={path}
              onClick={sidebarClose}
              className="p-2 transition ease-out rounded-lg hover:translate-x-1 hover:bg-slate-200 hover:text-logoPurple"
            >
              {name}
            </Link>
          );
        })}
        {myUser && (
          <Link
            to="/checkout"
            className="p-2 transition ease-out rounded-lg hover:translate-x-1 hover:bg-slate-200 hover:text-logoPurple "
            onClick={sidebarClose}
          >
            Checkout
          </Link>
        )}
      </ul>
      <div className="flex items-center justify-center gap-10 ">
        <div className="relative flex items-center gap-1">
          <Link
            to="cart"
            className="flex items-center gap-2 "
            onClick={sidebarClose}
          >
            <span>Cart</span>
            <BsCart className="scale-[1.5] " />
            <span className="absolute flex items-center justify-center w-6 h-6  font-bold bg-white rounded-full text-logoPurple -top-4 -right-4">
              {total_items}
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-1">
          {myUser ? (
            <Link
              className="flex items-center gap-2 "
              onClick={() => {
                sidebarClose();
                logout({ returnTo: window.location.origin });
              }}
            >
              <span>Logout</span>
              <AiOutlineUserDelete className="scale-[1.5]" />
            </Link>
          ) : (
            <Link
              className="flex items-center gap-2 "
              onClick={loginWithRedirect}
            >
              <span>Login</span>
              <AiOutlineUserAdd className="scale-[1.5]" />
            </Link>
          )}
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
