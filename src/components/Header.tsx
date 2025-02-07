import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from 'react-router-dom';
import { GrInstagram } from 'react-icons/gr';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    return (
        <nav className="bg-black/20 backdrop-blur-lg fixed w-full z-50 border-b-2 border-gray-700/75 transition-all duration-300 ease-in-out">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center justify-center gap-2">
                        <img
                            className="rounded-full bg-white p-1 transition-transform duration-300"
                            width="35"
                            height="35"
                            alt="Logo"
                            src="/assets/logo@720x.png"
                        />
                        <div className="flex-shrink-0 text-white font-bold text-xl transition-transform duration-300">
                            CHRYSALIS
                        </div>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex space-x-8 items-center"> {/* Added items-center */}
                        <a
                            key="home"
                            href="/"
                            className={`text-white transition-colors duration-300 ${location.pathname === '/' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
                        >
                            Home
                        </a>
                        {["Gallery", "Members", "Winners"].map((item) => (
                            <a
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className={`text-white transition-colors duration-300 ${location.pathname === `/${item.toLowerCase()}` ? 'border-b-2 border-blue-500 font-bold' : ''}`}
                            >
                                {item}
                            </a>
                        ))}

                        {/* Instagram Logo with Hover Effect */}
                        <a
                            href="https://www.instagram.com/chrysalis_2k25?igsh=bjlwcWh4Y3l5aGR2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-pink-500 transition-all duration-300 hover:scale-110 transform"
                        >
                            <GrInstagram size={30} />
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white focus:outline-none"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-lg border-b-2 border-gray-700/75">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a
                            key="home"
                            href="/"
                            className={`block px-3 py-2 text-white transition-colors duration-300 ${location.pathname === '/' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </a>
                        {["Gallery", "Members", "Winners"].map((item) => (
                            <a
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className={`block px-3 py-2 text-white transition-colors duration-300 ${location.pathname === `/${item.toLowerCase()}` ? 'border-b-2 border-blue-500 font-bold' : ''}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}

                        {/* Instagram Logo */}
                        <a
                            href="https://www.instagram.com/chrysalis_2k25?igsh=bjlwcWh4Y3l5aGR2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-3 py-2 text-white hover:text-pink-500 transition-all duration-300 hover:scale-110 transform" // Added block, px-3, py-2
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <GrInstagram size={30} />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;  