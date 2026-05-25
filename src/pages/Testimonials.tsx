import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaQuoteRight, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { testimonials } from '../data/content.ts';

const Testimonials: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] bg-secondary overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2070" alt="Testimonials" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-secondary/50" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Traveler Stories</h1>
              <p className="text-xl text-white/80">Hear from adventurers who've walked these paths before you</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg relative"
              >
                <FaQuoteLeft className="text-primary/20 text-5xl absolute top-6 right-6" />
                <div className="flex gap-1 text-primary mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed text-lg italic mb-8 relative z-10">"{testimonial.review}"</p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover border-2 border-primary" />
                  <div>
                    <p className="font-bold text-secondary text-lg">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    <p className="text-primary text-sm mt-1 font-medium">{testimonial.tourName}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-gray-400 text-sm">Reviewed on {new Date(testimonial.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-20 text-center"
          >
            <h3 className="text-2xl font-bold text-secondary mb-8">Why Travelers Trust EthioHiking</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '4.9/5', label: 'Average Rating' },
                { number: '500+', label: '5-Star Reviews' },
                { number: '98%', label: 'Would Recommend' },
                { number: '15,000+', label: 'Happy Trekkers' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl font-bold text-primary mb-1">{stat.number}</p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-20 bg-secondary rounded-3xl p-12 text-center"
          >
            <FaQuoteRight className="text-white/20 text-6xl mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Create Your Own Story?</h3>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Join thousands of adventurers who have discovered the magic of Ethiopia. Your journey begins here.</p>
            <Link to="/tours" className="inline-flex items-center gap-3 bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-xl">
              Explore Our Tours
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
