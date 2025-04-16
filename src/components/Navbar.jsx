import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 "
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[20px] font-bold cursor-pointer">
            <span className=" text-yellow-300 text-[40px]">K</span>arkee
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
