"use client";
import Logo from "@/components/logo";
import Input from "@/components/ui/input";
import UserControls from "@/components/user-controls";
import React from "react";
import {IoSearch} from "react-icons/io5";
import NavHeader from "@/components/nav-header";
import ToggleMenu from "@/components/ui/toggle-menu";
import {ImMenu} from "react-icons/im";
import {IoCloseSharp} from "react-icons/io5";
import Button from "@/components/ui/button";
import {AiOutlineUser} from "react-icons/ai";
import {useRouter} from "next/navigation";

const menuStyle = {
  mobileMenu:
    "absolute flex flex-col items-center gap-5 left-1/2 bg-white -translate-x-1/2 w-full pt-30 pb-10 ransition-all duration-500 ease-in-out",
  menuOpen: "-translate-y-22",
  menuClose: "-translate-y-190",
};

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();
  return (
    <div className="bg-white border-b border-b-Muted-Gray-200">
      {/* desktop */}
      <div className="hidden xl:flex items-center justify-between px-4 large:px-0 container large:w-wide mx-auto py-7.75">
        <Logo />
        <div className="flex items-center gap-19">
          <NavHeader />
          <Input
            variant={"v2"}
            placeholder="search"
            icon={<IoSearch />}
            className="w-66.75 h-11"
          />
          <UserControls />
        </div>
      </div>
      {/* mobile */}
      <div className="relative block xl:hidden">
        <div className="container relative z-2 mx-auto px-4 flex items-center justify-between py-5">
          <ToggleMenu
            onClick={() => setIsOpen(!isOpen)}
            iconOn={<IoCloseSharp size={25} />}
            iconOf={<ImMenu size={25} />}
            click={isOpen}
          />
          <Logo />
          <Button
            variant="v2"
            iconLeft={<AiOutlineUser size={20} />}
            isIcon
            className="bg-Muted-Gray ring-0 text-Muted-Gray-200"
            onClick={() => router.push("/login")}
          />
        </div>
        <div
          className={` ${menuStyle.mobileMenu} ${isOpen ? menuStyle.menuOpen : menuStyle.menuClose}`}
        >
          <NavHeader />
          <UserControls />
          <Input
            variant={"v2"}
            placeholder="search"
            icon={<IoSearch />}
            className="w-66.75 h-11 "
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
