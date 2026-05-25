import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { tours } from '../data/content.ts';
import BookingModal from '../components/BookingModal.tsx';
import { FaRoute, FaMountain, FaClock, FaUsers, FaChevronDown, FaCheck, FaTimes, FaArrowLeft, FaArrowRight, FaExclamationTriangle, FaShieldAlt, FaUtensils, FaBed, FaFirstAid, FaStar } from 'react-icons/fa';

const TourDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const tour = tours.find(t => t.slug === slug);
  const [expandedDay, setExpandedDay] = useState<number | null>(1);
  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'gear' | 'reviews'>('overview');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-secondary mb-4">Tour Not Found</h1>
          <Link to="/tours" className="text-primary font-bold">Back to Tours</Link>
        </div>
      </div>
    );
  }

  const difficultyColors = {
    'Easy': 'bg-green-400',
    'Moderate': 'bg-yellow-400',
    'Strenuous': 'bg-orange-400',
    'Technical': 'bg-red-400'
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={tour.heroImage} 
            alt={tour.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/40 to-transparent" />
        </div>
        
        <div className="absolute inset-0 flex flex-col justify-end pb-12">
          <div className="container mx-auto px-4">
            <Link to="/tours" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors text-xs font-bold uppercase tracking-widest">
              <FaArrowLeft size={10} /> Back to Expeditions
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className={`${difficultyColors[tour.difficulty]} text-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider`}>
                {tour.difficulty}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-4 leading-tight">{tour.title}</h1>
              <p className="text-lg text-white/80 max-w-2xl leading-relaxed">{tour.description}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-secondary py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: FaRoute, label: 'Distance', value: `${tour.distanceKm} km` },
              { icon: FaMountain, label: 'Elevation', value: `${tour.maxElevationM} m` },
              { icon: FaClock, label: 'Duration', value: `${tour.durationDays} Days` },
              { icon: FaUsers, label: 'Capacity', value: `${tour.maxGroupSize} People` },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center gap-4 text-white"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <stat.icon className="text-primary text-xl" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{stat.label}</p>
                  <p className="font-bold text-base">{stat.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex gap-8 mb-8 border-b border-mint-50">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'itinerary', label: 'Itinerary' },
                { id: 'gear', label: 'Gear Vault' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`pb-4 text-xs font-bold uppercase tracking-widest transition-all relative ${
                    activeTab === tab.id ? 'text-secondary' : 'text-gray-400 hover:text-secondary'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-mint-400 rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8"
                >
                  {/* Long Description */}
                  <div>
                    <h2 className="text-3xl font-bold text-secondary mb-4">About This Expedition</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">{tour.longDescription}</p>
                  </div>

                  {/* Highlights */}
                  {tour.highlights && tour.highlights.length > 0 && (
                    <div>
                      <h3 className="text-lg font-bold text-secondary mb-4 uppercase tracking-widest flex items-center gap-2">
                        <FaStar className="text-mint-400" size={14} /> Expedition Highlights
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {tour.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center gap-3 bg-mint-50/30 p-4 rounded-xl border border-mint-50">
                            <FaCheck className="text-mint-600" size={12} />
                            <span className="text-secondary text-sm font-medium">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Safety */}
                  <div className="bg-white border border-mint-50 rounded-2xl p-6 shadow-sm">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-mint-50 flex items-center justify-center flex-shrink-0">
                        <FaExclamationTriangle className="text-mint-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-secondary text-sm uppercase tracking-widest mb-3">Safety & Preparation</h4>
                        <p className="text-gray-500 text-xs leading-relaxed mb-4">{tour.fitnessLevel}</p>
                        {tour.acclimatizationNotes && (
                          <div className="text-xs text-gray-500 bg-mint-50/50 p-3 rounded-lg">
                            <strong className="text-secondary">Acclimatization:</strong> {tour.acclimatizationNotes}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Inclusions & Exclusions */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-mint-50 rounded-2xl p-6">
                      <h4 className="font-bold text-secondary text-sm mb-4 flex items-center gap-2 uppercase tracking-widest">
                        <FaCheck className="text-mint-400" /> Included
                      </h4>
                      <ul className="space-y-3">
                        {tour.inclusions.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-500 text-xs leading-relaxed">
                            <FaCheck className="text-mint-400 mt-0.5 flex-shrink-0" size={10} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white border border-red-50 rounded-2xl p-6">
                      <h4 className="font-bold text-secondary text-sm mb-4 flex items-center gap-2 uppercase tracking-widest">
                        <FaTimes className="text-red-300" /> Not Included
                      </h4>
                      <ul className="space-y-3">
                        {tour.exclusions.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-500 text-xs leading-relaxed">
                            <FaTimes className="text-red-300 mt-0.5 flex-shrink-0" size={10} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'itinerary' && (
                <motion.div
                  key="itinerary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <h2 className="text-3xl font-bold text-secondary mb-8">Day by Day Itinerary</h2>
                  <div className="space-y-4">
                    {tour.itinerary.map((item) => (
                      <div key={item.id} className="border border-gray-200 rounded-2xl overflow-hidden">
                        <button 
                          onClick={() => setExpandedDay(expandedDay === item.day ? null : item.day)}
                          className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <span className={`${difficultyColors[tour.difficulty]} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg`}>
                              {item.day}
                            </span>
                            <div className="text-left">
                              <span className="text-xs text-gray-400 uppercase tracking-wider">Day {item.day}</span>
                              <h3 className="text-lg font-bold text-secondary">{item.title}</h3>
                            </div>
                          </div>
                          <motion.div
                            animate={{ rotate: expandedDay === item.day ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <FaChevronDown className="text-gray-400" />
                          </motion.div>
                        </button>
                        
                        <AnimatePresence>
                          {expandedDay === item.day && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="p-6 pt-0 border-t border-gray-200">
                                <p className="text-gray-600 leading-relaxed mb-6">{item.description}</p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                  {item.accommodation && (
                                    <div className="flex items-center gap-3 bg-white p-3 rounded-xl">
                                      <FaBed className="text-primary" />
                                      <div>
                                        <p className="text-xs text-gray-400">Stay</p>
                                        <p className="font-semibold text-secondary text-sm">{item.accommodation}</p>
                                      </div>
                                    </div>
                                  )}
                                  <div className="flex items-center gap-3 bg-white p-3 rounded-xl">
                                    <FaUtensils className="text-primary" />
                                    <div>
                                      <p className="text-xs text-gray-400">Meals</p>
                                      <p className="font-semibold text-secondary text-sm">{item.meals.join(', ')}</p>
                                    </div>
                                  </div>
                                  {item.distance && (
                                    <div className="flex items-center gap-3 bg-white p-3 rounded-xl">
                                      <FaRoute className="text-primary" />
                                      <div>
                                        <p className="text-xs text-gray-400">Distance</p>
                                        <p className="font-semibold text-secondary text-sm">{item.distance}</p>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'gear' && (
                <motion.div
                  key="gear"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <h2 className="text-3xl font-bold text-secondary mb-8">Essential Gear List</h2>
                  <div className="bg-secondary rounded-2xl p-8 text-white">
                    <p className="text-gray-400 mb-8">Use this checklist to ensure you're fully prepared for your expedition.</p>
                    {['Required Gear', 'Recommended Clothing', 'Personal Items', 'Optional'].map(category => {
                      const items = tour.packingList.filter(item => item.category === category);
                      if (items.length === 0) return null;
                      return (
                        <div key={category} className="mb-8 last:mb-0">
                          <h3 className="text-primary font-bold mb-4 uppercase text-sm tracking-widest">{category}</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {items.map((item, i) => (
                              <div key={i} className="flex items-center gap-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                                <div className="w-6 h-6 border-2 border-white/30 rounded flex items-center justify-center">
                                  {item.included && <FaCheck className="text-primary text-sm" />}
                                </div>
                                <span className="text-gray-200">{item.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl p-8 border border-mint-50 shadow-premium">
              <div className="mb-6">
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Starting From</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-secondary">${tour.basePrice}</span>
                  <span className="text-gray-400 text-sm">/ person</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <FaShieldAlt className="text-mint-400" />
                  <span>Secure Booking Guarantee</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <FaClock className="text-mint-400" />
                  <span>Free Cancellation (up to 30 days)</span>
                </div>
              </div>

              <button 
                onClick={() => setIsBookingOpen(true)}
                className="btn-primary w-full py-4 text-lg mb-4"
              >
                Reserve Your Spot
              </button>
              
              <p className="text-center text-[10px] text-gray-400 font-medium">No immediate payment required</p>
            </div>

              {/* Gallery Preview */}
              {tour.galleryImages.length > 0 && (
                <div className="mt-8">
                  <h4 className="font-bold text-secondary mb-4">More Photos</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {tour.galleryImages.map((img, i) => (
                      <div 
                        key={i} 
                        className="aspect-video rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => setSelectedImage(i)}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      <BookingModal 
        tour={tour} 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </div>
  );
};

export default TourDetail;
