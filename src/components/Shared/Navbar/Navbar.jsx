"use client";
import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
    Button,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from "@nextui-org/react";
import NextLink from "next/link";
import { FaPlane, FaHotel, FaUmbrellaBeach, FaPassport, FaEllipsisH, FaHeartbeat } from "react-icons/fa"; // Import main icons

export const NariaHolidaysLogo = () => {
    return (
        <img
            src="https://i.ibb.co.com/84RqZNX/logo.png"
            alt="Naria Holidays Logo"
            className="h-14 sm:h-10 md:h-15 lg:h-20"
        />
    );
};

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const dropdownIcons = {
        chevron: <span className="p-0"></span>, // Replace with a proper chevron if needed
    };

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className="mx-auto  "
        >
            {/* Mobile menu toggle */}
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            {/* Centered Logo */}
            <NavbarContent justify="start" className="gap-4">
                <NavbarBrand>
                    <NariaHolidaysLogo />
                </NavbarBrand>
            </NavbarContent>

            {/* Main Navigation */}
            <NavbarContent justify="center" className="hidden sm:flex gap-5 mx-auto pl-8">
                {/* Flight */}
                <NavbarItem>
                    <NextLink href="/flight" className="hover:text-primary flex items-center">
                        <FaPlane className="mr-2" /> Flight
                    </NextLink>
                </NavbarItem>

                {/* Hotel */}
                <NavbarItem>
                    <NextLink href="/hotel" className="hover:text-primary flex items-center">
                        <FaHotel className="mr-2" /> Hotel
                    </NextLink>
                </NavbarItem>

                {/* Holiday */}
                <NavbarItem>
                    <NextLink href="/holiday" className="hover:text-primary flex items-center">
                        <FaUmbrellaBeach className="mr-2" /> Holiday
                    </NextLink>
                </NavbarItem>

                {/* Dropdown for Visa */}
                <Dropdown >
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="hover:text-primary flex items-center p-0"
                                // endContent={dropdownIcons.chevron}
                                // radius="sm"
                                variant="light"
                            >
                                Visa ▼
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu aria-label="Visa Options" className="w-[250px]">
                        <DropdownItem key="visa-application" startContent="📄">
                            Visa Application
                        </DropdownItem>
                        <DropdownItem key="visa-guide" startContent="📘">
                            Visa Guide
                        </DropdownItem>
                        <DropdownItem key="transit-visa" startContent="🚏">
                            Transit Visa
                        </DropdownItem>
                        <DropdownItem key="tourist-visa" startContent="🌏">
                            Tourist Visa
                        </DropdownItem>
                        <DropdownItem key="work-visa" startContent="💼">
                            Work Visa
                        </DropdownItem>
                        <DropdownItem key="student-visa" startContent="🎓">
                            Student Visa
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>

                {/* Dropdown for Others */}
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent flex items-center"
                                endContent={dropdownIcons.chevron}
                                radius="sm"
                                variant="light"
                            >
                                Others ▼
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu aria-label="Other Services" className="w-[250px]">
                        <DropdownItem key="about" startContent="ℹ️">
                            About
                        </DropdownItem>
                        <DropdownItem key="skytrip" startContent="✈️">
                            SkyTrip
                        </DropdownItem>
                        <DropdownItem key="why-naria-holidays" startContent="🤔">
                            Why Naria Holidays?
                        </DropdownItem>
                        <DropdownItem key="travel-guide" startContent="📍">
                            Travel Guide
                        </DropdownItem>
                        <DropdownItem key="news" startContent="📰">
                            News
                        </DropdownItem>
                        <DropdownItem key="car-rental" startContent="🚗">
                            Car Rental
                        </DropdownItem>
                        <DropdownItem key="travel-insurance" startContent="🛡️">
                            Travel Insurance
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>

                {/* Dropdown for Medical */}
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent flex items-center"
                                endContent={dropdownIcons.chevron}
                                radius="sm"
                                variant="light"
                            >
                                Medical ▼
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu aria-label="Medical Services" className="w-[250px]">
                        <DropdownItem key="medical-services" startContent="🩺">
                            Medical Services
                        </DropdownItem>
                        <DropdownItem key="health-insurance" startContent="🛡️">
                            Health Insurance
                        </DropdownItem>
                        <DropdownItem key="travel-health-advice" startContent="💊">
                            Travel-Related Health Advice
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>

            {/* Login and Signup */}
            <NavbarContent justify="end" className="gap-4">
                <NavbarItem className="hidden lg:flex">
                    <NextLink href="/login" className="hover:text-primary">
                        Login
                    </NextLink>
                </NavbarItem>
                <NavbarItem>
                    <Button as={NextLink} href="/signup" color="warning" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>

            {/* Dropdown Menu for Small Screens */}
            <NavbarMenu>
                {[
                    { name: "Flight", href: "/flight" },
                    { name: "Hotel", href: "/hotel" },
                    { name: "Holiday", href: "/holiday" },
                    { name: "Visa", href: "/visa" },
                    { name: "Others", href: "/others" },
                    { name: "Medical", href: "/medical" },
                ].map((item, index) => (
                    <NavbarMenuItem key={index}>
                        <NextLink href={item.href} className="w-full hover:text-primary">
                            {item.name}
                        </NextLink>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
