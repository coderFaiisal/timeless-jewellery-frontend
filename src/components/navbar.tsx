"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import CustomImage from "./customImage";
import logo from "../assets/logo.png";
import { MainNav } from "./mainNav";
import AdminProfile from "./adminProfile";
import Cart from "./cart";
import { Search } from "./search";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="border-b" ref={navRef}>
      <div className="hidden md:flex h-16 px-6 items-center justify-between">
        <div>
          <CustomImage src={logo} alt="logo image" className="w-24 h-12 ml-6" />
        </div>

        <div className="ml-auto flex items-center space-x-4">
          <MainNav onClose={closeMenu} />
          <Search />
          <Cart />
          <AdminProfile />
        </div>
      </div>

      <div className="md:hidden flex items-center h-16 relative">
        <Button
          onClick={toggleMenu}
          variant={"outline"}
          className="px-3 h-9 absolute left-4"
        >
          {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </Button>

        <div
          className={cn(
            " absolute top-16 w-full min-h-screen bg-slate-50 p-6 z-50  ",
            isOpen ? "block " : "hidden"
          )}
        >
          <MainNav onClose={closeMenu} />
        </div>

        <div className="m-auto">
          <CustomImage src={logo} alt="logo image" className="w-20 h-10" />
        </div>

        <div className="flex space-x-4 items-center absolute right-4">
          <Search />
          <Cart />
          <AdminProfile />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
