import {
    FaEnvelope,
    FaClock,
    FaPhone,
    FaFacebook,
    FaWhatsapp,
    FaInstagram,
} from "react-icons/fa";

const ContactInfo = () => {
    return (
        <div className="bg-[#141c3c] text-white py-3">
            <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center space-y-2 sm:space-y-0 sm:items-center lg:flex-row lg:justify-between lg:items-center">
                
                {/* Linker Teil: Für Mobile & Tablet werden Informationen teilweise gestackt, 
                   ab LG alles in einer Reihe */}
                <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6 lg:space-x-6 lg:flex-row">
                    {/* E-Mail */}
                    <div className="flex items-center text-sm">
                        <FaEnvelope className="text-[#f2b915] mr-2" />
                        <span>allrounder.service.com</span>
                    </div>
                    {/* Öffnungszeiten */}
                    <div className="flex items-center text-sm sm:mt-0">
                        <FaClock className="text-[#f2b915] mr-2" />
                        <span>Mo-Fr: 8:00-17:00 Uhr, Sa: 8:00-13:00 Uhr</span>
                    </div>
                    {/* Telefonnummer */}
                    <div className="flex items-center text-sm sm:mt-0">
                        <FaPhone className="text-[#f2b915] mr-2" />
                        <span>Mobil: +49 (0)177 3968965</span>
                    </div>
                </div>

                {/* Social Icons und Button Bereich */}
                <div className="flex flex-col items-center space-y-2 sm:space-y-0 sm:flex-row sm:justify-center sm:items-center sm:space-x-4 lg:space-x-4 lg:flex-row lg:items-center">
                    {/* Social Media Icons 
                        - Auf Mobile und Tablet erscheinen sie unter den anderen Infos 
                        - Auf Desktop in einer Linie mit den anderen Infos */}
                    <div className="flex items-center space-x-4 text-white">
                        <a href="#" className="hover:text-[#f2b915] transition-colors">
                            <FaFacebook size={20} />
                        </a>
                        <a href="#" className="hover:text-[#f2b915] transition-colors">
                            <FaWhatsapp size={20} />
                        </a>
                        <a href="#" className="hover:text-[#f2b915] transition-colors">
                            <FaInstagram size={20} />
                        </a>
                    </div>

                    {/* "Jetzt bewerten" Button 
                        - Nur auf großen Bildschirmen sichtbar (ab lg:) */}
                    <a 
                        href="#"
                        className="hidden lg:inline-block bg-white text-[#f2b915] py-1 px-3 hover:bg-gray-100 transition-colors text-sm"
                    >
                        Jetzt bewerten
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
