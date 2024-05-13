import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import profile from "../../../public/profile.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link href="/" className="flex items-center">
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Post IT.
          </span>
        </Link>
        <div className="flex items-center md:hidden">
          <button
            className="text-gray-600 focus:outline-none dark:text-gray-300"
            onClick={handleMenuToggle}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`h-full w-full flex-col items-center justify-start space-y-4 md:flex md:h-auto md:w-auto md:flex-row md:space-x-8 md:space-y-0 ${
            isMenuOpen ? "md:block" : "hidden"
          } absolute left-0 right-0 top-16 bg-gray-50 transition-all duration-300 ease-in-out dark:bg-gray-800 md:relative md:top-0`}
        >
          <Link
            href="/team"
            className="mt-40 flex items-center justify-center md:mt-0 md:justify-normal"
          >
            <span className="self-center whitespace-nowrap text-lg dark:text-white">
              Team
            </span>
          </Link>
          <Link
            href="/featured"
            className="flex items-center justify-center py-10 md:justify-normal md:py-0"
          >
            <span className="self-center whitespace-nowrap text-lg dark:text-white">
              Featured
            </span>
          </Link>
          <div className="flex items-center justify-center md:justify-normal">
            <span className="text-l self-center whitespace-nowrap dark:text-white">
              <Image src={profile} alt="profile" width={40} height={40} />
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
