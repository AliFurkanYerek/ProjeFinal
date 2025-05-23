import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    'All', 'Python', 'Qt', 'SQLite', 'HTML', 'CSS', 'JavaScript'
  ];

  const projects = [
    {
      title: "Kelime İşlemcisi",
      description: "Qt Designer, Python ve SQLite ile geliştirilmiş not defteri",
      technologies: ["Python", "Qt", "SQLite"],
      githubLink: "https://github.com/AliFurkanYerek/Kelime-islemcisi"
    },
    {
      title: "Soru Bankası",
      description: "Qt Designer, Python ve SQLite ile geliştirilmiş soru bankası uygulaması",
      technologies: ["Python", "Qt", "SQLite"],
      githubLink: "https://github.com/AliFurkanYerek/Soru_Bankasi"
    },
    {
      title: "Film Uygulaması",
      description: "Qt Designer, Python ve SQLite ile geliştirilmiş film uygulaması",
      technologies: ["Python", "Qt", "SQLite"],
      githubLink: "https://github.com/AliFurkanYerek/FilmUygulamasi"
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.technologies.includes(activeFilter));

  return (
    <section id="portfolio" className="relative w-full min-h-screen bg-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-6xl font-bold text-center mb-4 text-white">
          Portfolyo
        </h2>
        <p className="text-secondary text-center mb-16">
          Öne çıkan projelerim ve çalışmalarım
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                activeFilter === filter
                  ? 'bg-accent-primary text-black-200 font-medium'
                  : 'bg-card text-secondary hover:bg-card-hover'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-lg overflow-hidden bg-card hover:bg-card-hover transition-all duration-300 backdrop-blur-sm"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-accent-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-secondary mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full bg-accent-primary/10 text-accent-primary border border-accent-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors"
                >
                  <FaGithub size={20} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 