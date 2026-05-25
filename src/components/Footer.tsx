import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { FaHiking, FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        ease: "easeOut"
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-white border-t border-mint-100">
      {/* Main Footer */}
      <motion.div 
        className="container mx-auto px-4 py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand & Socials */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div 
                className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-secondary shadow-sm"
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <FaHiking size={24} />
              </motion.div>
              <span className="text-2xl font-bold text-secondary">Ethio<span className="text-primary-dark">Hiking</span></span>
            </Link>
            <p className="text-gray-500 leading-relaxed text-sm">
              Ethiopia's premier adventure company. 50+ years of expertise guiding explorers through the majestic roof of Africa.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: FaFacebookF, href: '#' },
                { Icon: FaInstagram, href: '#' },
                { Icon: FaTwitter, href: '#' },
                { Icon: FaYoutube, href: '#' },
                { Icon: FaWhatsapp, href: '#' },
              ].map((social, i) => (
                <motion.a 
                  key={i} 
                  href={social.href} 
                  className="w-9 h-9 bg-mint-50 text-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shadow-sm border border-mint-100"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Expeditions */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg text-secondary mb-6 relative inline-block group">
              Expeditions
              <motion.span 
                className="absolute -bottom-1 left-0 h-1 bg-primary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "2rem" }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
            </h4>
            <ul className="space-y-4">
              {[
                { label: 'Simien Mountains', to: '/tour/simien-mountains-traverse' },
                { label: 'Erta Ale Volcano', to: '/tour/erta-ale-volcano-expedition' },
                { label: 'Bale Mountains', to: '/tour/bale-mountains-explorer' },
                { label: 'Wonchi Crater', to: '/tour/wonchi-crater-lake-trek' },
                { label: 'Omo Valley', to: '/tour/omo-valley-cultural-immersion' },
              ].map((link, i) => (
                <motion.li 
                  key={i}
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Link to={link.to} className="text-gray-500 hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-mint-200 rounded-full group-hover:bg-primary transition-colors" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg text-secondary mb-6 relative inline-block">
              Quick Links
              <motion.span 
                className="absolute -bottom-1 left-0 h-1 bg-primary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "2rem" }}
                transition={{ delay: 0.6, duration: 0.5 }}
              />
            </h4>
            <ul className="space-y-4">
              {[
                { label: 'About Our Story', to: '/about' },
                { label: 'Adventure Gallery', to: '/gallery' },
                { label: 'Travel Journal', to: '/blog' },
                { label: 'Common FAQs', to: '/faq' },
                { label: 'Client Reviews', to: '/testimonials' },
              ].map((link, i) => (
                <motion.li 
                  key={i}
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Link to={link.to} className="text-gray-500 hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-mint-200 rounded-full group-hover:bg-primary transition-colors" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg text-secondary mb-6 relative inline-block">
              Contact Us
              <motion.span 
                className="absolute -bottom-1 left-0 h-1 bg-primary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "2rem" }}
                transition={{ delay: 0.7, duration: 0.5 }}
              />
            </h4>
            <ul className="space-y-5">
              {[
                { icon: FaMapMarkerAlt, text: 'Bole Road, Near Friendship Mall\nAddis Ababa, Ethiopia' },
                { icon: FaPhoneAlt, text: '+251 911 22 33 44' },
                { icon: FaEnvelope, text: 'info@ethiotrek.com' },
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-start gap-4 group cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="w-10 h-10 bg-mint-50 text-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors"
                    whileHover={{ rotate: 10 }}
                  >
                    <item.icon />
                  </motion.div>
                  <span className="text-gray-500 text-sm leading-relaxed whitespace-pre-line group-hover:text-secondary transition-colors">
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div 
        className="bg-mint-50 py-8 border-t border-mint-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-xs text-center md:text-left">
              © {new Date().getFullYear()} EthioHiking. All rights reserved. 
              <span className="hidden md:inline mx-2 text-mint-300">|</span> 
              <span className="block md:inline mt-2 md:mt-0">Licensed by Ethiopian Tourism Ministry</span>
            </p>
            <div className="flex gap-8 text-xs font-semibold text-gray-500">
              {['Terms', 'Privacy', 'Cookies'].map((text, i) => (
                <motion.a 
                  key={i} 
                  href="#" 
                  className="hover:text-primary-dark transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {text}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
