"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
    HiMenu,
    HiX,
    HiPhone,
    HiClock
} from "react-icons/hi";
import { GiKnifeFork } from "react-icons/gi";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn
} from "react-icons/fa";

// nav links
const navLinks = [
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Specials", href: "#specials" },
    { label: "Events", href: "#events" },
    { label: "Chefs", href: "#chefs" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
];

// social media links, icons
const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
];

export default function Navbar() {

    //mobile menu open state and scroll state for shadow effect
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // drop shadow when user scrolls
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (

        //main header
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-dark shadow-lg" : "bg-dark/80 backdrop-blur-sm"}`}
        >
            {/* top navbar */}
            <div className="hidden md:flex justify-center items-center gap-8 px-8 py-2
                text-gray-400 text-sm border-b border-white/10">
                <div className="flex gap-6">
                    <span className="flex items-center gap-2">
                        <HiPhone className="text-primary" />
                        +94 769 603 388
                    </span>
                    <span className="flex items-center gap-2">
                        <HiClock className="text-primary" />
                        Mon-Sat: 11AM – 11PM
                    </span>
                </div>
                <div className="flex gap-3">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            aria-label={label}
                            className="w-7 h-7 rounded-full border border-white/20
                flex items-center justify-center text-gray-400
                hover:text-white hover:border-primary hover:bg-primary
                transition-all duration-300">
                            <Icon size={12} />
                        </a>
                    ))}
                </div>
            </div>

            {/* main navbar */}
            <nav className="flex items-center justify-between px-6 md:px-8 py-4">
                {/* logo */}
                <Link href="/" className="flex items-center gap-2 text-white">
                    <GiKnifeFork className="text-primary" size={28} />
                    <span className="font-display text-xl font-bold">Relish</span>
                </Link>

                {/* menu links - hidden on mobile */}
                <ul className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-gray-300 hover:text-primary transition-colors
                           text-sm font-medium"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* reservation button - hidden on mobile */}
                <a href="#reservation" className="hidden md:block btn-primary text-sm py-2">
                    Book a Table
                </a>

                {/* mobile menu button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                </button>
            </nav>

            {/* mobile menu - only visible when open */}
            {mobileOpen && (
                <div className="md:hidden bg-dark px-6 pb-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-gray-300 hover:text-primary py-2 border-b
                         border-white/10 transition-colors"
                            onClick={() => setMobileOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}

                    {/* reservation button in mobile menu */}
                    <a href="#reservation" className="btn-primary text-center mt-2">
                        Book a Table
                    </a>
                </div>
            )
            }
        </header >
    );
}