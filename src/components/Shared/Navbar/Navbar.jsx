"use client"
// Import required libraries
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaHome, FaPassport, FaHeartbeat, FaPhone } from 'react-icons/fa';
import { MdKeyboardArrowDown, MdOutlineMedicalServices, MdOutlinePhoneEnabled } from 'react-icons/md';
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

    const handleClickOutside = (event) => {
        if (!event.target.closest('.dropdown-menu')) {
            setOpenDropdown(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const menuItems = [
        // { name: 'Home', href: '/', icon: <FaHome /> },
        { name: 'Flights', href: '/about', icon: <LuPlane /> },
        {
            name: 'Hotels', href: '/hotels', icon: <LuHotel />
        },
        {
            name: 'Visa',
            href: '#',
            icon: <LiaCcVisa />,
            subMenu: [
                { name: 'Apply for Visa', href: '/visa/apply' },
                { name: 'Visa Status', href: '/visa/status' },
            ],
        },
        {
            name: 'Medical',
            href: '#',
            icon: <MdOutlineMedicalServices />
            ,
            subMenu: [
                { name: 'Medical Services', href: '/medical/services' },
                { name: 'Insurance', href: '/medical/insurance' },
            ],
        },
        {
            name: 'Contact Us', href: '/contact', icon: <MdOutlinePhoneEnabled />
        },
    ];

    return (
        <>
            <nav className="bg-white border-b fixed w-full z-10">
                <div className="container mx-auto px-4 flex justify-between items-center py-2">
                    {/* Logo */}
                    <Link href="/">
                        <img
                            src="https://i.ibb.co.com/84RqZNX/logo.png"
                            alt="Logo"
                            width={150}
                            height={50}
                            className="cursor-pointer"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6 items-center">
                        {menuItems.map((item, index) => (
                            <li key={item.name} className="relative group dropdown-menu">
                                <div
                                    onClick={() => handleDropdownToggle(index)}
                                    className="flex items-center text-gray-700 hover:text-blue-600 cursor-pointer transition"
                                >
                                    {item.icon}
                                    <span className="ml-2">{item.name}</span>
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
                                    <motion.ul
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute left-0 mt-2 bg-white shadow-lg py-2 w-40"
                                    >
                                        {item.subMenu.map((subItem) => (
                                            <li key={subItem.name}>
                                                <Link
                                                    href={subItem.href}
                                                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                                                >
                                                    {subItem.name}
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
                        <Link
                            href="/login"
                            className="text-gray-700 hover:text-blue-600 transition"
                        >
                            Login
                        </Link>
                        <Link
                            href="/signup"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Signup
                        </Link>
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
            </nav>

            {/* Content Placeholder */}
            <div className="mt-[0px]">
                {/* This margin ensures content starts right below the navbar */}
                <div className="container mx-auto px-4 py-6">

                </div>
            </div>
        </>
    );
}
