"use client";
import React, { useState } from "react";

const PriceRange = () => {
    const [minPrice, setMinPrice] = useState(4637);
    const [maxPrice, setMaxPrice] = useState(10764);

    const handleMinChange = (e) => {
        const value = Math.min(Number(e.target.value), maxPrice - 1);
        setMinPrice(value);
    };

    const handleMaxChange = (e) => {
        const value = Math.max(Number(e.target.value), minPrice + 1);
        setMaxPrice(value);
    };

    return (
        <div className="p-4 bg-[#f4f7fc] shadow-md rounded-md">
            <div className="flex justify-between items-center">
                <h3 className="text-sm font-semibold">Price Range</h3>
                <button className="text-sm text-gray-500">▼</button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
                Starts from <span className="font-bold">৳ {minPrice}</span> - <span className="font-bold">৳ {maxPrice}</span> against your search. Price is a subject to change.
            </p>
            <div className="flex flex-col mt-4">
                <div className="relative flex items-center justify-between">
                    <input
                        type="range"
                        min="4637"
                        max="10764"
                        value={minPrice}
                        onChange={handleMinChange}
                        className="absolute w-full h-1 bg-blue-200 rounded-lg appearance-none"
                    />
                    <input
                        type="range"
                        min="4637"
                        max="10764"
                        value={maxPrice}
                        onChange={handleMaxChange}
                        className="absolute w-full h-1 bg-transparent appearance-none pointer-events-none"
                    />
                    <div className="w-full h-1 bg-blue-500 rounded-lg"></div>
                </div>
                <div className="flex justify-between mt-4 text-xs font-medium">
                    <span>BDT {minPrice}</span>
                    <span>BDT {maxPrice}</span>
                </div>
            </div>
        </div>
    );
};

export default PriceRange;
