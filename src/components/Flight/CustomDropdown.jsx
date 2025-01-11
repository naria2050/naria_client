"use client";

import React, { useState } from "react";

const CustomDropdown = ({ options, selectedOption, onSelect }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleOptionClick = (option) => {
        onSelect(option); // Pass the selected option to the parent
        setDropdownOpen(false); // Close dropdown after selection
    };

    return (
        <div className="relative w-full">
            {/* Dropdown Toggle */}
            <div
                className="flex items-center border border-gray-300 rounded-lg shadow-sm px-4 py-3 bg-white w-full cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
            >
                {/* Selected Option */}
                <div className="flex items-center">
                    <span className="text-lg font-bold text-blue-500 mr-4">
                        {selectedOption?.code || selectedOption}
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">
                            {selectedOption?.city || "City"}
                        </p>
                        <p className="text-sm text-gray-500">
                            {selectedOption?.airport || "Airport"}
                        </p>
                    </div>
                </div>
            </div>

            {/* Dropdown Menu */}
            {dropdownOpen && (
                <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                    {options.map((option) => (
                        <li
                            key={option.code}
                            className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                            onClick={() => handleOptionClick(option)}
                        >
                            <div className="flex items-center">
                                <span className="text-lg font-bold text-blue-500 mr-4">
                                    {option.code}
                                </span>
                                <div>
                                    <p className="font-semibold text-gray-800">{option.city}</p>
                                    <p className="text-sm text-gray-500">{option.airport}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomDropdown;
