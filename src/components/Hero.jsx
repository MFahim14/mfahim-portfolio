import { motion } from 'framer-motion';
import Avatar from './Avatar'; // Added import

const DottedText = ({ text }) => {
  const letters = text.split('');

  return (
    <div className="pixelated-text">
      {letters}
    </div>
  );
};

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="home" className="h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute left-1/3 top-1/4 w-72 h-72 rounded-full bg-gradient-to-tr from-[#202020] to-transparent opacity-30 blur-xl"
          animate={{
            x: [0, 10, 0],
            y: [0, -10, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/3 w-64 h-64 rounded-full bg-gradient-to-bl from-[#252525] to-transparent opacity-20 blur-xl"
          animate={{
            x: [0, -15, 0],
            y: [0, 15, 0],
            scale: [1, 1.03, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="container-custom">

        {/* Avatar Element - Added Here */}
        <div className="hidden md:block absolute top-1/2 right-20 lg:right-32 transform -translate-y-1/2 z-10">
          <Avatar />
        </div>

        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={childVariants}
            className="text-4xl md:text-6xl font-bold mb-8"
          >
            <div className="mb-2 font-mono text-sm tracking-wider text-muted">HELLO, I'M</div>
            <div className="nothing-headline font-mono tracking-wide">
              <DottedText text="MOHAMMED FAHIM" />
            </div>
            <div className="mt-3 text-gradient">Software Engineer · AWS Solutions Architect & Security Specialty</div>
          </motion.h1>

          <motion.p
            variants={childVariants}
            className="text-muted text-lg md:text-xl mb-10 max-w-xl"
          >
            Software Engineer with 2 years designing AI-powered, cloud-native systems on AWS—production agents, least-privilege architecture, and real-time enterprise automation.
          </motion.p>
          <motion.p variants={childVariants} className="text-muted text-sm mb-10">Open to backend, cloud, AI, and full-stack opportunities.</motion.p>

          {/* Social and CTAs */}
          <motion.div
            variants={childVariants}
            className="flex flex-wrap gap-6 mb-12"
          >
            <a href="https://github.com/MFahim14" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted hover:text-light transition-colors">
              <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.84 21.49C9.34 21.581 9.522 21.276 9.522 21.008C9.522 20.766 9.513 20.011 9.508 19.172C6.726 19.791 6.143 17.898 6.143 17.898C5.699 16.754 5.064 16.451 5.064 16.451C4.187 15.818 5.131 15.829 5.131 15.829C6.104 15.898 6.626 16.868 6.626 16.868C7.498 18.412 8.974 17.945 9.541 17.687C9.63 17.058 9.888 16.592 10.175 16.32C7.956 16.046 5.62 15.233 5.62 11.477C5.62 10.386 6.01 9.491 6.646 8.787C6.546 8.531 6.202 7.57 6.747 6.181C6.747 6.181 7.563 5.908 9.497 7.211C10.29 7.002 11.151 6.898 12.001 6.894C12.849 6.899 13.71 7.002 14.505 7.211C16.437 5.908 17.252 6.181 17.252 6.181C17.798 7.57 17.454 8.531 17.354 8.787C17.991 9.491 18.379 10.386 18.379 11.477C18.379 15.246 16.038 16.044 13.813 16.313C14.172 16.647 14.492 17.308 14.492 18.313C14.492 19.754 14.479 20.674 14.479 21.007C14.479 21.278 14.659 21.586 15.167 21.49C19.137 20.162 22 16.418 22 12C22 6.477 17.523 2 12 2Z" />
              </svg>
              GITHUB
            </a>

            <a href="mailto:mailmefahim14@gmail.com" className="flex items-center gap-2 text-sm text-muted hover:text-light transition-colors">
              <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" />
              </svg>
              EMAIL
            </a>

            <a href="https://www.linkedin.com/in/mfahim0408" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted hover:text-light transition-colors">
              <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
              </svg>
              LINKEDIN
            </a>
          </motion.div>

          <motion.div
            variants={childVariants}
            className="flex flex-wrap gap-5"
          >
            <a href="#projects" className="nothing-btn group">
              VIEW PROJECTS
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>

            <a href="/Fahim_CV.pdf" target="_blank" rel="noopener noreferrer" className="nothing-btn">
              RESUME
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>


    </section>
  );
};

export default Hero;