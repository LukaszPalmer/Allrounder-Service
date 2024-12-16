import PropTypes from 'prop-types';
import { FaLightbulb } from 'react-icons/fa';

const Card = ({ title, description }) => {
    return (
        <div className="bg-white shadow-lg p-8 text-center max-w-sm mx-auto flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
            {/* Kreis mit Icon */}
            <div className="rounded-full border border-gray-200 w-20 h-20 flex items-center justify-center mb-6">
                <FaLightbulb className="text-3xl text-[#f2b915]" />
            </div>

            {/* Titel */}
            <h3 className="text-xl font-semibold text-[#141c3c] mb-4">{title}</h3>

            {/* Beschreibung */}
            <p className="text-gray-600 text-sm leading-relaxed mb-8">{description}</p>

            {/* "Mehr Erfahren" Button */}
            <button className="flex items-center gap-2 font-medium text-sm text-[#141c3c] hover:text-[#f2b915] transition-colors">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#141c3c] text-white">
                    <FaLightbulb />
                </span>
                Mehr Erfahren
            </button>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Card;
