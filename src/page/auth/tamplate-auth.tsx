"use client";
import Button from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import Image, {StaticImageData} from "next/image";
import React from "react";
import login from "@/assets/auth/loginimage.png";
import {usePathname} from "next/navigation";

interface TamplateLoginProps {
  children?: React.ReactNode;
  image?: string | StaticImageData;
  title?: string;
  description?: string;
}

function TamplateAuth({
  children,
  image,
  title,
  description,
}: TamplateLoginProps) {
  const pathname = usePathname();

  const authPage =
    pathname.startsWith("/verification") ||
    pathname.startsWith("/resetpassword") ||
    pathname.startsWith("/checkemail") ||
    pathname.startsWith("/createnewpassword");
  return (
    <div className="flex gap-19.25 large:w-wide mx-auto justify-center px-4 xl:px-0 container">
      <div className="lg:block hidden">
        <Image
          src={image || login}
          alt="login image"
          width={695}
          height={956}
          loading="eager"
        />
      </div>
      <div className="w-142 mt-5 sm:mt-15">
        <div className="flex flex-col gap-2.5 mb-12.5 ">
          <Typography variant={"h3"} className="capitalize leading-8">
            {title}
          </Typography>
          <Typography variant={"p"} className="text-Muted-Gray-200 font-normal">
            {description}
          </Typography>
        </div>
        {!authPage && (
          <div className="flex flex-col gap-5">
            <Button
              variant={"v2"}
              iconLeft={
                <>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.0002 10.2219C20.0002 9.39973 19.9321 8.79973 19.7848 8.17752H10.2041V11.8886H15.8277C15.7144 12.8108 15.1022 14.1997 13.7416 15.133L13.7225 15.2572L16.7517 17.557L16.9616 17.5775C18.889 15.833 20.0002 13.2664 20.0002 10.2219"
                      fill="#4285F4"
                    />
                    <path
                      d="M10.2027 20C12.9578 20 15.2708 19.1111 16.9602 17.5778L13.7402 15.1332C12.8785 15.7221 11.722 16.1332 10.2027 16.1332C7.5043 16.1332 5.21403 14.3888 4.39761 11.9777L4.27794 11.9877L1.12811 14.3766L1.08691 14.4888C2.76493 17.7555 6.21171 20 10.2027 20Z"
                      fill="#34A853"
                    />
                    <path
                      d="M4.39914 11.9778C4.18372 11.3556 4.05904 10.6889 4.05904 10C4.05904 9.31107 4.18372 8.64444 4.3878 8.02222L4.3821 7.88971L1.19278 5.46245L1.08843 5.51109C0.396838 6.86666 0 8.3889 0 10C0 11.6111 0.396838 13.1333 1.08843 14.4888L4.39914 11.9778"
                      fill="#FBBC05"
                    />
                    <path
                      d="M10.2028 3.86663C12.1189 3.86663 13.4114 4.67773 14.1484 5.35555L17.0283 2.59999C15.2596 0.988889 12.9579 0 10.2028 0C6.21174 0 2.76494 2.24442 1.08691 5.51105L4.38629 8.02218C5.21405 5.61109 7.50433 3.86663 10.2028 3.86663"
                      fill="#EB4335"
                    />
                  </svg>
                </>
              }
              className="capitalize"
            >
              continue with google
            </Button>
            <Button
              variant={"v2"}
              iconLeft={
                <>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.27767 20C3.96696 20 1.81298 19.1818 0 17.7701C1.53928 17.8914 4.25576 17.601 5.94541 15.6389C3.40363 15.497 2.25733 13.1237 2.10781 12.1095C2.32378 12.211 3.35379 12.3327 3.93524 12.0487C1.01136 11.1562 0.562805 8.03245 0.662483 7.07911C1.21071 7.54564 2.14104 7.70791 2.50652 7.66734C-0.218005 5.29412 0.762161 1.72414 1.24394 0.953347C3.19916 4.25101 6.12943 6.1031 9.75456 6.20612C9.68621 5.84118 9.65011 5.46124 9.65011 5.07099C9.65011 2.27036 11.5096 0 13.8034 0C15.0018 0 16.0817 0.619786 16.8398 1.61116C17.6406 1.3827 18.8459 0.847885 19.4352 0.385396C19.1382 1.68357 18.2135 2.76651 17.6542 3.16789C17.6589 3.18155 17.6497 3.15418 17.6542 3.16789C18.1455 3.07742 19.4748 2.76641 20 2.33266C19.7403 3.06196 18.76 4.27455 17.9555 4.95341C18.1052 12.9896 13.0546 20 6.27767 20Z"
                      fill="#47ACDF"
                    />
                  </svg>
                </>
              }
              className="capitalize"
            >
              continue with twitter
            </Button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

export default TamplateAuth;
