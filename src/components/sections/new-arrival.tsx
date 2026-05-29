import React from "react";
import Typography from "../ui/typography";
import LineUp from "../ui/line-up";
import CategoryCollection from "../category-collection";

function NewArrival() {
  return (
    <section className="flex flex-col gap-17.5">
      <LineUp>
        <Typography variant={"h4"} className="capitalize text-[34px] font-bold">
          new arrival
        </Typography>
      </LineUp>
      <CategoryCollection />
    </section>
  );
}

export default NewArrival;
