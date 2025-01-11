"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { LuHotel, LuPlane } from "react-icons/lu";
import { PiPlanet } from "react-icons/pi";
import FlightTab from "../HeroTabsFolder/FlightTab";
import { useRouter } from "next/navigation";
import Link from "next/link";

const TabsSection = () => {
    const [selectedTab, setSelectedTab] = useState("flight");
    const [flightData, setFlightData] = useState(null);
    const router = useRouter();

    const tabs = [
        { key: "flight", title: "Flight", icon: <LuPlane /> },
        { key: "hotel", title: "Hotel", icon: <LuHotel /> },
        { key: "holiday", title: "Holiday", icon: <PiPlanet /> },
    ];

    const handleSearch = () => {
        if (selectedTab === "flight" && flightData) {
            // Navigate to flight page with flightData as a query parameter
            router.push(
                `/flight?data=${encodeURIComponent(JSON.stringify(flightData))}`
            );
        }
    };

    return (
        <div className="absolute -bottom-[370px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded-lg px-8 py-6 space-y-6 w-[1150px] h-[350px] z-10 mt-14">
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
                        <span>{tab.icon}</span>
                        {tab.title}
                        {selectedTab === tab.key && (
                            <motion.div
                                layoutId="underline"
                                className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded"
                                transition={{
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 30,
                                }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <motion.div
                key={selectedTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
            >
                {selectedTab === "flight" && (
                    <FlightTab onFlightDataChange={setFlightData} />
                )}
                {selectedTab === "hotel" && <div>Hotel Tab Content</div>}
                {selectedTab === "holiday" && <div>Holiday Tab Content</div>}
            </motion.div>

            <div className="flex justify-center ">
                <button
                    onClick={handleSearch}
                    className=" px-14 py-4 bg-naria-color text-white rounded-2xl shadow-md hover:bg-[#de8007] transition duration-300 flex items-center justify-center"
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default TabsSection;
