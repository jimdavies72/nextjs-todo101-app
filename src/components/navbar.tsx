'use client';
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { user } = useUser();
  const { sub } = user || {};
  const [links, setLinks] = useState<linkArray[]>([]);
  const [nav, setNav] = useState(false);

  interface linkArray {
    id: number;
    link: string;
    page: string;
  }

  let authLinks = [];

  const setNavLinks = () => {
    if (!user) {
      authLinks = [
        {
          id: 1,
          link: "login",
          page: "/api/auth/login",
        },
        {
          id: 2,
          link: "sign-up",
          page: "/api/auth/signup",
        },
      ];
    } else {
      authLinks = [
        {
          id: 2,
          link: "logout",
          page: "/api/auth/logout",
        },
        {
          id: 3,
          link: "profile",
          page: "/profile",
        },
        {
          id: 4,
          link: "My Tasks",
          page: "/tasks",
        },
      ];
    }

    const navLinks = [
      {
        id: 5,
        link: "home",
        page: "/",
      },
    ]

    const linkArray = [...authLinks, ...navLinks];
    setLinks(linkArray);
  }

  useEffect(() => {
    setNavLinks();
  }, [sub]);

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-[#6C643D] mt-[2px] mb-[1px] ml-p[20px] fixed-top nav">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-5xl text-[#E0DCC8] font-poppins ml-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            Tasks
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, page }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={page}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, page }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={page}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
