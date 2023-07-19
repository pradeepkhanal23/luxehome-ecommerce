import { Outlet } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "../components";

const RootLayout = () => {
  return (
    <main className="h-full w-full">
      <Navbar />
      <Sidebar />
      <Outlet />
      <div className="relative bottom-0 left-0 right-0">
        <Footer />
      </div>
    </main>
  );
};
export default RootLayout;
