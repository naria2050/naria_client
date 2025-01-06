import Image from "next/image";

const HeroSection = () => {
    return (
        <div className="relative bg-cover bg-center h-[50vh]">
            <Image
                src="https://i.ibb.co.com/LgNHthn/airplane-74190-464.jpg"
                alt="Hero Background"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="relative  flex flex-col items-center justify-center h-full text-white">
                <h1 className="text-5xl font-bold mb-2">Welcome to Naria Holidays!</h1>
                <p className="text-lg">Find Flights, Hotels, Visa & Holidays</p>
            </div>
        </div>
    );
};

export default HeroSection;
