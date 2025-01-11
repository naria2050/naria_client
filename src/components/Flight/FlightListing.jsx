import {
    Accordion,
AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { CustomAccordion } from "./CustomAccordion";


const FlightListing = ({ flights }) => {
    const convertDollarToTk = (usd, exchangeRate = 120) => usd * exchangeRate;

    return (
        <div className=" min-h-screen px-4">
            {/* Header */}
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold">{flights.length} Available Flights</h2>
                    <button className="bg-green-500 text-white text-sm px-4 py-2 rounded-lg">
                        Clear 1 Filters
                    </button>
                </div>

                {/* Flight Listings */}
                <div className="max-w-6xl mx-auto">
                    {flights.map((flight, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 rounded-lg shadow-md mb-4 border border-gray-200"
                        >
                            {/* Best Deal Ribbon */}
                            {flight.bestDeal && (
                                <div className="absolute bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-tl-lg">
                                    Best Deal
                                </div>
                            )}
                            {/* Flight Details */}
                            <div className="flex justify-between items-start">
                                {/* Left Side */}
                                <div className="flex gap-4">
                                    <img
                                        src={flight.airline_img}
                                        alt={`${flight.carrier} logo`}
                                        className="w-12 h-12 object-contain"
                                    />
                                    <div>
                                        <div className="flex">
                                            <h3 className="text-lg font-bold">{flight.departureAirportCode}</h3> - <h3 className="text-lg font-bold">{flight.arrivalAirportCode}</h3>
                                        </div>
                                        <p className="text-gray-500 text-sm">{flight.airline_name}</p>
                                        <p className="text-xs text-gray-400">{flight.layoverTime}</p>
                                    </div>
                                </div>

                                {/* Timing and Flight Info */}


                                <div className="text-">
                                    <p className="font-semibold text-gray-700">
                                        {new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }).format(new Date(flight.DepartureDateTime))}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {new Intl.DateTimeFormat('en-US', { day: 'numeric', weekday: 'long', month: 'short' }).format(new Date(flight.DepartureDateTime))}
                                    </p>

                                    <p className="text-xs text-gray-500">{flight.departureAirportName}</p>

                                </div>


                                <div className="text-">
                                    <p className="font-semibold text-gray-700">
                                        {new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }).format(new Date(flight.ArrivalDateTime))}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {new Intl.DateTimeFormat('en-US', { day: 'numeric', weekday: 'long', month: 'short' }).format(new Date(flight.ArrivalDateTime))}
                                    </p>
                                   
                                    <p className="text-xs text-gray-500">{flight.arrivalAirportName}</p>

                                </div>

                         

                                <div className="text-center">
                                    <span className="text-sm font-bold text-gray-700">{flight.stoppage}</span>
                                    <p className="text-xs text-gray-500">{flight.stoppageAirports}</p>
                                </div>

                                {/* Right Side */}
                                <div className="text-right mt- ">
                                     <p className="text-blue-500 text-xl font-bold">
                                        ৳ {parseFloat(convertDollarToTk(flight.fares.BaseFare)).toFixed(2)}
                                    </p>
                                    <p className="text-sm text-gray-500 line-through">
                                        ৳ {parseFloat(convertDollarToTk(flight.fares.TotalFare)).toFixed(2)}
                                    </p> 
                                    <button className="bg-naria-color text-white px-4 py-2 rounded-lg shadow-md">
                                        Select
                                    </button>
                                </div>
                            </div>

                            {/* Additional Info */}
                            <div className=" mt-4">
                                <CustomAccordion details={flight} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FlightListing;