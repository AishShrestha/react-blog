// Header.jsx
import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Container, Logo, LogoutBtn } from "../index";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const location = useLocation();

  const navItems = [
    {
      name: "HOME",
      slug: "/",
      active: true,
    },
    {
      name: "LOGIN",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "SIGNUP",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "ALL POSTS",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "ADD POST",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="pt-2 bg-transparent">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <ul className="flex ml-auto text-xl text-white">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <Link
                    to={item.slug}
                    className={`px-4 py-2 duration-200 rounded-full hover:text-amber-950  ${
                      location.pathname === item.slug ? "text-amber-950 " : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
      {/* <hr className="w-full border-black mt-2" /> */}
    </header>
  );
}

export default Header;
