import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt, FaChevronUp } from 'react-icons/fa';

const QuickActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const actions = [
    {
      icon: <FaWhatsapp size={24} />,
      label: 'WhatsApp',
      href: 'https://wa.me/251911223344',
      color: 'bg-[#25D366]',
      delay: 0.1
    },
    {
      icon: <FaPhoneAlt size={20} />,
      label: 'Call Us',
      href: 'tel:+251911223344',
      color: 'bg-primary',
      delay: 0.2
    }
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4 items-end">
      <AnimatePresence>
        {/* WhatsApp & Call Buttons */}
        {actions.map((action, idx) => (
          <motion.a
            key={idx}
            href={action.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: action.delay }}
            whileHover={{ scale: 1.1, x: -5 }}
            className={`${action.color} text-white p-4 rounded-full shadow-2xl flex items-center gap-3 group overflow-hidden max-w-[60px] hover:max-w-[200px] transition-all duration-500`}
          >
            <span className="flex-shrink-0">{action.icon}</span>
            <span className="whitespace-nowrap font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {action.label}
            </span>
          </motion.a>
        ))}

        {/* Back to Top */}
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="bg-white text-primary p-4 rounded-full shadow-premium border border-mint-100 hover:bg-mint-50 transition-colors"
            title="Back to Top"
          >
            <FaChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuickActions;
