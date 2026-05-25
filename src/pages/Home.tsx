import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { FaMountain, FaRoute, FaUsers, FaAward, FaArrowRight, FaStar, FaQuoteRight, FaQuoteLeft } from 'react-icons/fa';
import { tours, testimonials } from '../data/content.ts';

const Counter: React.FC<{ value: string; label: string; icon: React.ElementType }> = ({ value, label, icon: Icon }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  
  // Extract number and suffix (e.g., "15,000+" -> number: 15000, suffix: "+")
  const numericValue = parseInt(value.replace(/,/g, ''));
  const suffix = value.replace(/[0-9,]/g, '');
  
  const rounded = useTransform(count, (latest) => {
    const val = Math.round(latest);
    return val >= 1000 ? val.toLocaleString() : val;
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for premium feel
      });
      return controls.stop;
    }
  }, [isInView, count, numericValue]);

  return (
    <div ref={ref} className="text-center group">
      <motion.div 
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-20 h-20 bg-mint-50 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-all duration-500 shadow-soft group-hover:shadow-mint"
      >
        <Icon className="text-primary group-hover:text-white text-4xl transition-colors duration-500" />
      </motion.div>
      <h3 className="text-4xl md:text-5xl font-black text-secondary mb-2 tracking-tighter flex items-center justify-center">
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </h3>
      <p className="text-gray-400 text-[10px] uppercase tracking-[0.4em] font-black">{label}</p>
    </div>
  );
};

