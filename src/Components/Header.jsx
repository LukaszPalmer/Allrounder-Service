import { useState } from 'react';
import { FaBars, FaTimes, FaFacebook, FaTwitter, FaLinkedin, FaDribbble, FaSearch } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Für das Top-Down Menü (Mobile)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Für die Off-Canvas Sidebar (Tablet & Desktop)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <header className="bg-white relative z-50 shadow-lg">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    {/* Allrounder Service in zwei Zeilen */}
                    <div className="text-2xl font-bold text-[#141c3c] leading-tight">
                        Allrounder<br/>Service
                    </div>

                    {/* Navigation (sichtbar ab md) */}
                    <nav className="hidden md:flex space-x-6 text-[#141c3c] font-medium">
                        <a href="#home" className="hover:text-[#f2b915] transition-colors">Home</a>
                        <a href="#services" className="hover:text-[#f2b915] transition-colors">Leistungen</a>
                        <a href="#references" className="hover:text-[#f2b915] transition-colors">Referenzen</a>
                        <a href="#contact" className="hover:text-[#f2b915] transition-colors">Kontakt</a>
                    </nav>

                    {/* Mobile: Nur Hamburger-Icon, kein Polygon und keine Lupe */}
                    <FaBars 
                        className="text-2xl text-[#141c3c] cursor-pointer md:hidden" 
                        onClick={toggleMenu}
                    />

                    {/* Tablet & Desktop: Polygon mit Lupe und Hamburger-Icon */}
                    <div 
                        className="hidden md:flex items-center"
                        style={{
                            backgroundColor: '#f2b915',
                            clipPath: 'polygon(0% -100%, 100% 0%, 100% 100%, -30% 100%)'
                        }}
                    >
                        <div className="flex items-center space-x-4 px-4 py-2">
                            <div 
                                className="w-8 h-8 flex items-center justify-center bg-white rounded-full cursor-pointer hover:opacity-90 transition"
                            >
                                <FaSearch className="text-[#141c3c]" />
                            </div>
                            <div 
                                className="w-8 h-8 flex items-center justify-center bg-white rounded-full cursor-pointer hover:opacity-90 transition"
                                onClick={toggleSidebar}
                            >
                                <FaBars className="text-[#141c3c]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Top-Down Menü für Mobile */}
            <div
                className={`md:hidden bg-white transition-transform duration-500 ease-in-out transform origin-top ${
                    isMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 hidden"
                }`}
            >
                <nav className="text-[#141c3c] text-lg flex flex-col items-start p-4 space-y-2 shadow-lg">
                    <a href="#home" className="w-full py-2 border-b hover:text-[#f2b915]">Home</a>
                    <a href="#services" className="w-full py-2 border-b hover:text-[#f2b915]">Leistungen</a>
                    <a href="#references" className="w-full py-2 border-b hover:text-[#f2b915]">Referenzen</a>
                    <a href="#contact" className="w-full py-2 hover:text-[#f2b915]">Kontakt</a>
                </nav>
            </div>

            {/* Sidebar: Off-Canvas Menü (ab Tablet/ Desktop) */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
                    isSidebarOpen ? "translate-x-0" : "translate-x-full"
                }`}
                style={{ zIndex: 9999 }}
            >
                {/* Close Button und Info */}
                <div className="p-4 border-b relative">
                    <FaTimes
                        className="absolute top-4 right-4 text-3xl text-[#141c3c] cursor-pointer hover:text-[#f2b915] transition"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                    <span className="text-xl font-bold text-[#141c3c] block">Allrounder Service</span>
                    <p className="text-sm text-gray-700 mt-2">
                        The main component of a healthy environment for self esteem 
                        is that it needs be nurturing. It should provide unconditional warmth.
                    </p>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-4 p-4 border-b">
                    <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition">
                        <FaFacebook className="text-[#141c3c]" />
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition">
                        <FaTwitter className="text-[#141c3c]" />
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition">
                        <FaLinkedin className="text-[#141c3c]" />
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition">
                        <FaDribbble className="text-[#141c3c]" />
                    </div>
                </div>

                {/* Linkliste */}
                <div className="p-4">
                    <h3 className="text-lg font-bold text-[#141c3c] mb-4">Important Links</h3>
                    <ul className="space-y-4 text-gray-800">
                        <li className="border-b pb-2">
                            <a href="#about" className="hover:text-[#f2b915] transition">About Us</a>
                        </li>
                        <li className="border-b pb-2">
                            <a href="#services" className="hover:text-[#f2b915] transition">Our Services</a>
                        </li>
                        <li className="border-b pb-2">
                            <a href="#portfolio" className="hover:text-[#f2b915] transition">Portfolio</a>
                        </li>
                        <li className="border-b pb-2">
                            <a href="#pricing" className="hover:text-[#f2b915] transition">Pricing Plan</a>
                        </li>
                        <li className="border-b pb-2">
                            <a href="#blog" className="hover:text-[#f2b915] transition">Blog &amp; News</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-[#f2b915] transition">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
