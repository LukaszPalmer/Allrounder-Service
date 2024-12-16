import { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Funktion zum Scrollen nach oben
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Scroll-Event-Listener
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        isVisible && (
            <div 
                className="fixed bottom-4 right-4 bg-white text-black p-4 rounded-full shadow-2xl cursor-pointer hover:bg-gray-100 transition"
                onClick={handleScrollToTop}
                aria-label="Scroll to top"
            >
                <FaChevronUp size={24} className="text-green-700" /> {/* Farbe des Icons auf Grün geändert */}
            </div>
        )
    );
};

export default ScrollToTop;
