import React from "react";
import TamplateAuth from "./tamplate-auth";
import verifimage from "@/assets/auth/verifimage.png";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";

function FormVerification() {
  return (
    <div>
      <TamplateAuth
        image={verifimage}
        title="verification"
        description="verify your code"
      >
        <form action="" className="mt-12.5">
          <Input label="verification Code" placeholder="verify your code"/>
          <div className="mt-12.5">
            <Button type="submit" className="px-11">
              Verify Code
            </Button>
          </div>
        </form>
      </TamplateAuth>
    </div>
  );
}

export default FormVerification;
