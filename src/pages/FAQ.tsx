import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';
import { faqs } from '../data/content.ts';

const FAQ: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Booking & Preparation', 'Health & Safety', 'Fitness & Experience', 'On The Trek'];
  const filteredFaqs = activeCategory === 'All' ? faqs : faqs.filter(faq => faq.category === activeCategory);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] bg-secondary overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=2070" alt="FAQ" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/20 to-secondary/90" />
        </motion.div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="accent-text !text-white/80 !mb-8">
                <span className="w-12 h-[2px] bg-primary"></span>
                Preparation Guide
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase font-bebas tracking-tight">Common <span className="text-primary">Questions</span></h1>
              <p className="text-xl text-white/70 max-w-2xl leading-relaxed font-medium">Everything you need to know before stepping onto the trails of the ancient highlands.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-20">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] transition-all duration-500 border ${
                    activeCategory === category
                      ? 'bg-primary text-white border-primary shadow-mint scale-105'
                      : 'bg-white text-gray-400 hover:text-secondary border-mint-50 hover:border-mint-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* FAQ List */}
            <div className="space-y-6">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`group rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                    expandedId === faq.id 
                      ? 'bg-white border-primary shadow-premium' 
                      : 'bg-white border-mint-50 shadow-soft hover:border-mint-200'
                  }`}
                >
                  <button
                    onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                    className="w-full flex items-center justify-between p-8 text-left"
                  >
                    <div className="flex items-start gap-6">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                        expandedId === faq.id ? 'bg-primary text-white' : 'bg-mint-50 text-primary group-hover:bg-primary group-hover:text-white'
                      }`}>
                        <FaQuestionCircle size={20} />
                      </div>
                      <div>
                        <span className="text-[9px] font-black text-primary uppercase tracking-[0.3em] mb-2 block">{faq.category}</span>
                        <h3 className="text-xl font-black text-secondary uppercase font-bebas tracking-wide">{faq.question}</h3>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedId === faq.id ? 180 : 0 }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        expandedId === faq.id ? 'bg-primary/10 text-primary' : 'bg-mint-50 text-gray-400'
                      }`}
                    >
                      <FaChevronDown size={14} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {expandedId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                      >
                        <div className="px-8 pb-10 pt-0 ml-[4.5rem] border-t border-mint-50 mt-2 pt-8">
                          <p className="text-gray-500 text-base leading-relaxed font-medium max-w-2xl">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Contact CTA */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-32 bg-secondary rounded-[4rem] p-16 md:p-24 shadow-premium relative overflow-hidden border border-white/5 text-center"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
              <h3 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase font-bebas tracking-tighter">Still have <span className="text-primary">questions?</span></h3>
              <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed font-medium">Our team of expert guides is here to help you plan the perfect expedition. Let's chat about your journey.</p>
              <Link to="/contact" className="btn-primary !px-12 !py-5 text-lg">
                Talk to a Specialist
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
