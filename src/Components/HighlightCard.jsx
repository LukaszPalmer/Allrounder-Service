/* eslint-disable react/prop-types */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HighlightCard = () => {
    return (
        <div className="bg-[#f0f8ff] p-8 rounded-md w-full max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start">
                {/* Linker Bereich (Text) */}
                <div className="flex-1 md:pr-8">
                    {/* Label "Fach Kompetenz" mit kleinem Pfeil */}
                    <div className="relative inline-block mb-4">
                        <div className="bg-[#f2b915] text-black text-sm font-semibold py-1 px-3 rounded-full inline-block">
                            Fach Kompetenz
                        </div>
                        <div
                            className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0"
                            style={{
                                borderLeft: "6px solid transparent",
                                borderRight: "6px solid transparent",
                                borderTop: "6px solid #f2b915",
                            }}
                        />
                    </div>

                    {/* Titel & Untertitel */}
                    <h2 className="text-3xl font-bold text-[#141c3c] mb-2">
                        Unsere Leistungen Für Sie
                    </h2>
                    <h3 className="text-xl font-medium text-gray-800 mb-4">
                        Fachgerechte Renovierungen in NRW und Umgebung
                    </h3>

                    {/* Beschreibung */}
                    <p className="text-gray-700 mb-8 leading-relaxed">
                        Wir arbeiten kontinuierlich daran, unsere Qualität und unseren Service 
                        zu optimieren. Durch regelmäßiges Kundenfeedback stellen wir sicher, 
                        dass wir unterschiedlichste Projekte erfolgreich umsetzen – 
                        und so stets zufriedene Kunden gewinnen.
                    </p>
                </div>

                {/* Rechter Bereich (Card) */}
                <div className="flex-1 md:pl-8">
                    <div className="bg-white rounded-md p-6 shadow-md">
                        <h4 className="text-xl font-bold text-[#141c3c] mb-2">
                            Business Strategie
                        </h4>
                        <p className="text-gray-600 mb-6">
                            Wir entwickeln maßgeschneiderte Lösungen für Ihr Projekt, 
                            abgestimmt auf Ihre individuellen Ziele und Anforderungen. 
                            Mit Fachwissen, Engagement und lokaler Kompetenz bringen wir 
                            Ihr Vorhaben auf den richtigen Kurs.
                        </p>
                        <a
                            href="#"
                            className="text-[#141c3c] font-medium flex items-center gap-2 hover:text-[#f2b915] transition-colors"
                        >
                            <span>Kontakt</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HighlightCard;
