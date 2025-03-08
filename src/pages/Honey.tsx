
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Leaf, Award, Shield, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const honeyProducts = [
  {
    id: "1",
    name: "Miód lipowy",
    description: "Miód o jasnym kolorze i intensywnym, miętowym aromacie. Znany ze swoich właściwości łagodzących kaszel i przeziębienie.",
    price: "35 zł",
    image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937"
  },
  {
    id: "2",
    name: "Miód wielokwiatowy",
    description: "Miód o złocistym kolorze i bogatym, kwiatowym aromacie. Zawiera pyłki z różnych roślin Puszczy Białowieskiej.",
    price: "30 zł",
    image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac"
  },
  {
    id: "3",
    name: "Miód gryczany",
    description: "Miód o ciemnym kolorze i intensywnym, charakterystycznym aromacie. Bogaty w żelazo i inne minerały.",
    price: "40 zł",
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f"
  },
  {
    id: "4",
    name: "Miód spadziowy",
    description: "Miód o ciemnym kolorze i delikatnym, słodko-gorzkim smaku. Zawiera dużo minerałów i substancji biologicznie aktywnych.",
    price: "45 zł",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3"
  }
];

const honeyFeatures = [
  {
    icon: <Leaf className="h-8 w-8 text-primary" />,
    title: "W 100% naturalny",
    description: "Nasz miód pochodzi bezpośrednio z pasieki, bez dodatków i konserwantów."
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Najwyższa jakość",
    description: "Dbamy o jakość na każdym etapie produkcji, od pasieki do słoika."
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Certyfikowany",
    description: "Nasze produkty posiadają certyfikaty potwierdzające ich jakość i pochodzenie."
  }
];

const Honey = () => {
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
            alt="Pszczoły i miód"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container-custom relative z-20 text-white text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-up">
            <h1 className="heading-xl">Nasz Miód</h1>
            <p className="body-lg">
              Naturalny miód prosto z serca Puszczy Białowieskiej
            </p>
          </div>
        </div>
      </section>

      {/* About Our Honey */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="img-hover-zoom rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1498936178812-4b2e558d2937"
                  alt="Nasze pszczoły"
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">O naszym miodzie</span>
              <h2 className="heading-lg mt-2 mb-6">Tradycja i naturalność</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="body-md">
                  Nasze pasieki zlokalizowane są w sercu Puszczy Białowieskiej, jednego 
                  z najczystszych i najstarszych kompleksów leśnych w Europie.
                </p>
                <p className="body-md">
                  Pszczoły czerpią nektar z różnorodnych roślin rosnących w puszczy, 
                  dzięki czemu nasz miód ma wyjątkowy smak i aromat. Stosujemy tradycyjne 
                  metody pszczelarskie, dbając o dobrostan naszych pszczół i wysoką jakość miodu.
                </p>
                <p className="body-md">
                  Każdy słoik miodu to efekt pasji i dbałości o szczegóły, którą 
                  wkładamy w naszą pracę od ponad 20 lat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Honey Features */}
      <section className="py-20 bg-earth-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">Dlaczego nasz miód jest wyjątkowy</h2>
            <p className="body-md text-muted-foreground">
              Miód z Puszczy Białowieskiej to gwarancja najwyższej jakości i wyjątkowych 
              walorów smakowych oraz zdrowotnych.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {honeyFeatures.map((feature, index) => (
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

      {/* Honey Products */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">Nasze produkty</h2>
            <p className="body-md text-muted-foreground">
              Oferujemy różne rodzaje miodu, każdy o unikalnych właściwościach 
              i walorach smakowych.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {honeyProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium">{product.price}</span>
                    <button className="px-4 py-2 bg-primary text-white rounded-full text-sm hover:bg-primary/90 transition-colors">
                      Szczegóły
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Information */}
      <section className="py-20 bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Jak zamówić</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="body-md">
                  Nasz miód można kupić bezpośrednio w naszym hotelu w Białowieży 
                  lub złożyć zamówienie telefonicznie bądź mailowo.
                </p>
                <p className="body-md">
                  Dla zamówień powyżej 100 zł oferujemy darmową dostawę na terenie Polski.
                </p>
                <p className="body-md">
                  Skontaktuj się z nami, aby uzyskać więcej informacji lub złożyć zamówienie.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <span>miod@naturabialowiezy.pl</span>
                </div>
                <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-colors">
                  Złóż zamówienie
                </button>
              </div>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Formularz zamówienia</h3>
              <form className="space-y-4">
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
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Wiadomość</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Rodzaj miodu, ilość, pytania..."
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
      </section>

      {/* Cross-promotion */}
      <section className="bg-forest-muted py-16">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 text-center">
            <h2 className="heading-md mb-4">Odkryj więcej</h2>
            <p className="body-md text-muted-foreground mb-8 max-w-2xl mx-auto">
              Miód to tylko część naszej oferty. Zapraszamy również do naszego hotelu oraz 
              do podziwiania pięknych fotografii przyrody Puszczy Białowieskiej.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                to="/gallery" 
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                Galeria
              </Link>
              <Link 
                to="/hotel" 
                className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                Hotel
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Honey;
