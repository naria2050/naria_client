import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { CustomAccordion } from "./CustomAccordion";


const FlightListing = ({ flights }) => {
    
    return (
        <div className=" min-h-screen px-4">
            {/* Header */}
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold">3 Available Flights</h2>
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
                                        src={flight.img}
                                        alt={`${flight.carrier} logo`}
                                        className="w-12 h-12 object-contain"
                                    />
                                    <div>
                                        <h3 className="text-lg font-bold">{flight.route}</h3>
                                        <p className="text-gray-500 text-sm">{flight.carrier}</p>
                                        <p className="text-xs text-gray-400">{flight.duration}</p>
                                    </div>
                                </div>

                                {/* Timing and Flight Info */}
                                <div className="text-center">
                                    <p className="font-semibold text-gray-700">{flight.departureTime}</p>
                                    <p className="text-xs text-gray-500">{flight.departureDate}</p>
                                    <p className="text-xs text-gray-500">{flight.departureAirport}</p>

                                </div>

                                <div className="text-center">
                                    <p className="font-semibold text-gray-700">{flight.arrivalTime}</p>
                                    <p className="text-xs text-gray-500">{flight.arrivalDate}</p>
                                    <p className="text-xs text-gray-500">{flight.arrivalAirport}</p>

                                </div>

                                <div className="text-center">
                                    <span className="text-sm font-bold text-gray-700">Non-Stop</span>
                                    <p className="text-xs text-gray-500">{flight.destination}</p>
                                </div>

                                {/* Right Side */}
                                <div className="text-right mt-4 ">
                                    <p className="text-blue-500 text-xl font-bold">
                                        ৳ {flight.price}
                                    </p>
                                    <p className="text-sm text-gray-500 line-through">
                                        ৳ {flight.originalPrice}
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