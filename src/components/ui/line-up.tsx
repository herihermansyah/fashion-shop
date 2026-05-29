import React from "react";

function LineUp({children}: {children?: React.ReactNode}) {
  return (
    <div className="flex items-center gap-5">
      <div className="w-1.5 h-8 rounded-full bg-Electric-Purple" />
      {children}
    </div>
  );
}

export default LineUp;