const Home: React.FC = () => {
  const featuredTours = tours.slice(0, 3);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=2070&auto=format&fit=crop" 
            alt="Ethiopian Mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/20 to-secondary/90" />
        </motion.div>
        
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="accent-text !text-white !mb-8"
              >
                <span className="w-12 h-[2px] bg-primary"></span>
                50+ Years of Excellence in Ethiopia
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-[0.9] tracking-tighter uppercase">
                <motion.span 
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 1.2, 
                    ease: [0.175, 0.885, 0.32, 1.275], // Custom drop-bounce
                    delay: 0.2 
                  }}
                  className="block font-bebas text-white"
                >
                  Adventure
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="block font-bebas text-shimmer"
                >
                  Redefined
                </motion.span>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl leading-relaxed font-medium"
              >
                From the dramatic peaks of the Simien Mountains to the eternal fire of Erta Ale. 
                Experience adventures curated by legends, guided by locals who call these lands home.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-wrap gap-6"
              >
                <Link 
                  to="/tours" 
                  className="btn-primary group !px-10 !py-5 text-lg"
                >
                  Explore Expeditions
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                <Link 
                  to="/about" 
                  className="btn-outline !text-white !border-white/30 !px-10 !py-5 text-lg hover:!bg-white hover:!text-secondary"
                >
                  Our Story
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <div className="flex flex-col items-center gap-4">
            <span className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold vertical-text">Scroll</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-mint-200 to-transparent" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { icon: FaMountain, number: '60+', label: 'Expeditions' },
              { icon: FaRoute, number: '15,000+', label: 'Happy Trekkers' },
              { icon: FaUsers, number: '200+', label: 'Expert Guides' },
              { icon: FaAward, number: '50+', label: 'Years Experience' },
            ].map((stat, index) => (
              <Counter key={index} value={stat.number} label={stat.label} icon={stat.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Expeditions */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="accent-text">Our Signature Journeys</span>
            <h2 className="section-title">Featured Expeditions</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Handcrafted adventures that showcase the very best of Ethiopia's natural wonders and cultural heritage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredTours.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Link to={`/tour/${tour.slug}`} className="card-premium group block h-full">
                  <div className="relative h-80 overflow-hidden">
                    <motion.img 
                      src={tour.heroImage} 
                      alt={tour.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute top-6 right-6">
                      <span className="px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest bg-white/95 backdrop-blur-md text-secondary shadow-lg">
                        {tour.difficulty}
                      </span>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-[0.3em] mb-2"
                      >
                        <FaStar size={10} />
                        Featured Expedition
                      </motion.div>
                      <h3 className="text-2xl font-black text-white leading-tight uppercase font-bebas tracking-wide">
                        {tour.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-gray-500 text-sm mb-8 line-clamp-2 leading-relaxed font-medium">
                      {tour.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-gray-400 text-[9px] uppercase font-black tracking-widest mb-1">Price starting from</span>
                        <p className="text-2xl font-black text-secondary tracking-tighter">${tour.basePrice}</p>
                      </div>
                      <motion.div 
                        whileHover={{ x: 5 }}
                        className="w-12 h-12 bg-mint-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500"
                      >
                        <FaArrowRight size={18} />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              to="/tours" 
              className="inline-flex items-center gap-3 bg-secondary hover:bg-secondary/90 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl"
            >
              View All Expeditions <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white relative">
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
                The EthioHiking Difference
              </div>
              <h2 className="section-title">Guided by Legends,<br />Led by Heart</h2>
              <div className="space-y-12">
                {[
                  { title: 'Indigenous Wisdom', desc: 'Our guides are born and raised in the mountains we traverse. They share stories, traditions, and secrets no guidebook can offer.' },
                  { title: 'Conservation First', desc: 'We pledge 5% of every booking to local conservation efforts, from wolf protection to reforestation.' },
                  { title: 'Small Groups, Big Impact', desc: 'Maximum 10 adventurers per expedition ensures authentic experiences and minimal environmental footprint.' },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    className="flex gap-8 group"
                  >
                    <div className="w-16 h-16 bg-mint-50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-mint-100 shadow-soft group-hover:bg-primary transition-all duration-500">
                      <FaMountain className="text-primary text-2xl group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-secondary mb-3 uppercase tracking-tight group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
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
                  src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=2070" 
                  alt="Ethiopian Adventure"
                  className="w-full h-[650px] object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5 }}
                />
              </div>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-12 -left-12 w-40 h-40 bg-primary/10 rounded-full blur-2xl -z-10" 
              />
              <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <div className="accent-text !justify-center">
              <span className="w-10 h-[2px] bg-primary"></span>
              Voices from the Trail
            </div>
            <h2 className="section-title">What Adventurers Say</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-white rounded-[2.5rem] p-10 shadow-soft border border-mint-50 hover:shadow-premium transition-all duration-500 relative group"
              >
                <div className="absolute top-10 right-10 opacity-[0.05] group-hover:opacity-10 transition-opacity duration-500">
                  <FaQuoteRight size={60} className="text-secondary" />
                </div>
                
                <div className="flex gap-1 text-primary mb-8">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} size={12} />
                  ))}
                </div>
                
                <p className="text-secondary/70 text-base leading-relaxed mb-10 font-medium italic relative z-10">
                  "{testimonial.review}"
                </p>
                
                <div className="flex items-center gap-5 border-t border-mint-50 pt-8">
                  <div className="relative">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-700 border-2 border-mint-50 group-hover:border-primary"
                    />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary rounded-lg flex items-center justify-center text-white text-[10px]">
                      <FaQuoteLeft />
                    </div>
                  </div>
                  <div>
                    <p className="font-black text-secondary text-base tracking-tight uppercase">{testimonial.name}</p>
                    <p className="text-gray-400 text-[10px] uppercase font-black tracking-[0.2em]">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiking Tips & Equipment Section */}
      <section className="py-32 bg-mint-50/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-mint-200 to-transparent" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Hiking Tips */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="accent-text">
                <span className="w-10 h-[2px] bg-primary"></span>
                Expert Guidance
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-secondary mb-12 uppercase font-bebas tracking-tight">Hiking <span className="text-primary">Tips</span></h2>
              <div className="space-y-8">
                {[
                  { title: 'Acclimatization is Key', desc: 'The Ethiopian highlands reach over 4,000m. We recommend spending 2 days in Addis Ababa before starting high-altitude treks.' },
                  { title: 'Hydration Strategy', desc: 'Drink at least 3-4 liters of water daily. High altitude and tropical sun can dehydrate you faster than you realize.' },
                  { title: 'Respect Local Customs', desc: 'Always ask before taking photos of people and follow your guide\'s advice on cultural etiquette in rural villages.' },
                ].map((tip, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex gap-6 items-start group cursor-default"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary font-black shadow-soft border border-mint-50 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      0{i + 1}
                    </div>
                    <div>
                      <h4 className="font-black text-secondary uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">{tip.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed font-medium">{tip.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Essential Gear */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-[3rem] p-12 shadow-premium border border-mint-50"
            >
              <div className="accent-text">
                <span className="w-10 h-[2px] bg-primary"></span>
                Gear Recommendations
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-secondary mb-12 uppercase font-bebas tracking-tight">Essential <span className="text-primary">Gear</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { item: 'Trekking Boots', detail: 'Broken-in, waterproof' },
                  { item: 'Layered Clothing', detail: 'For -5°C to +25°C' },
                  { item: 'Daypack', detail: '25-35 Liters capacity' },
                  { item: 'Sun Protection', detail: 'High SPF & polarized lens' },
                  { item: 'Headlamp', detail: 'With extra batteries' },
                  { item: 'Personal Meds', detail: 'Basic first-aid kit' },
                ].map((gear, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="p-6 bg-mint-50/50 rounded-2xl border border-mint-100 group"
                  >
                    <p className="font-black text-secondary uppercase tracking-tight text-sm mb-1 group-hover:text-primary transition-colors">{gear.item}</p>
                    <p className="text-gray-400 text-[10px] uppercase font-black tracking-widest">{gear.detail}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-12 p-6 bg-secondary rounded-2xl flex items-center justify-between">
                <p className="text-white/80 text-xs font-medium">Need a detailed list?</p>
                <Link to="/blog" className="text-primary font-black text-[10px] uppercase tracking-widest hover:text-white transition-colors">Download Guide</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-secondary rounded-[4rem] p-16 md:p-24 shadow-premium relative overflow-hidden border border-white/5"
          >
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10" />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-7xl font-black text-white mb-8 relative z-10 leading-tight tracking-tighter uppercase font-bebas">
                Ready for the <span className="text-primary">Adventure?</span>
              </h2>
              <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-14 relative z-10 leading-relaxed font-medium">
                Join thousands of adventurers who have discovered the magic of Ethiopia with us. Your journey begins with a single step.
              </p>
              <div className="flex flex-wrap justify-center gap-6 relative z-10">
                <Link 
                  to="/contact" 
                  className="btn-primary !bg-primary !text-white !border-primary hover:!bg-transparent hover:!text-primary !px-12 !py-5 text-lg"
                >
                  Plan Your Trip
                </Link>
                <Link 
                  to="/faq" 
                  className="btn-outline !border-white/20 !text-white hover:!bg-white hover:!text-secondary !px-12 !py-5 text-lg"
                >
                  Common Questions
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
