const TabsSection = () => {
    return (
        <div className="absolute -bottom-52 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded-lg px-8 py-6 space-y-4 max-w-5xl z-2 ">
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-800 border-b-2 border-[#de8000]">
                    <span role="img" aria-label="Flight" className="mr-2">✈️</span> Flight
                </button>
                <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-800 hover:text-[#de8000]">
                    <span role="img" aria-label="Hotel" className="mr-2">🏨</span> Hotel
                </button>
                <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-800 hover:text-[#de8000]">
                    <span role="img" aria-label="Holiday" className="mr-2">🌴</span> Holiday
                </button>
            </div>
            <div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                        <label className="block text-sm font-medium">From</label>
                        <input
                            type="text"
                            placeholder="Enter Departure City"
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">To</label>
                        <input
                            type="text"
                            placeholder="Enter Destination City"
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Departure</label>
                        <input type="date" className="w-full px-4 py-2 border rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Return</label>
                        <input type="date" className="w-full px-4 py-2 border rounded-lg" />
                    </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <div>
                        <label className="block text-sm font-medium">Travellers</label>
                        <select className="w-40 px-4 py-2 border rounded-lg">
                            <option>1 Traveller</option>
                            <option>2 Travellers</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Class</label>
                        <select className="w-40 px-4 py-2 border rounded-lg">
                            <option>Economy</option>
                            <option>Business</option>
                        </select>
                    </div>
                    <button className="bg-[#de8000] text-white px-6 py-2 rounded-lg hover:bg-orange-600">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TabsSection;
