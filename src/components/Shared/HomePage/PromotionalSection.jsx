"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const PromotionalSection = () => {
    const offers = [
        {
            img: "https://dimg04.tripcdn.com/images/1zp3c12000hkr6p437A2C.png",
            title: "Explore Asia",
            desc: "Plan your perfect Asia tour!",
        },
        {
            img: "https://dimg04.tripcdn.com/images/0a11r12000hhltzbx828B.jpg",
            title: "15% Off Flights",
            desc: "Enjoy discounts on your flights!",
        },
        {
            img: "https://dimg04.tripcdn.com/images/0a10112000hdo8gff7C64.png",
            title: "Exclusive Offers",
            desc: "Special deals for your holidays.",
        },
        {
            img: "https://dimg04.tripcdn.com/images/0a11r12000hhltzbx828B.jpg",
            title: "Beach Holidays",
            desc: "Relax by the beach with exclusive offers.",
        },
        {
            img: "https://ak-d.tripcdn.com/images/0a10y12000atsised0E0B.jpg",
            title: "Luxury Escapes",
            desc: "Discover exclusive luxury vacation spots.",
        },
        {
            img: "https://dimg04.tripcdn.com/images/0a11r12000hhltzbx828B.jpg",
            title: "Adventure Trips",
            desc: "Gear up for thrilling adventures.",
        },
    ];

    return (
        <section className="py-12">
            <div className="max-w-5xl mx-auto relative">
                <h2 className="text-start text-3xl font-bold mb-8 mt-16">
                    Exclusive Offers
                </h2>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={{
                        nextEl: ".custom-next-btn",
                        prevEl: ".custom-prev-btn",
                    }}
                    pagination={{
                        clickable: true,
                        el: ".custom-pagination",
                    }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {offers.map((offer, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                                <img
                                    src={offer.img}
                                    alt={offer.title}
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Custom Pagination */}
                <div className="custom-pagination flex justify-center mt-8"></div>

                {/* Custom Navigation Buttons */}
                <button
                    className="custom-prev-btn absolute top-[55%] left-0 -translate-y-1/2 bg-white  text-gray-700 rounded-full shadow-lg w-10 h-10 flex items-center justify-center hover:shadow-md hover:text-white hover:bg-naria-holiday-blue transition z-10"
                    style={{ transform: "translate(-50%, -50%)" }}
                >
                    &#10094;
                </button>
                <button
                    className="custom-next-btn absolute top-[55%] right-0 -translate-y-1/2 bg-white  text-gray-700 rounded-full shadow-lg w-10 h-10 flex items-center justify-center hover:shadow-md hover:text-white hover:bg-naria-holiday-blue transition z-10"
                    style={{ transform: "translate(50%, -50%)" }}
                >
                    &#10095;
                </button>
            </div>
        </section>
    );
};

export default PromotionalSection;
