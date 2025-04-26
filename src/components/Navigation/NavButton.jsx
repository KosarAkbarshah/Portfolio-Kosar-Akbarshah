import {
  GithubIcon,
  Home,
  Instagram,
  InstagramIcon,
  Linkedin,
  NotebookText,
  Palette,
  Phone,
  User,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import ResponsiveComponent from "../ResponsiveComponent";
import clsx from "clsx";
import { motion } from "framer-motion";

const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;

    case "about":
      return <User className="w-full h-auto" strokeWidth={1.5} />;

    case "projects":
      return <Palette className="w-full h-auto" strokeWidth={1.5} />;

    case "contact":
      return <Phone className="w-full h-auto" strokeWidth={1.5} />;

    case "linkedin":
      return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
    case "Instagram":
      return <InstagramIcon className="w-full h-auto" strokeWidth={1.5} />;
    case "resume":
      return <NotebookText className="w-full h-auto" strokeWidth={1.5} />;
    case "github":
      return <GithubIcon className="w-full h-auto" strokeWidth={1.5} />;

    default:
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
  }
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

const NavLink = motion(Link);

const NavButton = ({
  x,
  y,
  label,
  link,
  icon,
  newTab,
  labelDirection = "right",
}) => {
  return (
    <ResponsiveComponent>
      {({ size }) => {
        return size && size >= 480 ? (
          <div
            className="absolute z-50 cursor-pointer  "
            style={{
              transform: `translate(${x}, ${y})`,
            }}
          >
            <NavLink
              variants={item}
              href={link}
              target={newTab ? "_blank" : "_self"}
              className="text-foreground  rounded-full flex items-center justify-center 
                    custom-bg "
              aria-label={label}
              name={label}
            >
              <span
                className="relative  w-14 h-14 p-4 animate-spin-reverse 
                     hover:text-accent group-hover:pause"
              >
                {getIcon(icon)}
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full  " />
                {/* -translate-y-1/2 to center  */}
                <span
                  className="absolute hidden peer-hover:block 
                    px-2 py-1 left-full mx-2  top-1/2 -translate-y-1/2
                     bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap  "
                >
                  {label}
                </span>
              </span>
            </NavLink>
          </div>
        ) : (
          <div className=" z-50 cursor-pointer  ">
            <NavLink
              variants={item}
              href={link}
              target={newTab ? "_blank" : "_self"}
              className="text-foreground  rounded-full flex items-center justify-center 
            custom-bg"
              aria-label={label}
              name={label}
            >
              <span className="relative  xs:w-14 xs:h-14 sx:p-4 p-2.5  hover:text-accent ">
                {getIcon(icon)}
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                {/* -translate-y-1/2 to center  */}
                <span
                  className={clsx(
                    "absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap",
                    labelDirection === "left" ? "right-full left-auto" : ""
                  )}
                >
                  {label}
                </span>
              </span>
            </NavLink>
          </div>
        );
      }}
    </ResponsiveComponent>
  );
};

export default NavButton;
