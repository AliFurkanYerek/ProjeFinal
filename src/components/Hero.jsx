import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-30" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
        <div className="w-64 h-64 rounded-full overflow-hidden mb-8 border-4 border-accent-primary">
          <img 
            src="/profile.jpg" 
            alt="Ali Furkan Yerek" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Ali Furkan Yerek
        </h1>
        
        <p className="text-xl md:text-2xl text-secondary mb-8 max-w-2xl">
          Yazılım geliştirme tutkusu ile modern ve kullanıcı dostu uygulamalar geliştiren
          bir bilgisayar mühendisliği öğrencisi
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#portfolio"
            className="px-8 py-3 rounded-lg bg-accent-primary text-black-200 font-medium hover:bg-accent-secondary transition-colors"
          >
            Projelerimi Gör
          </a>
          
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg bg-card text-white font-medium hover:bg-card-hover transition-colors backdrop-blur-sm"
          >
            İletişime Geç
          </a>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center">
            <span className="text-secondary text-sm mb-2">Aşağı Kaydır</span>
            <div className="w-6 h-10 border-2 border-secondary rounded-full p-1">
              <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 