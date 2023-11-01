const Footer = () => {
  return (
    <footer className="text-white bg-logoPurple w-full  mt-14 p-3">
      <div className="w-full h-14 text-center flex flex-col items-center justify-center">
        <h5>
          &copy; {new Date().getFullYear()}
          <span className="font-bold uppercase drop-shadow-2xl text-[#FFD6A5]">
            {``} LuxeHome
          </span>
        </h5>
        <h5>All Rights Reserved</h5>
      </div>
    </footer>
  );
};
export default Footer;
