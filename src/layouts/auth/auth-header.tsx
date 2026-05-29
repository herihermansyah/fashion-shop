"use client";

import LanguageSelect from "@/components/language-select";
import Logo from "@/components/logo";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import {useRouter} from "next/navigation";
import React from "react";
import {IoSearch} from "react-icons/io5";

function AuthHeader() {
  const router = useRouter();
  return (
    <div className="py-7.75 border-b-2 border-[#BEBCBD]">
      <div className="flex items-center justify-center xl:justify-between container mx-auto large:w-wide px-4">
        <div className="flex items-center gap-10 xl:gap-41">
          <Logo className="hidden xl:block" />
          <div className="hidden xl:block">
            <Input
              variant={"v2"}
              placeholder="Search"
              icon={<IoSearch />}
              className="w-46 h-11.5"
            />
          </div>
        </div>
        <div className="flex items-center gap-15">
          <LanguageSelect className="hidden xl:block" />
          <div className="flex items-center gap-7.25">
            <Button
              onClick={() => router.push("/login")}
              className="sm:px-12 py-3 capitalize"
            >
              login
            </Button>
            <Button
              onClick={() => router.push("/signup")}
              className="sm:px-12 py-3 capitalize"
              variant={"v2"}
            >
              sign up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthHeader;
