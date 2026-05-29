import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/logo/logo.svg";

interface LogoProps {
  className?: string;
}

function Logo({className}: LogoProps) {
  return (
    <div className={className}>
      <Link href={"/"}>
        <Image
          src={logo}
          alt="logo"
          width={91}
          height={45}
          priority
          className="min-w-22.75 min-h-11.25"
        />
      </Link>
    </div>
  );
}

export default Logo;
