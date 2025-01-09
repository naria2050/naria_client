"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export const CustomAccordion = ({ details }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="pt-2 px-4 rounded-lg border-gray-200 ">
            {/* Menu */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <p className="bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded-lg">
                        {details.refundPolicy}
                    </p>
                    <p className="bg-yellow-100 text-yellow-600 text-xs font-medium px-2 py-1 rounded-lg">
                        ⭐ {details.rating}
                    </p>
                    <p className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-lg">
                        Pay Later
                    </p>
                </div>
                <button
                    onClick={toggleAccordion}
                    className="text-blue-500 text-sm font-semibold focus:outline-none"
                >
                    {isOpen ? "Hide Details" : "View Details"}
                </button>
            </div>

            {/* Accordion Content */}
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
            >
                <div className="mt-4">
                    <div className="flex justify-between gap-4">
                        {/* Left Section */}
                        <div className="flex-1 bg-[#f4f7fc] p-4 rounded-lg">
                            <div className="flex items-center mb-4">
                                <span className="text-blue-500 text-lg mr-2">📍</span>
                                <p className="font-semibold text-gray-700">Departure from {details.departureCity}</p>
                            </div>
                            <p className="text-sm text-gray-500 mb-4">{details.departureAirport}</p>
                            <div className="flex items-center mb-4">
                                <img
                                    src={details.img}
                                    alt="Airline Logo"
                                    className="w-8 h-8 mr-4"
                                />
                                <div>
                                    <p className="font-bold text-lg">{details.route}</p>
                                    <p className="text-sm text-gray-500">{details.duration}</p>
                                </div>
                            </div>
                            <div className="text-sm text-gray-500">
                                <p>
                                    Flight no: <span className="font-medium">{details.flightNo}</span>
                                </p>
                                <p>
                                    Class: <span className="font-medium">{details.class}</span>
                                </p>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="flex-1 bg-[#f4f7fc] p-4 rounded-lg">
                            <div className="flex items-center mb-4">
                                <span className="text-blue-500 text-lg mr-2">📍</span>
                                <p className="font-semibold text-gray-700">Departure from {details.departureCity}</p>
                            </div>
                            <p className="text-sm text-gray-500 mb-4">
                                {details.arrivalAirport}
                            </p>
                            <div className="flex items-center mb-4">
                                <img
                                    src={details.img}
                                    alt="Airline Logo"
                                    className="w-8 h-8 mr-4"
                                />
                                <div>
                                    <p className="font-bold text-lg">{details.route}</p>
                                    <p className="text-sm text-gray-500">{details.duration}</p>
                                </div>
                            </div>
                            <div className="text-sm text-gray-500">
                                <p>
                                    Flight no: <span className="font-medium">{details.flightNo}</span>
                                </p>
                                <p>
                                    Class: <span className="font-medium">{details.class}</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-4">
                        <h3 className="font-semibold text-gray-700 mb-2">Policy</h3>
                        <p className="text-sm text-gray-500">
                            Refunds and Date Changes are done as per the following policies.
                            Refund is calculated by deducting Airline's fee and service fee from
                            the paid amount. Date Change fee is calculated by adding Airline's
                            fee, fare difference, and service fee.
                        </p>
                        <p className="text-blue-500 text-sm font-semibold mt-2 cursor-pointer">
                            Show More Information
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
