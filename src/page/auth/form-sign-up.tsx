"use client";
import React from "react";
import TamplateAuth from "./tamplate-auth";
import Input from "@/components/ui/input";
import Link from "next/link";
import {BiSolidHide} from "react-icons/bi";
import {TfiEye} from "react-icons/tfi";
import Button from "@/components/ui/button";
import signupimage from "@/assets/auth/signimage.png";

function FormSignUp() {
  const [isShow, setIsShow] = React.useState(false);
  return (
    <TamplateAuth
      image={signupimage}
      title="sign up"
      description="Sign up for free to access to in any of our products"
    >
      <form action="action" className="mt-10">
        <div className="flex flex-col gap-7.5">
          <Input
            label="Email Address"
            error="error massage"
            placeholder="username"
          />
          {/* password */}
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
            <p className="text-[16px] font-medium text-Muted-Gray-200 mt-2.5">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </p>
          </div>

          {/* checkbox */}
          <div className="flex flex-col-reverse gap-4.5">
            <label htmlFor="" className="flex items-center gap-2.5">
              <input
                required
                type="checkbox"
                className="w-4.5 h-4.5 accent-Charcoal cursor-pointer"
              />
              <span className="text-[18px] font-medium text-Muted-Gray-200 capitalize">
                agree to our{" "}
                <span className="border-b border-Muted-Gray-200">
                  terms of use
                </span>{" "}
                and
                <span className="border-b border-Muted-Gray-200">
                  privacy policy
                </span>
              </span>
            </label>
            <label htmlFor="" className="flex items-center gap-2.5">
              <input
                required
                type="checkbox"
                className="w-4.5 h-4.5 accent-Charcoal cursor-pointer"
              />
              <span className="text-[18px] font-medium text-Muted-Gray-200 capitalize">
                Subscribe to our newsletter
              </span>
            </label>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <Button type="submit" className="w-fit capitalize px-15">
              sign up
            </Button>
            <Link className="text-[16px] text-Charcoal" href={"/login"}>
              already have an account?
              <span className="border-b border-b-Charcoal ml-2">
                Log in
              </span>{" "}
            </Link>
          </div>
        </div>
      </form>
    </TamplateAuth>
  );
}

export default FormSignUp;
