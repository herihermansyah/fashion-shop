import React from "react";
import AuthHeader from "./auth-header";

function AuthLayouts({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <AuthHeader />
      </header>
      <main>{children}</main>
    </div>
  );
}

export default AuthLayouts;
