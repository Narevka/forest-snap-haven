
import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold">Natura Białowieży</h3>
            <p className="text-muted-foreground">
              Odkryj piękno Puszczy Białowieskiej poprzez obiektywy naszych fotografów, 
              odpocznij w naszym hotelu i spróbuj naturalnego miodu z lokalnych pasiek.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-xl font-bold">Szybkie linki</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-primary smooth-transition">
                Strona główna
              </Link>
              <Link to="/gallery" className="text-muted-foreground hover:text-primary smooth-transition">
                Galeria
              </Link>
              <Link to="/hotel" className="text-muted-foreground hover:text-primary smooth-transition">
                Hotel
              </Link>
              <Link to="/honey" className="text-muted-foreground hover:text-primary smooth-transition">
                Miód
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-xl font-bold">Kontakt</h4>
            <div className="space-y-2">
              <p className="flex items-center text-muted-foreground">
                <MapPin className="mr-2 h-5 w-5 text-primary" />
                <span>Białowieża, Polska</span>
              </p>
              <p className="flex items-center text-muted-foreground">
                <Phone className="mr-2 h-5 w-5 text-primary" />
                <span>+48 123 456 789</span>
              </p>
              <p className="flex items-center text-muted-foreground">
                <Mail className="mr-2 h-5 w-5 text-primary" />
                <span>kontakt@naturabialowiezy.pl</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground text-sm">
            &copy; {currentYear} Natura Białowieży. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
