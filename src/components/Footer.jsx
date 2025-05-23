import { FaGithub, FaFacebook, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-tertiary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
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
          <p className="text-secondary text-sm">
            © 2025 Ali Furkan Yerek. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 