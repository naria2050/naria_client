import React from "react";
import Wave from 'react-wavify'
import { MdOutlineForwardToInbox } from 'react-icons/md';
import { FaPhoneAlt } from "react-icons/fa";

import {
    FaFacebookSquare,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaWhatsapp,
    FaMapMarkedAlt,
} from 'react-icons/fa';

const Footer = () => {
    const paymentOptions = [
        { src: "https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/we-accept/amexCard.svg", alt: "amexCard" },
        { src: "https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/we-accept/visaCard.svg", alt: "visaCard" },
        { src: "https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/we-accept/masterCard.svg", alt: "masterCard" },
        { src: "https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/we-accept/bkash.svg", alt: "bkash" },
        { src: "https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/we-accept/dbbl.svg", alt: "dbbl" },
        { src: "https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/we-accept/nagad.svg", alt: "nagad" },
        { src: "https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/we-accept/upay.svg", alt: "upay" },
        { src: "https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/we-accept/tap.svg", alt: "tap" },
        { src: "https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/we-accept/ok.svg", alt: "okWallet" },
        { src: "https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/we-accept/dinners-club.svg", alt: "dinners-club" },
    ];
    return (
        <footer className="relative w-full mt-10 bg-[#AEDFFE]">
            {/* Wave Background */}
            <Wave className="absolute inset-0" fill="#8ED1FC"
                paused={false}
                options={{
                    height: 150,
                    amplitude: 40,
                    speed: .50,
                    points: 6
                }}
            />

            {/* Footer Content */}
            <div className="relative z-10 inset-0  text-black pt-8">
                <footer className="text-black">
                    <div className="mx-auto container px-4 py-8">
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
                                <div className='flex gap-2 items-center'>
                                    <FaPhoneAlt className='text-sm' />
                                    <p className="text-sm">+8802222225357</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <MdOutlineForwardToInbox className='text-sm' />
                                    <p className="text-sm">info@nariatravels.com</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FaMapMarkedAlt className='text-sm' />
                                    <a href="https://www.google.com.bd/maps" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                                        Get direction on Google Map
                                    </a>
                                </div>

                                <h2 className="text-lg font-semibold mt-6">Follow Us</h2>
                                <div className="flex space-x-4 mt-2">
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-xl">
                                        <FaFacebookSquare />
                                    </a>
                                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 text-xl">
                                        <FaTwitter />
                                    </a>
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600 text-xl">
                                        <FaInstagram />
                                    </a>
                                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 text-xl">
                                        <FaYoutube />
                                    </a>
                                    <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600 text-xl">
                                        <FaWhatsapp />
                                    </a>
                                </div>
                            </div>

                            {/* Quick Menu */}
                            <div>
                                <h2 className="text-lg font-semibold mb-4">QUICK MENU</h2>
                                <ul className="text-sm space-y-2">
                                    <li>
                                        <a
                                            href="#"
                                            className="relative hover:text-blue-700 transition-all duration-300 before:content-['>'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 hover:pl-4"
                                        >
                                            COMPANY OVERVIEW
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="relative hover:text-blue-700 transition-all duration-300 before:content-['>'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 hover:pl-4"
                                        >
                                            MESSAGE FROM CEO
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="relative hover:text-blue-700 transition-all duration-300 before:content-['>'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 hover:pl-4"
                                        >
                                            TOUR PACKAGE
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="relative hover:text-blue-700 transition-all duration-300 before:content-['>'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 hover:pl-4"
                                        >
                                            HAJ & UMRAH PACKAGE
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="relative hover:text-blue-700 transition-all duration-300 before:content-['>'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 hover:pl-4"
                                        >
                                            VISA SERVICES
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="relative hover:text-blue-700 transition-all duration-300 before:content-['>'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 hover:pl-4"
                                        >
                                            HOTEL BOOKING
                                        </a>
                                    </li>
                                </ul>
                            </div>


                            {/* Our Partner */}
                            <div>
                                <h2 className="text-lg font-semibold mb-4">OUR PARTNER</h2>
                                <p>Coming Soon</p>
                            </div>

                            {/* We Accept */}
                            <div>
                                <h2 className="text-lg font-semibold mb-4">WE ACCEPT</h2>
                                <ul className="grid grid-cols-4 md:gap-4 gap-2">
                                    {paymentOptions.map((option, index) => (
                                        <li key={index} className="flex items-center justify-center">
                                            <img src={option.src} alt={option.alt} className="w-12 h-auto" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Bottom Section */}
                        <div className="mt-4 border-t border-gray-700 pt-4 text-center">
                            <p className="text-sm">© {new Date().getFullYear()} Naria Travels. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </footer>

    );
};

export default Footer;
