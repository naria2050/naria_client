import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { FaPhoneAlt } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="bg-[#AEDFFE] text-black">
            <div className="container mx-auto px-4 py-8">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Contact Us */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">CONTACT US</h2>
                        <div className="text-sm">

                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="16" height="16" style={{ color: 'red', marginRight: '8px' }}>
                                    <path d="M12 2C8.134 2 5 5.134 5 8c0 2.86 1.388 5.437 3.585 7.57L12 22l3.415-6.43C17.612 13.437 19 10.86 19 8c0-2.866-3.134-6-7-6zm0 9c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" fill="red" />
                                </svg>
                                <p>Sky View Trade Valley, (13th Floor),</p>
                            </div>
                            <p>66/1 VIP Road, Naya Paltan, Dhaka-1000, Bangladesh.</p>
                        </div>
                        <div className='flex gap-2  items-center'>
                            <FaPhoneAlt className='text-sm' />
                            <p className="text-sm">+8802-48322622-4</p>
                        </div>

                        <p className="text-sm">info@nariatravels.com</p>
                        <a
                            href="https://www.google.com.bd/maps/place/Naria+Travels+and+Tours/@23.735557,90.4138003,17z/data=!4m6!3m5!1s0x3755b91d2137408d:0x37bb3da324d1a5a0!8m2!3d23.7354852!4d90.4142737!16s%2Fg%2F11h_60365b?hl=en&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-500 underline mt-2 inline-block"
                        >
                            Get direction on Google Map
                        </a>


                    </div>

                    {/* Quick Menu */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">QUICK MENU</h2>
                        <ul className="text-sm space-y-2">
                            <li>
                                <a href="#" className="hover:text-gray-400 transition duration-300">
                                    MESSAGE FROM CEO
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400 transition duration-300">
                                    TOUR PACKAGE
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400 transition duration-300">
                                    AYAS PATA
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400 transition duration-300">
                                    HAU & UMRAH PACKAGE
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400 transition duration-300">
                                    VISA SERVICES
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Our Partner */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">OUR PARTNER</h2>
                        <ul className="text-sm space-y-2">
                            <li>
                                <a href="#" className="hover:text-gray-400 transition duration-300">
                                    VISA
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400 transition duration-300">
                                    WE AR
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400 transition duration-300">
                                    We Accept
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400 transition duration-300">
                                    HOTEL BOOKING
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company Overview */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">COMPANY OVERVIEW</h2>
                        <ul className="text-sm space-y-2">
                            <li>Accredited Member</li>
                            <li>Authorised by</li>
                            <li>Approved Agent</li>
                        </ul>
                        <h2 className="text-lg font-semibold mt-6">Follow Us</h2>
                        <div className="flex space-x-4 mt-2">
                            <a href="#" className="text-blue-400 hover:text-blue-500 text-xl">
                                f
                            </a>
                            {/* Add more social icons if needed */}
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                    <p className="text-sm">
                        © {new Date().getFullYear()} Naria Travels. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;