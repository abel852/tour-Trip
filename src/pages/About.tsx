import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMountain, FaHeart, FaLeaf, FaUsers, FaAward, FaQuoteRight } from 'react-icons/fa';
import { teamMembers } from '../data/content.ts';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] bg-secondary overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070" 
            alt="About"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/20 to-secondary/90" />
        </motion.div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
            >
              <div className="accent-text !text-white/80 !mb-8">
                <span className="w-12 h-[2px] bg-primary"></span>
                Our Legacy
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase font-bebas tracking-tight">Five Decades of <span className="text-primary">Adventure</span></h1>
              <p className="text-xl text-white/70 max-w-2xl leading-relaxed font-medium">
                Expertise built over 50 years, sharing Ethiopia's wonders responsibly with explorers from around the globe.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="accent-text">
                <span className="w-10 h-[2px] bg-primary"></span>
                Our Mission
              </div>
              <h2 className="section-title">Walking Lightly,<br />Leaving Legacy</h2>
              <div className="space-y-6">
                <p className="text-gray-500 text-lg leading-relaxed font-medium">
                  Founded in 1991 by Tadesse Bekele, EthioHiking was born from a simple belief: the world's most extraordinary landscapes should be preserved for future generations while providing sustainable livelihoods for local communities.
                </p>
                <p className="text-gray-500 text-lg leading-relaxed font-medium">
                  Every expedition we run plants trees, funds wildlife conservation, and supports schools in the communities we visit. Adventure and responsibility aren't just compatible—they're inseparable.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }} 
              className="relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-premium">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5 }}
                  src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=2070" 
                  alt="Ethiopian mountains" 
                  className="w-full h-[600px] object-cover" 
                />
              </div>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-12 -left-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-mint-50/30 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-mint-200 to-transparent" />
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }} 
            className="text-center mb-24"
          >
            <div className="accent-text !justify-center">
              <span className="w-10 h-[2px] bg-primary"></span>
              What We Believe
            </div>
            <h2 className="section-title">Our Core Values</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: FaMountain, title: 'Authenticity', desc: 'Real experiences with real people. Genuine Ethiopian hospitality that touches the soul.' },
              { icon: FaLeaf, title: 'Sustainability', desc: 'We\'re committed to leaving every trail better than we found it through active conservation.' },
              { icon: FaHeart, title: 'Community', desc: 'We employ locally and support the communities we visit, ensuring direct economic benefit.' },
              { icon: FaAward, title: 'Excellence', desc: '50 years of experience means we\'ve mastered the art of safe, premium adventure.' },
            ].map((value, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.8, delay: index * 0.15 }} 
                className="text-center p-12 bg-white rounded-[2.5rem] shadow-soft hover:shadow-premium transition-all duration-500 group border border-mint-50 hover:border-mint-200"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 bg-mint-50 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-primary transition-all duration-500"
                >
                  <value.icon className="text-primary group-hover:text-white text-3xl transition-colors duration-500" />
                </motion.div>
                <h3 className="text-xl font-black text-secondary mb-4 uppercase tracking-tight">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }} 
            className="text-center mb-24"
          >
            <div className="accent-text !justify-center">
              <span className="w-10 h-[2px] bg-primary"></span>
              Meet The Team
            </div>
            <h2 className="section-title">Guided by Experts</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.id} 
                initial={{ opacity: 0, y: 40 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.8, delay: index * 0.2 }} 
                className="card-premium group"
              >
                <div className="relative h-80 overflow-hidden">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 1 }}
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-black text-secondary uppercase tracking-tight group-hover:text-primary transition-colors">{member.name}</h3>
                  <p className="text-primary font-black text-[10px] mb-4 uppercase tracking-[0.3em]">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium line-clamp-2">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-secondary rounded-[4rem] p-16 md:p-24 shadow-premium relative overflow-hidden border border-white/5"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
            
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 uppercase font-bebas tracking-tighter">Ready to Write Your <span className="text-primary">Story?</span></h2>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
              Every great adventure starts with a single step. Let us guide you through Ethiopia's most breathtaking landscapes.
            </p>
            <Link to="/contact" className="btn-primary !px-12 !py-5 text-lg">
              Start Planning Your Expedition
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
