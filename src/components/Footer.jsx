import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12 border-t border-muted border-opacity-20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
          <p className="text-sm text-muted">
            © {currentYear} Mohammed Fahim. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;