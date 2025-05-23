import { FaGithub, FaFacebook, FaXTwitter } from 'react-icons/fa6';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full min-h-screen bg-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-6xl font-bold text-center mb-4 text-white">
          İletişim
        </h2>
        <p className="text-secondary text-center mb-16">
          Benimle iletişime geçin
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-lg p-8 backdrop-blur-sm">
            <form action="https://formsubmit.co/alifurkanyerek@gmail.com" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                  İsim
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-black-100 border border-accent-primary/20 text-white focus:outline-none focus:ring-2 focus:ring-accent-primary"
                  placeholder="Adınız"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-black-100 border border-accent-primary/20 text-white focus:outline-none focus:ring-2 focus:ring-accent-primary"
                  placeholder="E-posta adresiniz"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg bg-black-100 border border-accent-primary/20 text-white focus:outline-none focus:ring-2 focus:ring-accent-primary"
                  placeholder="Mesajınız"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-accent-primary text-black-200 font-medium hover:bg-accent-secondary transition-colors"
              >
                Gönder
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-white">İletişim Bilgileri</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <MdEmail className="text-accent-primary text-2xl" />
                  <a href="mailto:alifurkanyerek@gmail.com" className="text-secondary hover:text-accent-primary transition-colors">
                    alifurkanyerek@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <MdPhone className="text-accent-primary text-2xl" />
                  <a href="tel:+905537893351" className="text-secondary hover:text-accent-primary transition-colors">
                    +90 553 789 3351
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <MdLocationOn className="text-accent-primary text-2xl" />
                  <span className="text-secondary">
                    Balıkesir, Türkiye
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-white">Sosyal Medya</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/AliFurkanYerek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-accent-primary transition-colors"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-accent-primary transition-colors"
                >
                  <FaXTwitter size={24} />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-accent-primary transition-colors"
                >
                  <FaFacebook size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 