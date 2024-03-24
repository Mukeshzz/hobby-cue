import React, { useState } from "react";
import Home from "../pages/Home";
import logo from "../images/logo.png";
import { IoMdCompass } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { LiaStarSolid } from "react-icons/lia";
import { IoNotifications } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import ExploreDropDown from "./ExploreDropDown";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <nav className=" flex w-[360px] h-[48px] sm:w-[1440px] sm:h-[80px]">
      <div className="my-2 ml-[22px] sm:my-[10px] sm:ml-[97px] sm:w-[293px] sm:h-[60px]">
        <img
          className="w-[156px] h-[32px] sm:w-[293px] sm:h-[60px]"
          src={logo}
          alt=""
        />
      </div>

      <div className="sm:hidden flex gap-4 my-3 ml-[53px] mr-[24px]">
        <button>
          <IoSearch className="text-[#8064A2] h-[18px] w-[18px]" />
        </button>

        <button>
          <IoNotifications className="text-[#8064A2] w-[16px] h-[20px]" />
        </button>

        <button>
          <IoNotifications className="text-[#8064A2] w-[16px] h-[20px]" />
        </button>
      </div>

      <div className="hidden sm:flex sm:my-5 sm:ml-[34px] sm:mr-[90px] h-[40xp] w-[300px]">
        <input
          className="h-[40px] w-[260px] border-[1px] border-[#EBEDF0] rounded-l-md"
          type="text"
          placeholder="Search here..."
        />
        <button className="rounded-r-md h-[40px] w-[40px] bg-[#8064A2] p-[12px] text-white bold">
          <CiSearch />
        </button>
      </div>

      <div className="hidden sm:flex items-center justify-between mr-[100px] w-[525px] h-[40px] my-5">
        <button onClick={toggleDropdown} className="focus:outline-none">
          <div className="flex justify-between items-center">
            <IoMdCompass className="h-[19px] w-[19px] text-[#8064A2]" />
            Explore
          </div>
        </button>

        <button>
          <div className="flex justify-between items-center">
            <LiaStarSolid className="h-[19px] w-[19px] text-[#8064A2]" />
            Hobbies
          </div>
        </button>

        <div>
          <FaBookmark className="h-[19px] w-[19px] text-[#8064A2]" />
        </div>

        <div>
          <IoNotifications className="h-[19px] w-[19px] text-[#8064A2]" />
        </div>

        <div>
          <FaShoppingCart className="h-[19px] w-[19px] text-[#8064A2]" />
        </div>
        <div className="w-[112px] h-[40px">
          <button className="border border-[#8064A2] rounded-md font-semibold text-[14px] w-full px-[20] py-[10px] text-[#8064A2]">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
