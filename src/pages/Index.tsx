
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Camera, Hotel, Flower } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageCard from "@/components/ImageCard";

const featuredPhotos = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    alt: "Jelenie w Puszczy Białowieskiej",
    title: "Jelenie o poranku",
    category: "Ssaki",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937",
    alt: "Pszczoły na kwiatach",
    title: "Pracowitość natury",
    category: "Owady",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1439886183900-e79ec0057170",
    alt: "Dziki w lesie",
    title: "Mieszkańcy puszczy",
    category: "Ssaki",
  },
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac"
            alt="Puszcza Białowieska"
            className="w-full h-full object-cover animate-image-zoom"
          />
        </div>
        
        <div className="container-custom relative z-20 text-white text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-up">
            <h1 className="heading-xl">Natura Białowieży</h1>
            <p className="body-lg">
              Odkryj piękno Puszczy Białowieskiej poprzez naszą kolekcję zdjęć,
              doświadcz gościnności naszego hotelu i skosztuj naturalnego miodu.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link
                to="/gallery"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                Zobacz galerię
              </Link>
              <Link
                to="/hotel"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-6 py-3 rounded-full font-medium transition-colors"
              >
                Nasz hotel
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Photos */}
      <section className="py-24 bg-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-lg mb-6">Wyróżnione fotografie</h2>
            <p className="body-md text-muted-foreground">
              Specjalnie wybrana kolekcja fotografii przedstawiających bogactwo
              Puszczy Białowieskiej i jej unikalną faunę.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPhotos.map((photo) => (
              <ImageCard
                key={photo.id}
                src={photo.src}
                alt={photo.alt}
                title={photo.title}
                category={photo.category}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium group"
            >
              Zobacz więcej fotografii
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-lg mb-6">Odkryj więcej</h2>
            <p className="body-md text-muted-foreground">
              Oprócz fotografii natury, oferujemy również komfortowy pobyt w hotelu
              oraz naturalne, lokalne produkty pszczele.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <Camera className="h-12 w-12 mb-6 text-primary" />
              <h3 className="heading-sm mb-4">Fotografia</h3>
              <p className="text-muted-foreground mb-6">
                Kolekcja profesjonalnych fotografii dzikich zwierząt i ptaków 
                z Puszczy Białowieskiej wykonanych przez naszych fotografów.
              </p>
              <Link
                to="/gallery"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium group"
              >
                Zobacz galerię
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <Hotel className="h-12 w-12 mb-6 text-primary" />
              <h3 className="heading-sm mb-4">Hotel</h3>
              <p className="text-muted-foreground mb-6">
                Komfortowy wypoczynek w sercu Puszczy Białowieskiej. Oferujemy przytulne 
                pokoje i domową atmosferę blisko natury.
              </p>
              <Link
                to="/hotel"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium group"
              >
                Zobacz ofertę
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <Flower className="h-12 w-12 mb-6 text-primary" />
              <h3 className="heading-sm mb-4">Miód</h3>
              <p className="text-muted-foreground mb-6">
                Naturalny miód prosto z naszej pasieki. Niezwykły smak i właściwości 
                zdrowotne miodu z Puszczy Białowieskiej.
              </p>
              <Link
                to="/honey"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium group"
              >
                Poznaj nasze produkty
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
