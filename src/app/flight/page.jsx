"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { MdOutlineAccessAlarm } from "react-icons/md";
import PriceRange from "../../components/Flight/PriceRange";
import FlightListing from "../../components/Flight/FlightListing";
import axios from "axios";

const FlightPage = () => {
    const searchParams = useSearchParams(); // Use useSearchParams for query parameters
    // console.log(searchParams)
    const [timeRemaining, setTimeRemaining] = useState(600);
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchFlightData = async (data) => {
        try {
            const response = await axios.post(
                "https://flightkiya.cosmelic.com/api/b2c/search",
                data
            );
            setFlights(response.data.results || []); // Set fetched flights data
            console.log(response.data.results);
            setLoading(false); // Stop loading
        } catch (error) {
            console.error("Error fetching flight data:", error);
            setLoading(false); // Stop loading even if there's an error
        }
    };

    useEffect(() => {
        // Read the query parameter `data`
        const data = searchParams.get("data");
        console.log(data)
        if (data) {
            const parsedData = JSON.parse(decodeURIComponent(data));
            console.log(parsedData);
            fetchFlightData(parsedData); // Fetch flights based on passed data
        } else {
            fetchFlightData({
                OriginDestinationInformations: [
                    {
                        DepartureDateTime: "2025-02-03T00:00:00",
                        OriginLocationCode: "BLR",
                        DestinationLocationCode: "DXB",
                    },
                ],
                TravelPreferences: {
                    AirTripType: "OneWay",
                },
                PricingSourceType: "Public",
                PassengerTypeQuantities: [
                    {
                        Code: "ADT",
                        Quantity: 1,
                    },
                ],
                RequestOptions: "Fifty",
            }); // Default API call if no query params are present
        }

        // Countdown Timer
        const timer = setInterval(() => {
            setTimeRemaining((prevTime) => {
                if (prevTime <= 0) {
                    clearInterval(timer);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer); // Cleanup timer
    }, [searchParams]);

    // Format time as MM:SS
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    return (
        <div className="pt-20 bg-[#e3e8f1]">
            <div className="shadow-md bg-[#FAFBFC]">
                <div className="mx-auto max-w-5xl py-5 flex justify-between px-1">
                    <div>
                        <p className="font-bold text-xl">Bangalore (BLR) — Dubai (DXB)</p>
                        <ul className="list-disc pl-5 flex gap-6 text-xs">
                            <li>One Way</li>
                            <li>3 Feb</li>
                            <li>1 Traveller</li>
                            <li>Economy</li>
                        </ul>
                    </div>
                    <div className="pr-8">
                        <button className="btn px-6 py-2 bg-[#de810732] text-[#f28325] font-semibold rounded-2xl shadow-md hover:bg-[#f28c2f] hover:text-white hover:shadow-lg transition duration-300 flex items-center justify-center">
                            Modify
                        </button>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-5xl">
                <div className="flex min-h-screen">
                    {/* ------------------------ Sidebar ------------------------ */}
                    <div className="w-1/4">
                        <div className="gap-3 py-2 pt-5">
                            <div className="bg-white px-4 py-2 rounded-xl flex items-center justify-between gap-6">
                                <div className="flex items-center justify-between font-semibold">
                                    <MdOutlineAccessAlarm className="text-naria-color mr-2 font-bold" />
                                    <p>Time Remaining</p>
                                </div>
                                <p className="text-red-500">{formattedTime}</p>
                            </div>
                        </div>
                        <div className="py-2">
                            <PriceRange />
                        </div>
                        <div className="py-2">
                            <PriceRange />
                        </div>
                        <div className="py-2">
                            <PriceRange />
                        </div>
                    </div>
                    {/* Main content */}
                    <div className="flex-1 p-4">
                        {loading ? (
                            <div className="bg-white p-12 rounded-2xl shadow-md">
                                <div className="h-10 w-full bg-gray-200 rounded-full animate-pulse"></div>
                                <div className="h-6 w-1/2 bg-gray-200 rounded-full mt-4 animate-pulse"></div>
                                <div className="h-6 w-1/4 bg-gray-200 rounded-full mt-4 animate-pulse"></div>
                            </div>
                        ) : timeRemaining === 0 || flights.length === 0 ? (
                            <div className="bg-white p-12 rounded-2xl shadow-md">
                                <h1 className="text-3xl font-bold">No Flights Available</h1>
                                <p className="py-4">
                                    Sorry, we couldn't find any flights for your search criteria. Please try
                                    again with different dates or destinations.
                                </p>
                                <button className="btn px-6 py-2 bg-[#de810732] text-[#f28325] font-semibold rounded-2xl shadow-md hover:bg-[#f28c2f] hover:text-white hover:shadow-lg transition duration-300">
                                    Try Again
                                </button>
                            </div>
                        ) : (
                            <FlightListing flights={flights} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlightPage;
