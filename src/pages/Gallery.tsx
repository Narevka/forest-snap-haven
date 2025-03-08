
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhotoGallery, { Photo } from "@/components/PhotoGallery";
import { motion } from "framer-motion";
import { format } from "date-fns";

// Sample photos with additional metadata
const photos: Photo[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    alt: "Jelenie w Puszczy Białowieskiej",
    title: "Jelenie o poranku",
    category: "Ssaki",
    featured: true,
    date: "10.05.2023",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
    alt: "Żubr białowieski",
    title: "Król puszczy",
    category: "Ssaki",
    featured: true,
    date: "15.06.2023",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
    alt: "Lis rudy",
    title: "Mieszkaniec lasu",
    category: "Ssaki",
    date: "22.07.2023",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937",
    alt: "Pszczoły na kwiatach",
    title: "Pracowitość natury",
    category: "Owady",
    date: "05.08.2023",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1439886183900-e79ec0057170",
    alt: "Dziki w lesie",
    title: "Dzika rodzina",
    category: "Ssaki",
    featured: true,
    date: "17.09.2023",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac",
    alt: "Sarna",
    title: "Poranek w puszczy",
    category: "Ssaki",
    date: "29.10.2023",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
    alt: "Wilk",
    title: "Samotny łowca",
    category: "Ssaki",
    date: "12.11.2023",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
    alt: "Borsuk",
    title: "Nocny mieszkaniec",
    category: "Ssaki",
    date: "24.12.2023",
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    alt: "Dzięcioł",
    title: "Leśny muzyk",
    category: "Ptaki",
    date: "05.01.2024",
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937",
    alt: "Motyl",
    title: "Leśne barwy",
    category: "Owady",
    date: "18.02.2024",
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac",
    alt: "Sowa",
    title: "Strażnik nocy",
    category: "Ptaki",
    date: "01.03.2024",
  },
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
    alt: "Jeleń",
    title: "Dumny rogacz",
    category: "Ssaki",
    date: format(new Date(), "dd.MM.yyyy"),
  },
];

const categories = ["Ssaki", "Ptaki", "Owady"];

const Gallery = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="page-transition">
      <Navbar />

      {/* Hero Section with Animation */}
      <motion.section 
        className="relative pt-24 pb-12 bg-muted"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <div className="container-custom pt-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="heading-lg mb-6"
              variants={itemVariants}
            >
              Galeria fotografii
            </motion.h1>
            <motion.p 
              className="body-md text-muted-foreground"
              variants={itemVariants}
            >
              Odkryj bogactwo fauny Puszczy Białowieskiej poprzez obiektywy naszych fotografów.
              Kolekcja profesjonalnych fotografii dzikich zwierząt i ptaków uwiecznionych w ich
              naturalnym środowisku.
            </motion.p>
            <motion.div
              className="mt-6 inline-block"
              variants={itemVariants}
            >
              <span className="inline-flex items-center text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                Aktualizowana co tydzień
              </span>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Loading State */}
      {isLoading ? (
        <div className="py-16 flex justify-center items-center min-h-[50vh]">
          <div className="space-y-8 w-full max-w-4xl">
            <div className="h-8 bg-muted rounded animate-pulse w-1/3 mx-auto"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="h-64 bg-muted rounded animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Gallery Section with improved layout */}
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
        </>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
