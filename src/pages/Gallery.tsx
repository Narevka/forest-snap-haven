
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhotoGallery, { Photo } from "@/components/PhotoGallery";

const photos: Photo[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    alt: "Jelenie w Puszczy Białowieskiej",
    title: "Jelenie o poranku",
    category: "Ssaki",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
    alt: "Żubr białowieski",
    title: "Król puszczy",
    category: "Ssaki",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
    alt: "Lis rudy",
    title: "Mieszkaniec lasu",
    category: "Ssaki",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937",
    alt: "Pszczoły na kwiatach",
    title: "Pracowitość natury",
    category: "Owady",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1439886183900-e79ec0057170",
    alt: "Dziki w lesie",
    title: "Dzika rodzina",
    category: "Ssaki",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac",
    alt: "Sarna",
    title: "Poranek w puszczy",
    category: "Ssaki",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
    alt: "Wilk",
    title: "Samotny łowca",
    category: "Ssaki",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
    alt: "Borsuk",
    title: "Nocny mieszkaniec",
    category: "Ssaki",
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    alt: "Dzięcioł",
    title: "Leśny muzyk",
    category: "Ptaki",
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937",
    alt: "Motyl",
    title: "Leśne barwy",
    category: "Owady",
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac",
    alt: "Sowa",
    title: "Strażnik nocy",
    category: "Ptaki",
  },
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
    alt: "Jeleń",
    title: "Dumny rogacz",
    category: "Ssaki",
  },
];

const categories = ["Ssaki", "Ptaki", "Owady"];

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-muted">
        <div className="container-custom pt-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg mb-6">Galeria fotografii</h1>
            <p className="body-md text-muted-foreground">
              Odkryj bogactwo fauny Puszczy Białowieskiej poprzez obiektywy naszych fotografów.
              Kolekcja profesjonalnych fotografii dzikich zwierząt i ptaków uwiecznionych w ich
              naturalnym środowisku.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container-custom">
          <PhotoGallery photos={photos} categories={categories} />
        </div>
      </section>

      {/* Photography Process */}
      <section className="bg-forest-muted py-16">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 text-center">
            <h2 className="heading-md mb-4">O procesie fotograficznym</h2>
            <p className="body-md text-muted-foreground mb-8 max-w-2xl mx-auto">
              Każde zdjęcie to efekt cierpliwości, doświadczenia i miłości do przyrody. 
              Nasze fotografie powstają z poszanowaniem dla dzikiej przyrody, bez ingerencji 
              w naturalne zachowania zwierząt.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="p-6 bg-muted rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Cierpliwe czekanie</h3>
                <p className="text-sm text-muted-foreground">
                  Spędzamy wiele godzin w czatowniach, czekając na odpowiedni moment 
                  do wykonania idealnego ujęcia.
                </p>
              </div>
              <div className="p-6 bg-muted rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Specjalistyczny sprzęt</h3>
                <p className="text-sm text-muted-foreground">
                  Korzystamy z profesjonalnego sprzętu fotograficznego dostosowanego 
                  do trudnych warunków puszczy.
                </p>
              </div>
              <div className="p-6 bg-muted rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Znajomość terenu</h3>
                <p className="text-sm text-muted-foreground">
                  Nasza wieloletnia znajomość Puszczy Białowieskiej pozwala nam 
                  docierać do miejsc, gdzie można spotkać rzadkie gatunki.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
