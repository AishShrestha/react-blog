import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className=" border-t-2 border-black py-10">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Copyright */}
          <div className="w-full md:w-1/2 lg:w-1/3 mb-6">
            <div className="flex flex-col justify-between h-full">
              <Logo width="100px" />
              <p className="mt-4 text-sm text-gray-600">
                &copy; 2023 DevUI. All Rights Reserved.
              </p>
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="w-full md:w-1/2 lg:w-1/5 mb-6">
            <h3 className="mb-4 text-xs font-semibold uppercase text-gray-500">
              Company
            </h3>
            <ul>
              <li className="mb-2">
                <Link className="text-gray-900 hover:text-gray-700" to="/">
                  Features
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-gray-900 hover:text-gray-700" to="/">
                  Pricing
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-gray-900 hover:text-gray-700" to="/">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link className="text-gray-900 hover:text-gray-700" to="/">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/5 mb-6">
            <h3 className="mb-4 text-xs font-semibold uppercase text-gray-500">
              Support
            </h3>
            <ul>
              <li className="mb-2">
                <Link className="text-gray-900 hover:text-gray-700" to="/">
                  Account
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-gray-900 hover:text-gray-700" to="/">
                  Help
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-gray-900 hover:text-gray-700" to="/">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="text-gray-900 hover:text-gray-700" to="/">
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/5 mb-6">
            <h3 className="mb-4 text-xs font-semibold uppercase text-gray-500">
              Legals
            </h3>
            <ul>
              <li className="mb-2">
                <Link className="text-gray-900 hover:text-gray-700" to="/">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-gray-900 hover:text-gray-700" to="/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-gray-900 hover:text-gray-700" to="/">
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
