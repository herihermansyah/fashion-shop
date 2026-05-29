import DownloadApp from "@/components/download-app";
import NavComposed from "@/components/nav-composed";
import SocialMedia from "@/components/social-media";
import Typography from "@/components/ui/typography";
import {
  companyMenuData,
  helpMenuData,
  infoMenuData,
  locationMenuData,
} from "@/data/menu-data";
import React from "react";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";

function Footer() {
  const allYears = new Date().getFullYear();
  return (
    <div className="bg-Charcoal py-14.75">
      <div className="mx-auto large:w-wide px-4 large:px-0 container">
        <div className="large:w-[1059] mx-auto flex flex-col gap-20 sm:gap-0">
          <div className="flex flex-wrap large:flex-nowrap gap-20">
            <NavComposed
              data={helpMenuData}
              getContent={(section) => section.content}
              title={(item) => item.title}
              subTitle={(subItem) => subItem.subTitle}
              href={(subItem) => subItem.href}
            />
            <NavComposed
              data={companyMenuData}
              getContent={(section) => section.content}
              title={(item) => item.title}
              subTitle={(subItem) => subItem.subTitle}
              href={(subItem) => subItem.href}
            />
            <NavComposed
              data={infoMenuData}
              getContent={(section) => section.content}
              title={(item) => item.title}
              subTitle={(subItem) => subItem.subTitle}
              href={(subItem) => subItem.href}
            />
            <NavComposed
              data={locationMenuData}
              getContent={(section) => section.content}
              title={(item) => item.title}
              subTitle={(subItem) => subItem.subTitle}
              href={(subItem) => subItem.href}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-10 justify-center sm:justify-between items-center sm:items-end">
            <SocialMedia />
            <DownloadApp />
          </div>
        </div>
        <div className="py-3 border-y border-Muted-Gray-200 mt-10.75">
          <div className="large:w-[1059] flex items-center justify-between mx-auto">
            <Typography
              variant={"h4"}
              className="text-White-Smoke capitalize text-[29px]"
            >
              popular category
            </Typography>
            <span className="text-White-Smoke">
              <MdOutlineKeyboardArrowDown size={45} />
            </span>
          </div>
        </div>
        <Typography
          variant={"h5"}
          className="text-center text-[18px] text-White-Smoke capitalize mt-10"
        >
          copyright &copy; {allYears} euphoria folks pvt ltd. all rights
          reserved
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
