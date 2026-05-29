import React from "react";
import TamplateAuth from "./tamplate-auth";
import resetimage from "@/assets/auth/resetimage.png";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import Link from "next/link";

function FormResetPassword() {
  return (
    <TamplateAuth
      image={resetimage}
      title="reset your password"
      description="Enter your email and well send you a link to reset your password please check it
    "
    >
      <form action="" className="mt-10">
        <Input
          label="Email"
          placeholder="reset your password"
          error="we cannot find your email"
        />
        <div className="flex items-start flex-col gap-2.5 mt-12.5">
          <Button type="submit" className="px-15">
            Send
          </Button>
          <Link href={"/login"} className="text-[16px] text-Charcoal">
            Back to <span className="border-b border-b-Charcoal">Login</span>
          </Link>
        </div>
      </form>
    </TamplateAuth>
  );
}

export default FormResetPassword;
