import React from "react";
import ActiveNav from "./ActiveNav";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Link, Button } from "@heroui/react";

const NavbarComponent = () => {
  return (
    <div className="shadow p-3">
      <Navbar>
        <NavbarBrand>
          <p className="font-bold">ACME</p>
        </NavbarBrand>

        {/* middle links */}
        <NavbarContent justify="center">
          <ActiveNav />
        </NavbarContent>

        {/* right side */}
        <NavbarContent justify="end">
          <NavbarItem>
            <Button>Sign Up</Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
