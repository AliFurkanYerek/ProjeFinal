import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase } from 'react-icons/fa';
import { SiQt, SiCsharp } from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      name: "Python",
      icon: <FaPython className="text-4xl" />,
      level: "İleri Seviye",
      description: "Masaüstü uygulamaları, veri analizi ve otomasyon"
    },
    {
      name: "Qt Designer",
      icon: <SiQt className="text-4xl" />,
      level: "İleri Seviye",
      description: "Kullanıcı arayüzü tasarımı ve masaüstü uygulamaları"
    },
    {
      name: "SQLite",
      icon: <FaDatabase className="text-4xl" />,
      level: "Orta Seviye",
      description: "Veritabanı tasarımı ve yönetimi"
    },
    {
      name: "HTML",
      icon: <FaHtml5 className="text-4xl" />,
      level: "Orta Seviye",
      description: "Web sayfası yapısı ve semantik HTML"
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-4xl" />,
      level: "Orta Seviye",
      description: "Responsive tasarım ve modern CSS özellikleri"
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-4xl" />,
      level: "Başlangıç Seviye",
      description: "Web uygulamaları ve interaktif özellikler"
    },
    {
      name: "React",
      icon: <FaReact className="text-4xl" />,
      level: "Başlangıç Seviye",
      description: "Modern web uygulamaları geliştirme"
    },
    {
      name: "C#",
      icon: <SiCsharp className="text-4xl" />,
      level: "İleri Seviye",
      description: "Masaüstü ve web uygulamaları geliştirme"
    }
  ];

  return (
    <section id="skills" className="relative w-full min-h-screen bg-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-6xl font-bold text-center mb-4 text-white">
          Neler Yapabilirim
        </h2>
        <p className="text-secondary text-center mb-16">
          Kullandığım teknolojiler ve uzmanlık alanlarım
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 backdrop-blur-sm hover:bg-card-hover transition-all duration-300"
            >
              <div className="text-accent-primary mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                {skill.name}
              </h3>
              <p className="text-accent-primary font-medium mb-2">
                {skill.level}
              </p>
              <p className="text-secondary">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 