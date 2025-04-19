import Link from "next/link";

const Header = () => {
  return (
    <header className="pb-10">
      {/* Thanh thông báo */}
      <div className="flex justify-center text-center bg-black text-white p-2">
        <span className="font-inter text-[10px] sm:text-[12px]">
          Sign up and get 20% off to your first order.{" "}
          <a className="underline">Sign Up Now</a>
        </span>
      </div>
      {/* Logo và Menu */}
      <div className="flex flex-wrap items-center justify-between px-4 pt-4 mb-4 mx-auto max-w-[1440px]">
        {/* Logo */}
        <Link href={"/"}>
        <h1 className="clothes text-[20px] sm:text-[24px] xl:text-[32px] xl:pl-20 font-bold mb-4 sm:mb-0">
          SHOP.CO
        </h1>
        </Link>

        {/* Menu Mobile Toggle Button */}
        <div className="relative w-full sm:w-auto order-3 sm:order-2 mt-4 sm:mt-0 w-full">
          <button
            className="sm:hidden flex items-center w-full justify-between border rounded-lg p-2"
            id="menu-toggle"
          >
            <span>Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {/* Menu Items */}
          <ul
            className="hidden sm:flex flex-col sm:flex-row w-full sm:w-auto gap-4 sm:gap-6 justify-center text-[14px] sm:text-[16px] bg-white sm:bg-transparent absolute sm:relative left-0 right-0 shadow-md sm:shadow-none mt-2 sm:mt-0 p-4 sm:p-0 z-10 rounded-lg"
            id="menu"
          >
            <li className="py-2 sm:py-0 border-b sm:border-b-0 w-full sm:w-auto">
              <a className="flex items-center gap-1 justify-between">
                Shop{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 -6 35 35"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                  />
                </svg>
              </a>
            </li>
            <li className="py-2 sm:py-0 border-b sm:border-b-0 w-full sm:w-auto">
              <a>On Sale</a>
            </li>
            <li className="py-2 sm:py-0 border-b sm:border-b-0 w-full sm:w-auto">
              <a>New Arrivals</a>
            </li>
            <li className="py-2 sm:py-0 w-full sm:w-auto">
              <a>Brands</a>
            </li>
          </ul>
        </div>
        {/* Search and Icons */}
        <div className="relative flex-1 sm:flex-none sm:w-auto flex items-center justify-end gap-2 order-2 sm:order-3">
          {/* Search Icon for Mobile */}
          <button className="sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
          {/* Search Input (Hidden on Mobile) */}
          <div className="hidden sm:flex relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 absolute top-3 left-4 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              placeholder="Search for products..."
              className="bg-[#F0F0F0] pl-10 pr-4 py-2 rounded-3xl w-full sm:w-[200px] md:w-[300px] lg:w-[400px] xl:w-[550px]"
              type="text"
            />
          </div>
          {/* Cart and User Icons */}
          <div className="flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* Mobile Search Overlay (Hidden by default) */}
      <div
        id="search-overlay"
        className="hidden fixed inset-0 bg-white z-20 p-4"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Search</h2>
          <button id="close-search" className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 absolute top-3 left-4 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            placeholder="Search for products..."
            className="bg-[#F0F0F0] pl-10 pr-4 py-2 rounded-3xl w-full"
            type="text"
          />
        </div>
      </div>
      
      
    </header>
  );
};

export default Header;
