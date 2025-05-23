import { FaGraduationCap } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="relative w-full min-h-screen bg-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-6xl font-bold text-center mb-4 text-white">
          Ben Kimim
        </h2>
        <p className="text-secondary text-center mb-16">
          Kendimi ve hedeflerimi tanıyın
        </p>

        <div className="bg-card rounded-lg p-8 backdrop-blur-sm">
          <div className="prose prose-invert max-w-none">
            <p className="text-secondary leading-relaxed mb-6">
              Merhaba! Ben Ali Furkan Yerek. Yazılım geliştirme konusunda tutkulu bir öğrenciyim. 
              Balıkesir Üniversitesi'nde Bilgisayar Mühendisliği okuyorum.
            </p>
            
            <p className="text-secondary leading-relaxed mb-6">
              Python programlama dili başta olmak üzere, web teknolojileri ve veritabanı yönetimi 
              konularında kendimi sürekli geliştiriyorum. Özellikle Qt Designer ile masaüstü uygulamaları 
              geliştirme konusunda deneyim sahibiyim.
            </p>

            <p className="text-secondary leading-relaxed mb-6">
              Yeni teknolojileri öğrenmeye her zaman açığım ve kendimi sürekli geliştirmeye çalışıyorum. 
              Takım çalışmasına yatkın, problem çözme becerileri güçlü ve yenilikçi çözümler üretmeye 
              odaklı bir yazılımcı olmayı hedefliyorum.
            </p>

            <div className="flex justify-center mt-8">
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg bg-accent-primary text-black-200 font-medium hover:bg-accent-secondary transition-colors"
              >
                İletişime Geç
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 