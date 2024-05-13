import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="/"
              className="flex items-center"
            >
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                Post IT.
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Project
            </h2>
            <ul className="font-medium text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/sarthakk24/mercor"
                  className="hover:underline"
                >
                  Github
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/watch?v=PhFdfvbm3MM"
                  className="hover:underline"
                >
                  Youtube Video
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://sarthakk24.s3.ap-south-1.amazonaws.com/Mercor+Presentaion.pptx"
                  className="hover:underline"
                >
                  Presentation
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-sm text-gray-500 dark:text-gray-400 text-center">
          &copy; {new Date().getFullYear()} Post It. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
