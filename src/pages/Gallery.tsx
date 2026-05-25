import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearchPlus, FaTimes } from 'react-icons/fa';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const images = [
    { url: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=800', title: 'Simien Mountains Sunrise', category: 'Mountains' },
    { url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800', title: 'Alpine Lake Reflection', category: 'Lakes' },
    { url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800', title: 'Misty Forest Trail', category: 'Forests' },
    { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800', title: 'Dramatic Mountain Peaks', category: 'Mountains' },
    { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800', title: 'Golden Hour at Camp', category: 'Camping' },
    { url: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=800', title: 'Highland Wildlife', category: 'Wildlife' },
    { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800', title: 'Volcanic Landscape', category: 'Volcanoes' },
    { url: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800', title: 'Ethiopian Plateau', category: 'Landscapes' },
    { url: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=800', title: 'Coffee Ceremony', category: 'Culture' },
    { url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800', title: 'Mountain Village', category: 'Culture' },
    { url: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=800', title: 'Trekking Through Clouds', category: 'Adventure' },
    { url: 'https://images.unsplash.com/photo-1523802510508-065010706fd5?q=80&w=800', title: 'Ancient Rock Churches', category: 'Heritage' },
  ];

  const categories = ['All', 'Mountains', 'Lakes', 'Culture', 'Wildlife', 'Adventure'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' ? images : images.filter(img => img.category === activeCategory);

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
          <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070" alt="Gallery" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/20 to-secondary/90" />
        </motion.div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="accent-text !text-white/80 !mb-8">
                <span className="w-12 h-[2px] bg-primary"></span>
                Visual Stories
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase font-bebas tracking-tight">Adventure <span className="text-primary">Gallery</span></h1>
              <p className="text-xl text-white/70 max-w-2xl leading-relaxed font-medium">Capturing the raw beauty and untamed spirit of the Ethiopian highlands.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
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

          {/* Grid - Enhanced Layout */}
          <div className="columns-1 md:grid-cols-2 lg:columns-3 gap-10 space-y-10">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8,
                    delay: (index % 3) * 0.1 
                  }}
                  className="relative cursor-pointer group break-inside-avoid"
                  onClick={() => setSelectedImage(image.url)}
                >
                  <div className="relative overflow-hidden rounded-[2.5rem] border border-mint-50 shadow-soft hover:shadow-premium transition-all duration-700">
                    <motion.img 
                      src={image.url} 
                      alt={image.title}
                      className="w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 shadow-2xl">
                        <FaSearchPlus size={24} />
                      </div>
                    </div>
                    
                    <div className="absolute bottom-8 left-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <p className="text-primary font-black text-[9px] uppercase tracking-[0.3em] mb-2">{image.category}</p>
                      <p className="text-white font-black text-xl uppercase font-bebas tracking-wide leading-tight">{image.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-secondary/98 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <motion.button 
              whileHover={{ rotate: 90, scale: 1.1 }}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            >
              <FaTimes size={40} />
            </motion.button>
            <motion.img 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              src={selectedImage.replace('w=800', 'w=1600')} 
              alt=""
              className="max-w-full max-h-[85vh] object-contain rounded-[2rem] shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
