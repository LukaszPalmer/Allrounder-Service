import Header from "./Components/Header";
import Main from "./Components/Main";
import HeroSection from "./Components/HeroSection";
import ContactInfo from "./Components/ContactInfo";
import ScrollToTop from "./Components/ScrollToTop"; // Import der ScrollToTop-Komponente
import Footer from "./Components/Footer"; // Import der Footer-Komponente
import ContactForm from "./Components/ContactForm";



function App() {
    return (
        <div className="App">
            <ContactInfo/>
            <Header />
            <HeroSection />
            <Main/>
            <ContactForm/>
            <ScrollToTop/>
            <Footer/>
        </div>
    );
}

export default App;
