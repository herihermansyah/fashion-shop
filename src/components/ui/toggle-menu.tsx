import React from "react";
import Button from "./button";

type ToggleMenuProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  iconOn: React.ReactNode;
  iconOf: React.ReactNode;
  click?: boolean;
};

const ToggleMenu = ({iconOf, iconOn, click, ...props}: ToggleMenuProps) => {
  return (
    <Button
      variant={"v2"}
      className="cursor-pointer bg-Muted-Gray ring-0 text-Muted-Gray-200 p-2.25 active:scale-98"
      {...props}
    >
      {click ? iconOn : iconOf}
    </Button>
  );
};

export default ToggleMenu;
