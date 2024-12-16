const HeroSection = () => {
    return (
        <section 
            className="
                w-full
                bg-white
                md:bg-[url('https://via.placeholder.com/1200x800')] 
                bg-cover 
                bg-center 
                bg-no-repeat
                md:min-h-[60vh]    
                lg:min-h-[80vh]
                flex
                flex-col
                justify-center    /* Vertikal zentrieren */
                items-start       /* Horizontal links ausrichten */
                pl-8              /* Größeres Padding links */
                pr-8              /* Padding rechts hinzugefügt */
                py-16             /* Größeres Padding oben und unten */
            "
        >
            {/* Label oben */}
            <div className="inline-block relative mb-6">
                <div className="bg-[#141c3c] text-white py-2 px-4 font-medium text-sm relative z-10">
                    Bei uns stehst DU im Mittelpunkt
                </div>
                <div 
                    className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0"
                    style={{
                        borderLeft: '6px solid transparent',
                        borderRight: '6px solid transparent',
                        borderTop: '6px solid #141c3c'
                    }}
                />
            </div>

            {/* Haupt-Überschrift */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#141c3c] leading-tight mb-4 text-left max-w-lg">
                Ihr Experte für Renovierungen – innen und außen in NRW und Umgebung
            </h2>

            {/* Gelbe Linie */}
            <div className="w-16 h-1 bg-[#f2b915] mb-6"></div>

            {/* Beschreibungstext */}
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 max-w-md text-left">
                Wir bieten maßgeschneiderte Renovierungslösungen, die perfekt auf Ihre Wünsche und Bedürfnisse abgestimmt sind. Mit unserer Expertise und Liebe zum Detail verwandeln wir Ihr Zuhause in einen Ort, an dem Sie sich rundum wohlfühlen können.
            </p>

            {/* CTA-Button */}
            <button className="bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-700 transition">
                Unserer Blog
            </button>
        </section>
    );
};

export default HeroSection;
