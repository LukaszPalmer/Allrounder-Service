import { useState } from "react";
import {FaClock, FaCheckCircle } from "react-icons/fa";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        subject: "",
        phone: "",
    });

    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setSuccessMessage("Ihre Nachricht wurde erfolgreich versendet. Wir melden uns bald bei Ihnen!");

        setFormData({
            name: "",
            email: "",
            message: "",
            subject: "",
            phone: "",
        });
    };

    return (
        <section className="w-full bg-[#f0f8ff] py-8">
            <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-8 px-4">
                {/* Kontaktformular */}
                <div className="lg:w-1/2 bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-4">Kontaktieren Sie Uns</h3>
                    <p className="mb-6 text-lg">Haben Sie Fragen oder möchten Sie ein Angebot? Schreiben Sie uns!</p>

                    {successMessage && (
                        <p className="mb-4 text-green-600 font-semibold">{successMessage}</p>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block font-medium mb-1">Ihr Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block font-medium mb-1">Ihre E-Mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block font-medium mb-1">Telefonnummer (optional)</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block font-medium mb-1">Betreff</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block font-medium mb-1">Ihre Nachricht</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded-lg h-32"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-[#2ecc71] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#27ae60] w-full transition-all"
                        >
                            Nachricht senden
                        </button>
                    </form>
                </div>

                {/* Grüne Box (Updated with more space and content) */}
                <div className="lg:w-1/2 bg-[#2ecc71] shadow-md rounded-lg flex flex-col justify-around items-center text-center p-6 relative hover:bg-[#27ae60] transition-all space-y-6">
                    <div className="absolute top-0 right-0 opacity-10 text-[10rem] text-white pointer-events-none">
                        <FaClock /> {/* Uhr für Schnelligkeit */}
                    </div>

                    <div className="z-10">
                        <h3 className="text-3xl font-bold text-white mb-4">
                            Schnell und zuverlässig – Ihre Anfrage ist bei uns in guten Händen!
                        </h3>
                        <p className="text-white text-lg mb-4">
                            Kontaktieren Sie uns direkt und erhalten Sie in kürzester Zeit eine Antwort. Wir setzen
                            auf Effizienz und Zuverlässigkeit, um Ihre Wünsche schnellstmöglich zu erfüllen.
                        </p>

                        <p className="text-white text-lg mb-4">
                            Mit einem erfahrenen Team garantieren wir Ihnen schnelle Lösungen und exzellente
                            Ergebnisse – ganz gleich, wie herausfordernd Ihr Projekt auch sein mag.
                        </p>

                        <div className="flex items-center justify-center gap-4 mt-4">
                            <div className="flex items-center text-white gap-2">
                                <FaCheckCircle className="text-xl" />
                                <span>Verlässlichkeit</span>
                            </div>
                            <div className="flex items-center text-white gap-2">
                                <FaClock className="text-xl" />
                                <span>Effizienz</span>
                            </div>
                        </div>

                        <button
                            className="bg-[#f39c12] text-white font-semibold py-2 px-6 mt-6"
                        >
                            Mehr Erfahren
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
