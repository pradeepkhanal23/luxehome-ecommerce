import { Outlet } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "../components";

const RootLayout = () => {
  return (
    <main className="w-screen ">
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </main>
  );
};
export default RootLayout;
