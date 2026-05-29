"use client";
import React from "react";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Link from "next/link";
import TamplateAuth from "./tamplate-auth";
import loginimage from "@/assets/auth/loginimage.png";
import {BiSolidHide} from "react-icons/bi";
import {TfiEye} from "react-icons/tfi";

const FormLogin = () => {
  const [isShow, setIsShow] = React.useState(false);
  return (
    <TamplateAuth image={loginimage} title="sign in page">
      <div className="flex items-center gap-5 py-12.5">
        <span className="h-0.5 bg-gray-300 w-full"></span>
        <span className="text-[18px] text-Muted-Gray-200 font-bold">OR</span>
        <span className="h-0.5 bg-gray-300 w-full"></span>
      </div>
      <form action="action">
        <div className="flex flex-col gap-7.5">
          <Input label="user name or email address" placeholder="username" />
          <div className="flex flex-col relative">
            <Input
              type={isShow ? "text" : "password"}
              label="password"
              placeholder="password"
            />
            <Link
              href={"/resetpassword"}
              className="text-[16px] absolute right-0 -bottom-8 text-Charcoal border-b border-b-Charcoal "
            >
              Forgot your password
            </Link>
            <div
              className="cursor-pointer absolute right-0 top-0"
              onClick={() => setIsShow(!isShow)}
            >
              {isShow ? (
                <span className="text-Muted-Gray-200 flex gap-2 ">
                  <BiSolidHide size={23} /> Hide
                </span>
              ) : (
                <span className="text-Muted-Gray-200 flex gap-2 ">
                  <TfiEye size={23} /> show
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <Button type="submit" className="w-fit capitalize px-15">
              sign in
            </Button>
            <Link className="text-[16px] text-Charcoal" href={"/signup"}>
              dont have an account?
              <span className="border-b border-b-Charcoal ml-2">
                Sign up
              </span>{" "}
            </Link>
          </div>
        </div>
      </form>
    </TamplateAuth>
  );
};

export default FormLogin;
