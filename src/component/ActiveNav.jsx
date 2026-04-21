"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavbarItem } from "@heroui/navbar";
import React from "react";

const ActiveNav = () => {
  const pathname = usePathname();

  return (
    <>
      <NavbarItem>
        <Link
          href="/"
          className={pathname === "/" ? "p-1 rounded text-white bg-blue-500 font-bold" : "p-1 rounded bg-gray-200"}
        >
          Home
        </Link>
      </NavbarItem>

      <NavbarItem>
        <Link
          href="/post"
          className={pathname === "/post" ? "p-1 rounded text-white bg-blue-500 font-bold " : "p-1 rounded bg-gray-200"}
        >
          Post
        </Link>
      </NavbarItem>

      <NavbarItem>
        <Link
          href="/dashborard"
          className={
            pathname === "/dashborard" ? "p-1 rounded text-white bg-blue-500 font-bold" : "p-1 rounded bg-gray-200"
          }
        >
          Dashboard
        </Link>
      </NavbarItem>
    </>
  );
};

export default ActiveNav;
