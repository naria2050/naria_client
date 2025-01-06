"use client";
import React from "react"; // Import React
import Link from "next/link"; // Import Next.js Link
import { motion } from "framer-motion"; // Import Framer Motion for animations

export default function MobileMenu({ menuItems, openDropdown, handleDropdownToggle }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white shadow-md md:hidden"
        >
            <ul className="space-y-4 px-4 py-6">
                {menuItems.map((item, index) => (
                    <li key={item.name} className="relative dropdown-menu">
                        <Link href={item.href} legacyBehavior>
                            <a
                                className="flex items-center text-gray-700 hover:text-blue-600 cursor-pointer"
                                onClick={() => handleDropdownToggle(index)}
                            >
                                {item.icon}
                                <span className="ml-2">{item.name}</span>
                            </a>
                        </Link>
                        {item.subMenu && openDropdown === index && (
                            <ul className="pl-4 mt-2 space-y-2">
                                {item.subMenu.map((subItem) => (
                                    <li key={subItem.name}>
                                        <Link href={subItem.href} legacyBehavior>
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

            {/* Login/Signup Buttons */}
            <div className="space-y-4 px-4 py-6">
                <Link href="/login" legacyBehavior>
                    <a className="block text-gray-700 hover:text-blue-600">Login</a>
                </Link>
                <Link href="/signup" legacyBehavior>
                    <a className="block bg-blue-600 text-white text-center px-4 py-2 rounded hover:bg-blue-700">
                        Signup
                    </a>
                </Link>
            </div>
        </motion.div>
    );
}
