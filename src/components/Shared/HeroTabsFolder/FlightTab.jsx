"use client";

import React, { useEffect, useState } from "react";
import { Card, CardBody } from "@nextui-org/react";

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
                <div className="flex gap-6 mb-4">
                    {[
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
                    ))}
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
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5 text-red-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 12H4.5m0 0l5-5m-5 5l5 5m10 0l-5-5m5 5l-5-5"
                                />
                            </svg>
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
