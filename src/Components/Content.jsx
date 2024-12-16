import Card from './Card';
import HighlightCard from './HighlightCard';
import ServiceSection from './ServiceSection'; // Import der neuen ServiceSection-Komponente


const Main = () => {
    return (
        <main className="bg-[#f0f8ff] py-8 px-4 md:px-16 space-y-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card 
                    title="Trockenbau" 
                    description="Professionelle Trockenbauarbeiten für optimale Raumaufteilung und Funktionalität. Präzise und saubere Ausführung garantiert."
                />
                <Card 
                    title="Spachtelarbeiten" 
                    description="Glatt und eben: Wir führen Spachtelarbeiten mit hoher Sorgfalt und Genauigkeit aus, für perfekte Oberflächen in jedem Raum."
                />
                <Card 
                    title="Verputzen" 
                    description="Exzellente Putzarbeiten für robuste und ästhetisch ansprechende Wände und Decken. Verlassen Sie sich auf unser Know-how."
                />
                <Card 
                    title="Fassaden" 
                    description="Fassadengestaltung und -sanierung für einen nachhaltigen und optisch ansprechenden Schutz Ihres Gebäudes."
                />
                <Card 
                    title="Fliesen" 
                    description="Präzises Verlegen von Fliesen in Bädern, Küchen und Wohnräumen. Hochwertige Ergebnisse für stilvolle und langlebige Oberflächen."
                />
                <Card 
                    title="Entrümpelungen & Entsorgungsarbeiten" 
                    description="Effiziente Entrümpelung und fachgerechte Entsorgung – schnell, gründlich und umweltbewusst. Wir schaffen Platz für Neues."
                />
                <Card 
                    title="Gartenarbeiten" 
                    description="Vom Anlegen bis zur Pflege: Gartenarbeiten, die Ihren Außenbereich zum Erblühen bringen. Kreative Lösungen für Ihren Garten."
                />
                <Card 
                    title="Pflastern" 
                    description="Stabile und ästhetische Pflasterarbeiten für Wege, Einfahrten und Terrassen. Beständig und harmonisch in jedes Umfeld integriert."
                />
                <Card 
                    title="Elektroarbeiten" 
                    description="Sichere Elektroinstallationen und Reparaturen durch unsere Fachkräfte – zuverlässig und den neuesten Standards entsprechend."
                />
            </div>
            <HighlightCard/>
            <ServiceSection /> {/* Neue ServiceSection-Komponente */}
            
        </main>
    );
};

export default Main;
