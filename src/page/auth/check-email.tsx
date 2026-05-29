import React from "react";
import TamplateAuth from "./tamplate-auth";
import Link from "next/link";
import checkemail from "@/assets/auth/checkimage.png";

function CheckEmail() {
  return (
    <TamplateAuth
      image={checkemail}
      title="check email"
      description="please check your email inbox and click on the provided link to reset your password"
    >
      <div className="mt-10">
        <Link className="text-[16px] text-Muted-Gray-200" href={"/login"}>
          Back to
          <span className="border-b border-b-mutedtext-Muted-Gray-200 ml-2">
            Login
          </span>{" "}
        </Link>
      </div>
    </TamplateAuth>
  );
}

export default CheckEmail;
