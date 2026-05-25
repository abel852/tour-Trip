import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { tours } from '../data/tours';
import { FaRoute, FaMountain, FaClock, FaUsers, FaChevronDown, FaCheck, FaTimes } from 'react-icons/fa';
import BookingModal from '../components/BookingModal';

const TourDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const tour = tours.find(t => t.slug === slug);
  const [expandedDay, setExpandedDay] = useState<number | null>(1);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  if (!tour) {
    return <div className="min-h-screen flex items-center justify-center">Tour not found</div>;
  }

  return (
    <div className="bg-white">
      {/* Hero Grid Section */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={tour.heroImage} 
            alt={tour.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="absolute inset-0 flex flex-col justify-end pb-12">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">{tour.title}</h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">{tour.description}</p>
              
              {/* Quick Facts Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                <div className="flex items-center gap-3 text-white">
                  <FaRoute className="text-primary text-2xl" />
                  <div>
                    <p className="text-xs uppercase tracking-wider opacity-70">Distance</p>
                    <p className="font-bold">{tour.distanceKm} km</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <FaMountain className="text-primary text-2xl" />
                  <div>
                    <p className="text-xs uppercase tracking-wider opacity-70">Max Elev.</p>
                    <p className="font-bold">{tour.maxElevationM} m</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <FaClock className="text-primary text-2xl" />
                  <div>
                    <p className="text-xs uppercase tracking-wider opacity-70">Duration</p>
                    <p className="font-bold">{tour.durationDays} Days</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <FaUsers className="text-primary text-2xl" />
                  <div>
                    <p className="text-xs uppercase tracking-wider opacity-70">Group Size</p>
                    <p className="font-bold">Up to {tour.maxGroupSize}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{tour.longDescription}</p>
            </div>

            {/* Animated Itinerary Timeline */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Itinerary</h2>
              <div className="space-y-4">
                {tour.itinerary.map((item) => (
                  <div key={item.id} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                    <button 
                      onClick={() => setExpandedDay(expandedDay === item.day ? null : item.day)}
                      className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                          {item.day}
                        </span>
                        <span className="text-xl font-semibold text-secondary">{item.title}</span>
                      </div>
                      <FaChevronDown className={`transition-transform duration-300 ${expandedDay === item.day ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {expandedDay === item.day && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="p-6 pt-0 border-t border-gray-100">
                            <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                              {item.accommodation && (
                                <div>
                                  <p className="text-xs uppercase font-bold text-gray-400 mb-1">Accommodation</p>
                                  <p className="text-secondary">{item.accommodation}</p>
                                </div>
                              )}
                              <div>
                                <p className="text-xs uppercase font-bold text-gray-400 mb-1">Meals</p>
                                <p className="text-secondary">{item.meals.join(', ')}</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Gear Vault Component */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Gear Vault</h2>
              <div className="bg-secondary p-8 rounded-2xl text-white">
                <p className="text-gray-400 mb-8">Essential packing list for this adventure.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {['Required Gear', 'Recommended Clothing', 'Personal Items'].map(category => (
                    <div key={category}>
                      <h3 className="text-primary font-bold mb-4 uppercase text-sm tracking-widest">{category}</h3>
                      <ul className="space-y-3">
                        {tour.packingList.filter(item => item.category === category).map(item => (
                          <li key={item.name} className="flex items-center gap-3">
                            <div className="w-5 h-5 border border-white/20 rounded flex items-center justify-center">
                              {item.included && <FaCheck className="text-primary text-xs" />}
                            </div>
                            <span className="text-gray-300">{item.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
                <div className="p-6 bg-secondary text-white">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-3xl font-bold">${tour.basePrice}</span>
                    <span className="text-gray-400">per person</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div className="p-3 border border-gray-200 rounded-lg">
                      <p className="text-xs font-bold text-gray-400 uppercase mb-1">Next Departure</p>
                      <p className="font-semibold">{tour.availableDates[0].toLocaleDateString()}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 border border-gray-200 rounded-lg">
                        <p className="text-xs font-bold text-gray-400 uppercase mb-1">Adults</p>
                        <select className="w-full bg-transparent font-semibold focus:outline-none">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4+</option>
                        </select>
                      </div>
                      <div className="p-3 border border-gray-200 rounded-lg">
                        <p className="text-xs font-bold text-gray-400 uppercase mb-1">Children</p>
                        <select className="w-full bg-transparent font-semibold focus:outline-none">
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                  >
                    Book Now
                  </button>
                  <p className="text-center text-gray-400 text-sm mt-4 italic">No payment required yet</p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h3 className="font-bold mb-4">Safety & Requirements</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex gap-3">
                    <FaCheck className="text-primary mt-1" />
                    <p><span className="font-bold">Fitness:</span> {tour.fitnessLevel}</p>
                  </div>
                  {tour.acclimatizationNotes && (
                    <div className="flex gap-3">
                      <FaCheck className="text-primary mt-1" />
                      <p><span className="font-bold">Acclimatization:</span> {tour.acclimatizationNotes}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
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
