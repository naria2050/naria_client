"use client";

import React from "react";

const packages = [
    {
        title: "REGULAR PACKAGE",
        description: "ভুটান টুর প্যাকেজ",
        price: "৳ 50,000",
        duration: "4 দিন / 5 রাত",
        image: "https://www.nariatravels.com/uploads/0000/1/2024/08/29/bhutan.jpg",
    },
    {
        title: "GROUP PACKAGE",
        description: "Enjoy Your Trips With Group",
        price: "",
        duration: "",
        image: "https://www.nariatravels.com/uploads/0000/1/2023/03/07/group-package.jpg",
    },
    {
        title: "EID PACKAGE",
        description: "ঈদ প্যাকেজ",
        price: "৳ 50,000",
        duration: "5 দিন / 4 রাত",
        image: "https://www.nariatravels.com/uploads/0000/1/2023/10/04/eid.jpg",
    },
    {
        title: "UMRAH PACKAGE",
        description: "ওমরাহ এর বুকিং চলছে",
        price: "৳ 1,30,000",
        duration: "৭ দিন / ৬ রাত",
        image: "https://www.nariatravels.com/uploads/0000/1/2023/10/04/eid.jpg",
    },
];

const PackageCard = ({ packageData }) => {
    const { title, description, price, duration, image } = packageData;

    return (
        <div className="relative group w-64 h-96 overflow-hidden rounded-lg shadow-lg">
            {/* Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition duration-300"></div>
            {/* Info on Hover */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-20">
                <h3 className="text-xl font-bold text-white">{description}</h3>
                <p className="text-lg text-white mt-1">{price}</p>
                <p className="text-sm text-white">{duration}</p>
                <div className="mt-6 text-center">
                    <button className=" btn text-base  font-semibold text-white bg-blue-600 py-2 px-4 rounded">{title}</button>
                </div>
            </div>
        </div>
    );
};

const UpcomingPackages = () => {
    return (
        <section className="py-16 bg-gray-50">
            {/* Section Header */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-naria-holiday-blue">Upcoming Package</h2>
                <div className="flex justify-center mt-2">
                    <span className="w-6 h-1 bg-red-600"></span>
                    <span className="w-6 h-1 bg-red-400 mx-1"></span>
                    <span className="w-6 h-1 bg-red-200"></span>
                    
                </div>
            </div>
            {/* Cards */}
            <div className="flex flex-wrap justify-center gap-8">
                {packages.map((packageData, index) => (
                    <PackageCard key={index} packageData={packageData} />
                ))}
            </div>
        </section>
    );
};

export default UpcomingPackages;

