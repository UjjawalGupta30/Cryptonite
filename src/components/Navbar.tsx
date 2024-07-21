import React from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import Logo from "./Logo";
import { Input } from "./ui/input";
import Search from "./Search";
import Dmenu from "./DropMenu";

const Navbar = async () => {
  return (
    <div className="border-b w-screen shadow-md">
      <div className="flex flex-col max-w-7xl mx-auto p-5 w-screen">
        <div className="flex items-center justify-between w-full mb-4 sm:mb-0">
          <Link href={"/"} className="flex items-center gap-3">
            <Logo />
            <h1 className="hidden sm:flex text-4xl font-bold">Cryptonite</h1>
          </Link>
          <div className="flex items-center gap-2">
            <Dmenu />
            <ModeToggle />
          </div>
        </div>
        <div className="w-full sm:hidden ">
          <Search />
        </div>
        <div className="hidden sm:flex sm:items-center sm:gap-2  flex justify-center items-center">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
