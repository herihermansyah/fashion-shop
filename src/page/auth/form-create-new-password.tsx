"use client";
import React from "react";
import TamplateAuth from "./tamplate-auth";
import newpassimage from "@/assets/auth/createpassimage.png";
import Input from "@/components/ui/input";
import {BiSolidHide} from "react-icons/bi";
import {TfiEye} from "react-icons/tfi";
import Button from "@/components/ui/button";

function FormCreateNewPassword() {
  const [isShow, setIsShow] = React.useState(false);

  return (
    <TamplateAuth
      image={newpassimage}
      title="Create new password"
      description="Your new password must be different from previus used passwords."
    >
      <form action="" className="mt-12.5">
        <div className="flex flex-col gap-7.5">
          <div className="flex flex-col relative">
            <Input
              type={isShow ? "text" : "password"}
              label="password"
              placeholder="password"
            />

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
            <p className="text-Muted-Gray-200 font-medium mt-2">
              Must be at lest 8 characters.
            </p>
          </div>
          <div className="flex flex-col relative">
            <Input
              type={isShow ? "text" : "password"}
              label="Confirm Password"
              placeholder="password"
              error="new password and confirm new password do not match"
            />

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
        </div>
        <Button className="px-8 mt-12.5">Reset Password</Button>
      </form>
    </TamplateAuth>
  );
}

export default FormCreateNewPassword;
