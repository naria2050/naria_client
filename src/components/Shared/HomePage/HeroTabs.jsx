"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdKeyboardArrowDown, MdOutlineMedicalServices, MdOutlinePhoneEnabled } from "react-icons/md";
import { LuHotel, LuPlane } from "react-icons/lu";
import { LiaCcVisa } from "react-icons/lia";
// import { LuPlane } from "react-icons/lu";
import { PiPlanet } from "react-icons/pi";
import FlightTab from "../HeroTabsFolder/FlightTab";

const TabsSection = () => {
    const [selectedTab, setSelectedTab] = useState("flight");

    const tabs = [
        {
            key: "flight",
            title: "Flight",
            icon: <LuPlane/>,
            activeColor: "text-[#de8007]",
            inactiveColor: "text-gray-400",
        },
        {
            key: "hotel",
            title: "Hotel",
            icon: <LuHotel />,
            activeColor: "text-[#de8007]",
            inactiveColor: "text-gray-400",
        },
        {
            key: "holiday",
            title: "Holiday",
            icon: <PiPlanet />,
            activeColor: "text-[#de8007]",
            inactiveColor: "text-gray-400",
        },
    ];

    return (
        <div className="absolute -bottom-[350x] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded-lg px-8 py-6 space-y-6 w-[1150px] h-[350px] z-10">
            {/* Tab Headers */}
            <div className="relative flex items-center justify-normal border-b border-gray-200">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setSelectedTab(tab.key)}
                        className={`relative flex items-center gap-2 px-6 py-3 text-sm font-medium transition ${selectedTab === tab.key
                                ? "text-blue-600 font-semibold"
                                : "text-gray-600 hover:text-gray-800"
                            }`}
                    >
                        <span
                            className={`transition-colors ${selectedTab === tab.key
                                    ? tab.activeColor
                                    : tab.inactiveColor
                                }`}
                        >
                            {tab.icon}
                        </span>
                        {tab.title}
                        {selectedTab === tab.key && (
                            <motion.div
                                layoutId="underline"
                                className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded"
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Tab Content Placeholder */}
            <div className="">
                <motion.div
                    key={selectedTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                >
                    {selectedTab === "flight" && (
                        <div>
                           <FlightTab/>
                        </div>
                    )}
                    {selectedTab === "hotel" && (
                        <div>
                            <h2 className="text-lg font-bold">Hotel Tab Content</h2>
                            <p>Discover amazing hotel deals.</p>
                        </div>
                    )}
                    {selectedTab === "holiday" && (
                        <div>
                            <h2 className="text-lg font-bold">Holiday Tab Content</h2>
                            <p>Plan your perfect holiday package.</p>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default TabsSection;
