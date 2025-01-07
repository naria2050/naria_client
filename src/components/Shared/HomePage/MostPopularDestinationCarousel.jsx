"use client";

import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import Image from "next/image";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

const destinations = [
    {
        img: "https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2FKolkata.jpg&w=1920&q=75",
        title: "Kathmandu",
        desc: "1,152 Hotels Available",
    },
    {
        img: "https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2FKuala_Lumpur.jpg&w=1920&q=75",
        title: "Bangkok",
        desc: "4,351 Hotels Available",
    },
    {
        img: "https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2FChennai.jpg&w=1920&q=75",
        title: "Singapore",
        desc: "813 Hotels Available",
    },
    {
        img: "https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2FKolkata.jpg&w=1920&q=75",
        title: "Kuala Lumpur",
        desc: "2,464 Hotels Available",
    },
    {
        img: "https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2FChennai.jpg&w=1920&q=75",
        title: "Tokyo",
        desc: "5,123 Hotels Available",
    },
];

const MostPopularDestinationCarousel = () => {
    useEffect(() => {
        new Glide(".glide", {
            type: "carousel",
            perView: 3,
            focusAt: "center",
            gap: 30,
            animationDuration: 1000,
            breakpoints: {
                1024: { perView: 2 },
                768: { perView: 1 },
            },
        }).mount();
    }, []);

    return (
        <section className="py-12 max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold">Most Popular Destinations</h2>
                <p className="text-gray-600 mt-2">
                    Expand your travel horizons with new facets! Explore the world by
                    choosing your ideal travel destinations.
                </p>
            </div>
            <div className="glide">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        {destinations.map((destination, index) => (
                            <li
                                key={index}
                                className="glide__slide"
                                style={{
                                    perspective: "1000px",
                                    transformStyle: "preserve-3d",
                                    transform: "translateZ(0)",
                                }}
                            >
                                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition-transform">
                                    <Image
                                        src={destination.img}
                                        alt={destination.title}
                                        width={400}
                                        height={500}
                                        className="w-full h-72 object-cover"
                                    />
                                    <div className="p-4 bg-white">
                                        <h3 className="text-lg font-bold">{destination.title}</h3>
                                        <p className="text-sm text-gray-600">{destination.desc}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="glide__arrows" data-glide-el="controls">
                    <button
                        className="glide__arrow glide__arrow--left bg-gray-200 p-3 rounded-full shadow-md hover:bg-gray-300"
                        data-glide-dir="<"
                    >
                        &#10094;
                    </button>
                    <button
                        className="glide__arrow glide__arrow--right bg-gray-200 p-3 rounded-full shadow-md hover:bg-gray-300"
                        data-glide-dir=">"
                    >
                        &#10095;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MostPopularDestinationCarousel;
