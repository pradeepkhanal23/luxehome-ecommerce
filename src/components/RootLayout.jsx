import { Outlet } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "../components";

const RootLayout = () => {
  return (
    <main className="h-full w-full">
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </main>
  );
};
export default RootLayout;
