import Image from "next/image";

const HeroSection = () => {
    return (
        <div className="relative bg-cover bg-center h-[50vh]">
            <video
                src="https://videos.pexels.com/video-files/5608053/5608053-uhd_2560_1440_30fps.mp4"
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover filter "
            />
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>
            <div className="relative  flex flex-col items-center justify-center h-full text-white">
                <h1 className="text-5xl font-bold mb-2">Welcome to Naria Holidays!</h1>
                <p className="text-lg">Find Flights, Hotels, Visa & Holidays</p>
            </div>
        </div>
    );
};

export default HeroSection;
