import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaClock, FaUser, FaArrowRight } from 'react-icons/fa';
import { blogPosts } from '../data/content';

const Blog: React.FC = () => {
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
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070" alt="Blog" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/20 to-secondary/90" />
        </motion.div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="accent-text !text-white/80 !mb-8">
                <span className="w-12 h-[2px] bg-primary"></span>
                The Trail Journal
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase font-bebas tracking-tight">Adventure <span className="text-primary">Insights</span></h1>
              <p className="text-xl text-white/70 max-w-2xl leading-relaxed font-medium">Stories, expert tips, and deep-dives into the heart of Ethiopia's wilderness.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="card-premium group"
              >
                <div className="relative h-72 overflow-hidden">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 1 }}
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-60" />
                  <span className="absolute top-6 left-6 bg-white/95 backdrop-blur-md text-secondary px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
                    {post.category}
                  </span>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-6 text-[9px] font-black text-gray-400 uppercase tracking-[0.3em] mb-6">
                    <span className="flex items-center gap-2"><FaUser className="text-primary" /> {post.author}</span>
                    <span className="flex items-center gap-2"><FaClock className="text-primary" /> {post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-black text-secondary mb-4 group-hover:text-primary transition-colors uppercase font-bebas tracking-wide leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm mb-8 line-clamp-2 leading-relaxed font-medium">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between border-t border-mint-50 pt-6">
                    <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <motion.button 
                      whileHover={{ x: 5 }}
                      className="text-primary font-black text-xs uppercase tracking-[0.2em] flex items-center gap-2"
                    >
                      Read Article <FaArrowRight size={12} />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mt-32 bg-secondary rounded-[4rem] p-16 md:p-24 shadow-premium relative overflow-hidden border border-white/5 text-center"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
            
            <h3 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase font-bebas tracking-tighter">Never Miss an <span className="text-primary">Adventure</span></h3>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
              Expert travel tips, exclusive expedition offers, and inspiring stories delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:row gap-4 max-w-xl mx-auto">
              <div className="flex-1 relative group">
                <input 
                  type="email" 
                  placeholder="Your elite email address" 
                  className="w-full px-8 py-5 rounded-[2rem] bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm font-medium" 
                />
              </div>
              <button className="btn-primary !bg-primary !text-white !px-12 !py-5 uppercase tracking-widest text-xs font-black shadow-2xl shadow-primary/20">
                Join the Circle
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
