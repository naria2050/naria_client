import React from 'react';

const FooterNew = () => {
    return (
        <footer className="bg-white text-gray-700">
            <div className="container mx-auto px-6 py-10">
                <div className="flex flex-wrap justify-between">
                    {/* About Section */}
                    <div className="w-full md:w-1/4">
                        <h2 className="text-lg font-bold mb-4">ShareTrip</h2>
                        <p className="text-sm">
                            ShareTrip is the country’s first and leading online travel aggregator (OTA). Since our inception, we have dreamt of making travel easier for people of all ages and we move forward to make that dream into reality.
                        </p>
                    </div>

                    {/* Explore Section */}
                    <div className="w-full md:w-1/4">
                        <h2 className="text-lg font-bold mb-4">Explore</h2>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Terms & Conditions</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">FAQ</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Hotel Sitemap</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Medical Tourism</a></li>
                        </ul>
                    </div>

                    {/* Services Section */}
                    <div className="w-full md:w-1/4">
                        <h2 className="text-lg font-bold mb-4">Services</h2>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:underline">Flight</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Hotel</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Holiday</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Visa</a></li>
                        </ul>
                    </div>

                    {/* Useful Links */}
                    <div className="w-full md:w-1/4">
                        <h2 className="text-lg font-bold mb-4">Useful Links</h2>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:underline">Travel Guide</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Travel Advisory</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Visa Guide</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Visa Application</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-wrap justify-between mt-10 border-t pt-10">
                    {/* Contact Info */}
                    <div className="w-full md:w-1/3">
                        <h2 className="text-lg font-bold mb-4">Contact Us</h2>
                        <p>Email: <a href="mailto:ask@sharetrip.net" className="text-blue-500 hover:underline">ask@sharetrip.net</a></p>
                        <p>Phone: <a href="tel:+8809617617617" className="text-blue-500 hover:underline">+880 9617 617617</a></p>
                        <p>WhatsApp: <a href="#" className="text-blue-500 hover:underline">Message us</a></p>
                        <div className="flex mt-4 space-x-3">
                            <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>

                    {/* Dhaka Office */}
                    <div className="w-full md:w-1/3">
                        <h2 className="text-lg font-bold mb-4">ShareTrip Lounge (Dhaka)</h2>
                        <p>3rd Floor, House 1, Road 17, Block C, Banani, Dhaka 1213, Bangladesh</p>
                        <a href="#" className="text-blue-500 hover:underline">View Map</a>
                    </div>

                    {/* Chattogram Office */}
                    <div className="w-full md:w-1/3">
                        <h2 className="text-lg font-bold mb-4">Chattogram Office</h2>
                        <p>BM Height 5th Floor, 318 Sheikh Mujib Road, Chattogram 4100, Bangladesh</p>
                        <a href="#" className="text-blue-500 hover:underline">View Map</a>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="text-center mt-10 text-sm">
                    <p>© 2025 ShareTrip. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default FooterNew;
