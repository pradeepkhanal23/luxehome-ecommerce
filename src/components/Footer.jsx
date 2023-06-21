const Footer = () => {
  return (
    <footer className="fixed bottom-0 flex-col w-full h-16 gap-3 py-2 text-center text-white bg-logoPurple">
      <h5>
        &copy; {new Date().getFullYear()}
        <span className="font-bold uppercase text-whiteOrange"> LuxeHome</span>
      </h5>
      <h5>All Rights Reserved</h5>
    </footer>
  );
};
export default Footer;
