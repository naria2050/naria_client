"use client";

import React, { useEffect, useState } from "react";
import { Card, CardBody, Dropdown } from "@nextui-org/react";
import { IoIosSwap } from "react-icons/io";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MdArrowDropDown, MdNoAdultContent } from "react-icons/md";
import { IoMan } from "react-icons/io5";


const FlightTab = ({ onFlightDataChange }) => {
    const [tripType, setTripType] = useState("oneWay");
    const [fareType, setFareType] = useState("regular");
    const [selectedFrom, setSelectedFrom] = useState("Dhaka");
    const [selectedTo, setSelectedTo] = useState("Cox's Bazar");
    const [departureDate, setDepartureDate] = useState("");

    // Merged airport data with code and name
    const airports = {
        Dhaka: { name: "Hazrat Shahjalal International Airport", code: "DAC" },
        "Cox's Bazar": { name: "Cox's Bazar Airport", code: "CXB" },
        Sylhet: { name: "Osmani International Airport", code: "ZYL" },
        Bangalore: { name: "Bangalore  International Airport", code: "BLR" },
        Dubai: { name: "Dubai  International Airport", code: "DXB" },
    };

    useEffect(() => {
        if (onFlightDataChange) {
            onFlightDataChange({
                OriginDestinationInformations: [
                    {
                        DepartureDateTime: departureDate || new Date().toISOString(),
                        OriginLocationCode: airports[selectedFrom].code,
                        DestinationLocationCode: airports[selectedTo].code,
                    },
                ],
                TravelPreferences: { AirTripType: tripType },
                PricingSourceType: "Public",
                PassengerTypeQuantities: [{ Code: "ADT", Quantity: 1 }],
                RequestOptions: "Fifty",
            });
        }
    }, [tripType, selectedFrom, selectedTo, departureDate]);

    const toggleLocations = () => {
        setSelectedFrom(selectedTo);
        setSelectedTo(selectedFrom);
    };

    return (
        <Card className="shadow-none border">
            <CardBody className="p-4 mb-2">
                {/* Trip Type Selection */}
                <div className="flex gap-6 mb-4 justify-between">
                    <div className="flex gap-4">{[
                        { label: "One Way", value: "oneWay" },
                        { label: "Round Trip", value: "roundTrip" },
                        { label: "Multi City", value: "multiCity" },
                    ].map((type) => (
                        <label
                            key={type.value}
                            className="flex items-center text-sm font-medium gap-2 cursor-pointer"
                            onClick={() => setTripType(type.value)}
                        >
                            <input
                                type="radio"
                                name="tripType"
                                className="hidden"
                                checked={tripType === type.value}
                                onChange={() => setTripType(type.value)}
                            />
                            <span
                                className={`w-4 h-4 border rounded-full flex items-center justify-center ${tripType === type.value
                                    ? "border-red-500"
                                    : "border-gray-400"
                                    }`}
                            >
                                {tripType === type.value && (
                                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                )}
                            </span>
                            {type.label}
                        </label>
                    ))}</div>
                    <div className="flex gap-4">
                        {/* traveler  */}
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <p className="flex items-center p-1 px-3 bg-ye rounded-lg gap-2 border border-gray-300 focus:outline-none focus:ring focus:border-blue-300">
                                        1 Traveler <MdArrowDropDown />
                                    </p>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>
                                        <div className="flex gap-4 items-center">
                                            <div className="text-[#32354e]"><IoMan /></div>
                                            <div>Adults</div>
                                            <div className="flex items-center gap-3">
                                                <button
                                                    className="px-2 py- border rounded-full border-naria-holiday-blue hover:bg-gray-200"
                                                    onClick={() => {
                                                        const count = parseInt(
                                                            document.querySelector(
                                                                ".dropdown-counter"
                                                            ).textContent
                                                        );
                                                        document.querySelector(
                                                            ".dropdown-counter"
                                                        ).textContent = count - 1;
                                                    }}
                                                >
                                                    <p className="text-naria-holiday-blue">-</p>
                                                </button>
                                                <span className="dropdown-counter">1</span>
                                                <button
                                                    className="px-2 py- border rounded-full hover:bg-gray-200"
                                                    onClick={() => {
                                                        const count = parseInt(
                                                            document.querySelector(
                                                                ".dropdown-counter"
                                                            ).textContent
                                                        );
                                                        document.querySelector(
                                                            ".dropdown-counter"
                                                        ).textContent = count + 1;
                                                    }}
                                                >
                                                    +
                                                </button>
                                            </div></div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Profile</DropdownMenuItem>
                                    <DropdownMenuItem>Billing</DropdownMenuItem>
                                    <DropdownMenuItem>Team</DropdownMenuItem>
                                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        {/* economy  */}
                        <div></div>
                    </div>
                </div>

                {/* Input Fields */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                        <label className="block text-sm font-medium">From</label>
                        <select
                            className="w-full px-4 py-2 border rounded-lg appearance-none"
                            value={selectedFrom}
                            onChange={(e) => setSelectedFrom(e.target.value)}
                        >
                            {Object.keys(airports).map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                        <p className="text-xs text-gray-500 mt-1">
                            {airports[selectedFrom].name}
                        </p>
                    </div>
                    {/* Toggle Switch */}
                    <div className="absolute left-[260px] top-[75px] flex justify-center items-center">
                        <button
                            onClick={toggleLocations}
                            className="w-8 h-8 bg-white border border-red-500 rounded-full flex items-center justify-center shadow-md hover:bg-red-100"
                            aria-label="Switch locations"
                        >
                            <IoIosSwap />
                        </button>
                    </div>
                    <div>
                        <label className="block text-sm font-medium">To</label>
                        <select
                            className="w-full px-4 py-2 border rounded-lg appearance-none"
                            value={selectedTo}
                            onChange={(e) => setSelectedTo(e.target.value)}
                        >
                            {Object.keys(airports).map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                        <p className="text-xs text-gray-500 mt-1">
                            {airports[selectedTo].name}
                        </p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Departure</label>
                        <input
                            type="date"
                            className="w-full px-4 py-2 border rounded-lg"
                            value={departureDate}
                            onChange={(e) => setDepartureDate(e.target.value)}
                        />
                    </div>
                </div>

                {/* Fare Type */}
                <div className="mt-6">
                    <label className="block text-sm font-medium mb-2">Fare Type:</label>
                    <div className="flex gap-6">
                        {[
                            { label: "Regular Fares", value: "regular" },
                            { label: "Student Fares", value: "student" },
                            { label: "Seaman Fares", value: "seaman" },
                        ].map((fare) => (
                            <label
                                key={fare.value}
                                className="flex items-center gap-2 cursor-pointer"
                                onClick={() => setFareType(fare.value)}
                            >
                                <input
                                    type="radio"
                                    name="fareType"
                                    className="hidden"
                                    checked={fareType === fare.value}
                                    onChange={() => setFareType(fare.value)}
                                />
                                <span
                                    className={`w-4 h-4 border rounded-full flex items-center justify-center ${fareType === fare.value
                                        ? "border-red-500"
                                        : "border-gray-400"
                                        }`}
                                >
                                    {fareType === fare.value && (
                                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                    )}
                                </span>
                                {fare.label}
                            </label>
                        ))}
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default FlightTab;
