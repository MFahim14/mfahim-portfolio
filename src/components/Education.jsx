import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="education" className="section-padding bg-primary">
      <div className="container-custom" ref={ref}>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Education card */}
          <motion.div
            className="border border-muted border-opacity-20 bg-secondary bg-opacity-40 p-6"
            variants={itemVariants}
          >
            <h3 className="text-sm font-mono text-muted mb-4 tracking-wider">EDUCATION</h3>
            <p className="text-light font-medium mb-1 uppercase tracking-wide text-sm">
              Sathyabama University, Chennai, India
            </p>
            <p className="text-muted text-sm mb-2">
              Bachelor of Engineering · Computer Science
            </p>
            <p className="text-xs font-mono text-light opacity-70">2021 – 2025</p>
          </motion.div>

          {/* Certifications card */}
          <motion.div
            className="border border-muted border-opacity-20 bg-secondary bg-opacity-40 p-6"
            variants={itemVariants}
          >
            <h3 className="text-sm font-mono text-muted mb-4 tracking-wider">CERTIFICATIONS</h3>
            <p className="text-light font-medium mb-2">
              AWS Certified Solutions Architect – Associate
            </p>
            <p className="text-xs font-mono text-light opacity-70 mb-4">March 2025 – March 2028</p>
            <a
              href="/certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium border border-light border-opacity-30 hover:border-opacity-60 hover:bg-light hover:bg-opacity-5 px-4 py-2 transition-all duration-300"
            >
              View certificate
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;