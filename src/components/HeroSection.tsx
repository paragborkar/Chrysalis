import React from "react";
import { WarpBackground } from "./ui/warp-background";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const HeroSection: React.FC = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleExploreEvents = () => {
        navigate("/events"); // Redirect to /events
    };

    return (
        <div className="relative min-h-screen">
            <WarpBackground
                className="relative min-h-screen flex items-center justify-center text-white border-none bg-black"
                gridColor="rgba(86, 86, 86, 0.8)"
                perspective={200}
            >
                <div className="relative z-10 text-center">
                    <h1
                        className="text-3xl md:text-7xl font-bold mb-4"
                        style={{ fontFamily: '"Sixtyfour Convergence", serif' }}
                    >
                        CHRYSALIS
                    </h1>
                    <div className="flex flex-col md:flex-row gap-4 justify-center mt-10 -mb-10">
                        <button
                            className="bg-transparent px-0 border bg-purple-600 hover:border-2 text-white py-3 rounded-full transition-colors md:px-8"
                            onClick={handleExploreEvents} // Add onClick handler
                        >
                            Explore Events
                        </button>
                    </div>
                </div>
            </WarpBackground>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-black via-gray-950 dark:from-background"></div>
        </div>
    );
};

export default HeroSection;
