
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Camera, Leaf, Award, Clock } from "lucide-react";
import { motion } from "framer-motion";
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
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
    alt: "Wiewiórka na drzewie",
    title: "Leśni akrobaci",
    category: "Ssaki",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1518065896235-a4bc973df208",
    alt: "Ptaki w locie",
    title: "Wolność przestworzy",
    category: "Ptaki",
  },
];

// Statystyki
const stats = [
  { id: 1, name: "Zdjęć w kolekcji", value: "150+" },
  { id: 2, name: "Gatunków zwierząt", value: "40+" },
  { id: 3, name: "Lat doświadczenia", value: "15+" },
];

// Kategorie
const categories = [
  { id: 1, name: "Ssaki", icon: <Leaf className="h-6 w-6" />, count: 65 },
  { id: 2, name: "Ptaki", icon: <Camera className="h-6 w-6" />, count: 48 },
  { id: 3, name: "Owady", icon: <Award className="h-6 w-6" />, count: 27 },
  { id: 4, name: "Krajobraz", icon: <Clock className="h-6 w-6" />, count: 15 },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Automatyczne przewijanie zdjęć w karuzeli
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === featuredPhotos.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-transition">
      <Navbar />
      
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac"
            alt="Puszcza Białowieska"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="container-custom relative z-20 text-white text-center">
          <motion.div 
            className="max-w-3xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="heading-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Forest Snap Haven
            </motion.h1>
            <motion.p 
              className="body-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Zanurz się w magicznym świecie Puszczy Białowieskiej poprzez nasze 
              mistrzowskie fotografie dzikiej przyrody. Każde zdjęcie opowiada 
              własną, niepowtarzalną historię.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4 justify-center pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link
                to="/gallery"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                Zobacz galerię
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {stats.map((stat) => (
              <motion.div 
                key={stat.id} 
                className="bg-muted rounded-lg p-8 text-center shadow-sm"
                variants={item}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.name}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Photos Carousel */}
      <section className="py-24 bg-muted">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-lg mb-6">Wyróżnione fotografie</h2>
            <p className="body-md text-muted-foreground">
              Specjalnie wybrana kolekcja fotografii przedstawiających bogactwo
              Puszczy Białowieskiej i jej unikalną faunę.
            </p>
          </motion.div>

          {/* Carousel */}
          <div className="relative mb-12">
            <div className="overflow-hidden rounded-xl">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                {featuredPhotos.map((photo) => (
                  <div key={photo.id} className="min-w-full px-4">
                    <div className="aspect-w-16 aspect-h-9 relative rounded-xl overflow-hidden">
                      <img 
                        src={photo.src} 
                        alt={photo.alt} 
                        className="object-cover w-full h-full" 
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                        <span className="inline-block text-xs uppercase tracking-wider bg-primary/80 px-2 py-1 rounded-full mb-2 text-white">
                          {photo.category}
                        </span>
                        <h3 className="text-xl font-semibold text-white">{photo.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {featuredPhotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-primary' : 'bg-primary/30'
                  }`}
                  aria-label={`Przejdź do zdjęcia ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Grid of Featured Photos */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {featuredPhotos.slice(0, 3).map((photo) => (
              <motion.div key={photo.id} variants={item}>
                <ImageCard
                  src={photo.src}
                  alt={photo.alt}
                  title={photo.title}
                  category={photo.category}
                />
              </motion.div>
            ))}
          </motion.div>

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

      {/* Categories Section */}
      <section className="py-24">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-lg mb-6">Odkryj świat natury</h2>
            <p className="body-md text-muted-foreground">
              Przeglądaj nasze zdjęcia według kategorii i poznaj różnorodność fauny 
              Puszczy Białowieskiej.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {categories.map((category) => (
              <motion.div 
                key={category.id}
                className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow text-center"
                variants={item}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6 text-primary">
                  {category.icon}
                </div>
                <h3 className="heading-sm mb-2">{category.name}</h3>
                <p className="text-muted-foreground mb-3">{category.count} zdjęć</p>
                <Link
                  to="/gallery"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium group"
                >
                  Przeglądaj
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Photography Section */}
      <section className="py-24 bg-muted">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-lg mb-6">O naszej fotografii</h2>
            <p className="body-md text-muted-foreground">
              Dzielimy się pasją do fotografii dzikiej przyrody, dokumentując życie 
              fascynujących mieszkańców Puszczy Białowieskiej.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Camera className="h-12 w-12 mb-6 text-primary" />
              <h3 className="heading-sm mb-4">Unikalne ujęcia</h3>
              <p className="text-muted-foreground mb-6">
                Nasze zdjęcia wykonywane są w naturalnym środowisku zwierząt, 
                często w trudno dostępnych miejscach puszczy.
              </p>
              <Link
                to="/gallery"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium group"
              >
                Zobacz galerię
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div 
              className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Camera className="h-12 w-12 mb-6 text-primary" />
              <h3 className="heading-sm mb-4">Wieloletnie doświadczenie</h3>
              <p className="text-muted-foreground mb-6">
                Nasza kolekcja to efekt wieloletnich obserwacji i setki godzin 
                spędzonych na czatowniach fotograficznych.
              </p>
              <Link
                to="/gallery"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium group"
              >
                Poznaj nasze prace
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div 
              className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Camera className="h-12 w-12 mb-6 text-primary" />
              <h3 className="heading-sm mb-4">Różnorodność gatunków</h3>
              <p className="text-muted-foreground mb-6">
                Dokumentujemy bogactwo fauny Puszczy Białowieskiej - od imponujących 
                żubrów po drobne, rzadkie ptaki.
              </p>
              <Link
                to="/gallery"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium group"
              >
                Odkryj różnorodność
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
