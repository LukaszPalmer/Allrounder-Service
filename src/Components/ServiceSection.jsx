import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import first from "../Media/Content6.jpeg";
import second from "../Media/Content5.jpeg";
import third from "../Media/Content4.jpeg";
import fourth from "../Media/Content3.jpeg";
import fifth from "../Media/Content2.jpeg";
import sixth from "../Media/Content1.jpeg";

const images = [first, second, third, fourth, fifth, sixth];

const CustomSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative w-full max-w-screen-xl mx-auto bg-gray-200 rounded-lg overflow-hidden">
            {/* Display Current Image */}
            <div className="relative">
                <img
                    src={images[currentIndex]}
                    alt={`Bild ${currentIndex + 1}`}
                    className="w-full h-[700px] object-cover" // Höhe hier geändert
                />
            </div>

            {/* Left Arrow */}
            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-800 transition"
            >
                <FaArrowLeft size={20} />
            </button>

            {/* Right Arrow */}
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-800 transition"
            >
                <FaArrowRight size={20} />
            </button>
        </div>
    );
};

export default CustomSlider;
