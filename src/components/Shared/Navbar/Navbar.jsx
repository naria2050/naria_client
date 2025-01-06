"use client";
// Import required libraries
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowDown, MdOutlineMedicalServices, MdOutlinePhoneEnabled } from "react-icons/md";
import { LuHotel, LuPlane } from "react-icons/lu";
import { LiaCcVisa } from "react-icons/lia";

export default function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleDropdownToggle = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const closeDropdown = () => {
        setOpenDropdown(null);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const handleClickOutside = (event) => {
        if (!event.target.closest(".dropdown-menu")) {
            setOpenDropdown(null);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const menuItems = [
        { name: "Flights", href: "/about", icon: LuPlane },
        { name: "Hotels", href: "/contact", icon: LuHotel },
        {
            name: "Holiday",
            href: "",
            icon: MdOutlineMedicalServices,
            subMenu: [
                { name: "Medical Services", href: "/medical/services" },
                { name: "Insurance", href: "/medical/insurance" },
            ],
        },
        {
            name: "Visa",
            href: "",
            icon: LiaCcVisa,
            subMenu: [
                { name: "Apply for Visa", href: "/visa/apply" },
                { name: "Visa Status", href: "/visa/status" },
            ],
        },
        {
            name: "Hajj Packages",
            href: "",
            icon: MdOutlineMedicalServices,
            subMenu: [
                { name: "Medical Services", href: "/medical/services" },
                { name: "Insurance", href: "/medical/insurance" },
            ],
        },
        {
            name: "Umrah Packages",
            href: "",
            icon: MdOutlineMedicalServices,
            subMenu: [
                { name: "Medical Services", href: "/medical/services" },
                { name: "Insurance", href: "/medical/insurance" },
            ],
        },
        { name: "Contact Us", href: "/contact", icon: MdOutlinePhoneEnabled },
    ];

    return (
        <>
            <nav className="bg-white border-b fixed w-full z-10 ">
                <div className="container mx-auto px-4 flex justify-between items-center py-2">
                    {/* Logo */}
                    <Link href="/" legacyBehavior>
                        <a>
                            <Image
                                src="https://i.ibb.co.com/84RqZNX/logo.png"
                                alt="Logo"
                                width={150}
                                height={50}
                                className="cursor-pointer"
                            />
                        </a>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6 items-center font-semibold ">
                        {menuItems.map((item, index) => (
                            <li key={item.name} className="relative group dropdown-menu">
                                <Link href={item.href} legacyBehavior>
                                    <a
                                        className="flex items-center text-gray-700 hover:text-naria-color cursor-pointer transition"
                                        onClick={() => handleDropdownToggle(index)}
                                    >
                                        <item.icon className="mr-2 size-5" />
                                        <span>{item.name}</span>
                                        {item.subMenu && (
                                            <motion.div
                                                initial={{ rotate: 0 }}
                                                animate={{ rotate: openDropdown === index ? 180 : 0 }}
                                                className="ml-1"
                                            >
                                                <MdKeyboardArrowDown />
                                            </motion.div>
                                        )}
                                    </a>
                                </Link>
                                {item.subMenu && openDropdown === index && (
                                    <motion.ul
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute left-0 mt-2 bg-white shadow-lg py-2 w-40"
                                    >
                                        {item.subMenu.map((subItem) => (
                                            <li key={subItem.name}>
                                                <Link href={subItem.href} legacyBehavior>
                                                    <a className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:nariaH">
                                                        {subItem.name}
                                                    </a>
                                                </Link>
                                            </li>
                                        ))}
                                    </motion.ul>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Login/Signup Buttons */}
                    <div className="hidden md:flex space-x-4">
                        <Link href="/login" legacyBehavior>
                            <a className="text-white font-semibold border bg-naria-color px-4 py-2 rounded-3xl hover:bg-naria-color hover:text-white transition">
                                Login
                            </a>
                        </Link>
                        {/* <Link href="/signup" legacyBehavior>
                            <a className="bg-naria-color text-white px-4 py-2 rounded hover:bg-[blue-700] transition">
                                Signup
                            </a>
                        </Link> */}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden focus:outline-none text-gray-700"
                        onClick={toggleMobileMenu}
                    >
                        <span className="sr-only">Toggle Mobile Menu</span>
                        <div className="space-y-1">
                            <motion.div
                                className="w-6 h-0.5 bg-gray-700"
                                animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 8 : 0 }}
                            ></motion.div>
                            <motion.div
                                className="w-6 h-0.5 bg-gray-700"
                                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                            ></motion.div>
                            <motion.div
                                className="w-6 h-0.5 bg-gray-700"
                                animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -8 : 0 }}
                            ></motion.div>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-white shadow-md md:hidden"
                    >
                        <ul className="space-y-4 px-4 py-6">
                            {menuItems.map((item, index) => (
                                <li key={item.name} className="relative dropdown-menu">
                                    <div
                                        className="flex items-center text-gray-700 hover:text-blue-600 cursor-pointer"
                                        onClick={() => handleDropdownToggle(index)}
                                    >
                                        <item.icon className="mr-2" />
                                        <span>{item.name}</span>
                                        {item.subMenu && (
                                            <motion.div
                                                initial={{ rotate: 0 }}
                                                animate={{ rotate: openDropdown === index ? 180 : 0 }}
                                                className="ml-1"
                                            >
                                                <MdKeyboardArrowDown />
                                            </motion.div>
                                        )}
                                    </div>
                                    {item.subMenu && openDropdown === index && (
                                        <ul className="pl-4 mt-2 space-y-2">
                                            {item.subMenu.map((subItem) => (
                                                <li key={subItem.name}>
                                                    <Link
                                                        href={subItem.href}
                                                        legacyBehavior
                                                        onClick={closeMobileMenu}
                                                    >
                                                        <a className="block text-gray-600 hover:text-blue-500">
                                                            {subItem.name}
                                                        </a>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* Login/Signup Buttons for Mobile */}
                        <div className="space-y-4 px-4 py-6">
                            <Link href="/login" legacyBehavior onClick={closeMobileMenu}>
                                <a className="block text-blue-600 border border-blue-600 px-4 py-2 text-center rounded-lg hover:bg-naria-color hover:text-white transition">
                                    Login
                                </a>
                            </Link>
                            {/* <Link href="/signup" legacyBehavior onClick={closeMobileMenu}>
                                <a className="block bg-naria-color text-white text-center px-4 py-2 rounded hover:bg-blue-700 transition">
                                    Signup
                                </a>
                            </Link> */}
                        </div>
                    </motion.div>
                )}
            </nav>
        </>
    );
}
