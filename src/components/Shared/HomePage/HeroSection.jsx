import Image from "next/image";

const HeroSection = () => {
    return (
        <div className="relative bg-cover bg-center h-[380px]">
            <video
                src="https://videos.pexels.com/video-files/5608053/5608053-uhd_2560_1440_30fps.mp4"
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover filter "
            />
            {/* <img
                src="https://i.ibb.co.com/RDD0mC0/DALL-E-2025-01-09-18-00-51-A-clean-and-minimalistic-vector-illustration-of-just-a-modern-airplane-se.webp"
                // autoPlay
                // loop
                // muted
                className="absolute inset-0 w-full h-full object-cover filter "
            /> */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative  flex flex-col items-center justify-center h-full text-white">
                <h1 className="text-5xl font-bold mb-2">Welcome to Naria Holidays!</h1>
                <p className="text-lg">Find Flights, Hotels, Visa & Holidays</p>
            </div>
        </div>
    );
};

export default HeroSection;
