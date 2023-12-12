const NavBar = () => {
  return (
    <nav className="bg-primary p-4">
      <div className="flex md:flex md:flex-grow flex-row justify-end space-x-1">
        <a href="/" className="">
          Home
        </a>
        <a href="/login" className="">
          login
        </a>
        <a href="/showcase" className=" ">
          SellProduct
        </a>
        <a href="/about" className="">
          About Us
        </a>
      </div>
    </nav>
  );
};

export default NavBar;