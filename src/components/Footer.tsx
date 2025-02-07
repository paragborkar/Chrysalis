import React from "react";
import { useLocation } from "react-router-dom";
const Footer: React.FC = () => {
    const { pathname } = useLocation();
    return (
        <footer
            className={`text-white py-12 backdrop-blur-sm ${
                pathname === "/gallery" && "bg-black"
            }`}
        >
            <div className="border-t border-white/20 mt-8 pt-8 text-center">
                <p>© 2025 Chrysalis. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
