
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Bed, Coffee, Wifi, TreeDeciduous, MapPin, Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const hotelFeatures = [
  {
    icon: <Bed className="h-8 w-8 text-primary" />,
    title: "Komfortowe pokoje",
    description: "Przytulne, dobrze wyposażone pokoje z widokiem na las."
  },
  {
    icon: <Coffee className="h-8 w-8 text-primary" />,
    title: "Domowe posiłki",
    description: "Tradycyjna kuchnia regionalna z lokalnych produktów."
  },
  {
    icon: <Wifi className="h-8 w-8 text-primary" />,
    title: "Bezpłatne Wi-Fi",
    description: "Szybkie połączenie internetowe w całym obiekcie."
  },
  {
    icon: <TreeDeciduous className="h-8 w-8 text-primary" />,
    title: "Bliskość natury",
    description: "Zaledwie kilka minut spacerem do Puszczy Białowieskiej."
  }
];

const hotelImages = [
  { 
    src: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937", 
    alt: "Hotel z zewnątrz" 
  },
  { 
    src: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac", 
    alt: "Recepcja hotelu" 
  },
  { 
    src: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f", 
    alt: "Pokój hotelowy" 
  }
];

const Hotel = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1498936178812-4b2e558d2937"
            alt="Hotel w Puszczy Białowieskiej"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container-custom relative z-20 text-white text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-up">
            <h1 className="heading-xl">Nasz Hotel</h1>
            <p className="body-lg">
              Komfortowy wypoczynek w sercu Puszczy Białowieskiej
            </p>
          </div>
        </div>
      </section>

      {/* About Hotel */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">O naszym hotelu</span>
              <h2 className="heading-lg mt-2 mb-6">Twój dom w sercu puszczy</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="body-md">
                  Nasz rodzinny hotel położony jest na skraju Puszczy Białowieskiej, oferując gościom 
                  wyjątkową okazję do obcowania z naturą w komfortowych warunkach.
                </p>
                <p className="body-md">
                  Od ponad 15 lat zapewniamy naszym gościom niezapomniane wrażenia, łącząc tradycyjną 
                  gościnność z nowoczesnymi udogodnieniami. Nasz obiekt to idealne miejsce dla miłośników 
                  przyrody, fotografów i wszystkich szukających spokoju i wytchnienia.
                </p>
                <p className="body-md">
                  Zapraszamy do spędzenia czasu w miejscu, gdzie natura spotyka się z komfortem, 
                  a tradycja z nowoczesnością.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src={hotelImages[0].src} 
                  alt={hotelImages[0].alt} 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <img 
                  src={hotelImages[1].src} 
                  alt={hotelImages[1].alt} 
                  className="w-full h-40 object-cover rounded-lg shadow-md"
                />
              </div>
              <div>
                <img 
                  src={hotelImages[2].src} 
                  alt={hotelImages[2].alt} 
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">Co oferujemy</h2>
            <p className="body-md text-muted-foreground">
              Nasz hotel łączy w sobie komfort nowoczesnych udogodnień z urokiem 
              tradycyjnej architektury i bliskością natury.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hotelFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact and Reservation */}
      <section className="py-20">
        <div className="container-custom">
          <div className="bg-forest-muted rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="heading-md mb-6">Kontakt i rezerwacje</h2>
                <p className="body-md text-muted-foreground mb-8">
                  Zapraszamy do kontaktu w sprawie rezerwacji oraz wszelkich pytań 
                  dotyczących naszego hotelu i oferowanych usług.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium">Adres</h4>
                      <p className="text-muted-foreground">ul. Leśna 123, 17-230 Białowieża</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium">Telefon</h4>
                      <p className="text-muted-foreground">+48 123 456 789</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-muted-foreground">hotel@naturabialowiezy.pl</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-semibold mb-6">Zapytanie o rezerwację</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Imię i nazwisko</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Jan Kowalski"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="jan@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="checkin" className="block text-sm font-medium mb-1">Data przyjazdu</label>
                      <input
                        type="date"
                        id="checkin"
                        className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="checkout" className="block text-sm font-medium mb-1">Data wyjazdu</label>
                      <input
                        type="date"
                        id="checkout"
                        className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Wiadomość</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Dodatkowe informacje, pytania..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-md font-medium transition-colors"
                  >
                    Wyślij zapytanie
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-promotion */}
      <section className="bg-forest-muted py-16">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 text-center">
            <h2 className="heading-md mb-4">Poznaj nasze inne usługi</h2>
            <p className="body-md text-muted-foreground mb-8 max-w-2xl mx-auto">
              Oprócz komfortowego zakwaterowania, oferujemy także naturalny miód z naszej pasieki
              oraz organizujemy wycieczki fotograficzne po Puszczy Białowieskiej.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                to="/gallery" 
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                Galeria
              </Link>
              <Link 
                to="/honey" 
                className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                Miód
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hotel;
