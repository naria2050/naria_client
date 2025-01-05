"use client";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import avatarImg from "../../../../public/placeholder.jpg";

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isBusinessDropdownOpen, setIsBusinessDropdownOpen] = useState(false);

  const toggleDropdown = (dropdownSetter) => {
    dropdownSetter((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <button
          onClick={() => toggleDropdown(setIsOpen)}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
          aria-expanded={isOpen}
          aria-label="Menu toggle"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Image
              className="rounded-full"
              src={avatarImg}
              alt="Profile Avatar"
              height={30}
              width={30}
            />
          </div>
        </button>
      </div>

      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <Link
              href="/"
              className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Home
            </Link>

            <div
              className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold relative"
              onClick={() => toggleDropdown(setIsAboutDropdownOpen)}
            >
              About Us
              <FaChevronDown
                className={`ml-1 transition-transform duration-300 ${isAboutDropdownOpen ? "rotate-180" : ""
                  }`}
              />
              {isAboutDropdownOpen && (
                <div className="absolute top-8 left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <Link
                    href="/about/team"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Our Team
                  </Link>
                  <Link
                    href="/about/history"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Our History
                  </Link>
                </div>
              )}
            </div>

            <div
              className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold relative"
              onClick={() => toggleDropdown(setIsBusinessDropdownOpen)}
            >
              Business
              <FaChevronDown
                className={`ml-1 transition-transform duration-300 ${isBusinessDropdownOpen ? "rotate-180" : ""
                  }`}
              />
              {isBusinessDropdownOpen && (
                <div className="absolute top-8 left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <Link
                    href="/business/services"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Services
                  </Link>
                  <Link
                    href="/business/partners"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Partners
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Contact
            </Link>

            <Link
              href="/login"
              className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;
