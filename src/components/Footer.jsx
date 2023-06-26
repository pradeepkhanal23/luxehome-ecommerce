const Footer = () => {
  return (
    <footer className="text-white bg-logoPurple w-full h-16 text-center flex flex-col items-center justify-center ">
      <h5>
        &copy; {new Date().getFullYear()}
        <span className="font-bold uppercase text-sweetOrange"> LuxeHome</span>
      </h5>
      <h5>All Rights Reserved</h5>
    </footer>
  );
};
export default Footer;
