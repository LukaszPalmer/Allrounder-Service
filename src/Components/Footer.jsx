import {
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaPinterest,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer
            className="bg-[#141c3c] text-white p-8 relative"
            style={{
                backgroundImage: "url('/path/to/worldmap.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Linke Spalte: Logo, About Text, Social Icons, Button */}
                <div>
                    <p className="text-sm text-gray-200 mb-6 leading-relaxed">
                        Unser Unternehmen bietet Ihnen ein breites Spektrum an
                        hochwertigen Sanierungs- und
                        Renovierungsdienstleistungen in ganz NRW und Umgebung.
                        Wir setzen Ihre Projekte mit Erfahrung, Fachwissen und
                        Liebe zum Detail um, damit Sie ein Ergebnis erhalten,
                        das langfristig überzeugt.
                    </p>

                    <div className="flex space-x-4 mb-6">
                        <a href="#" className="text-white hover:text-gray-300">
                            <FaFacebook size={20} />
                        </a>
                        <a href="#" className="text-white hover:text-gray-300">
                            <FaTwitter size={20} />
                        </a>
                        <a href="#" className="text-white hover:text-gray-300">
                            <FaLinkedin size={20} />
                        </a>
                        <a href="#" className="text-white hover:text-gray-300">
                            <FaPinterest size={20} />
                        </a>
                    </div>

                    <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition font-medium">
                        About Us
                    </button>
                </div>

                {/* Mittlere Spalte: Linkliste */}
                <div>
                    <h3 className="text-xl font-bold mb-4">
                        Allrounder-Service
                    </h3>
                    <div className="w-16 h-1 bg-[#f2b915] mb-6"></div>
                    <ul className="space-y-3 text-gray-200 text-sm">
                        <li>
                            <a href="#" className="hover:text-gray-100">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-100">
                                Unsere Leistungen
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-100">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-100">
                                Preise
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-100">
                                Kontaktieren Sie Uns
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Rechte Spalte: Kontaktinformationen */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Kontakt</h3>
                    <div className="w-16 h-1 bg-[#f2b915] mb-6"></div>
                    <p className="text-sm text-gray-200 mb-6">
                        Kontaktieren Sie uns!
                    </p>
                    <div className="text-sm text-gray-200 space-y-4">
                        <div className="flex items-center">
                            <FaPhone className="text-[#f2b915] mr-3" />
                            <span>Mobil: +49 (0)177 3968965</span>
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="text-[#f2b915] mr-3" />
                            <span>allrounder.service.de</span>
                        </div>
                        <div className="flex items-center">
                            <FaMapMarkerAlt className="text-[#f2b915] mr-3" />
                            <span>???</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto mt-8 text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Allrounder-Service. Alle
                Rechte vorbehalten.
            </div>
        </footer>
    );
};

export default Footer;
