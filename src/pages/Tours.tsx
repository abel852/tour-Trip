import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFilter, FaSearch, FaRoute, FaClock, FaMountain, FaArrowRight, FaStar, FaCheck } from 'react-icons/fa';
import { tours } from '../data/content.ts';
import { DifficultyLevel } from '../types/tour.ts';

const Tours: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyLevel | 'All'>('All');
  const [durationFilter, setDurationFilter] = useState<'All' | 'Single' | 'Multi'>('All');
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'duration' | 'popular'>('popular');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredTours = tours
    .filter(tour => {
      const matchesSearch = tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDifficulty = difficultyFilter === 'All' || tour.difficulty === difficultyFilter;
      const matchesDuration = durationFilter === 'All' ||
        (durationFilter === 'Single' && tour.durationDays === 1) ||
        (durationFilter === 'Multi' && tour.durationDays > 1);
      return matchesSearch && matchesDifficulty && matchesDuration;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc': return a.basePrice - b.basePrice;
        case 'price-desc': return b.basePrice - a.basePrice;
        case 'duration': return a.durationDays - b.durationDays;
        default: return 0;
      }
    });

  const getDifficultyColor = (difficulty: DifficultyLevel) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500 text-white';
      case 'Moderate': return 'bg-yellow-500 text-secondary';
      case 'Strenuous': return 'bg-orange-500 text-white';
      case 'Technical': return 'bg-red-500 text-white';
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] bg-secondary overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070" 
            alt="Tours" 
            className="w-full h-full object-cover opacity-40" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Expeditions</h1>
              <p className="text-lg text-white/70 max-w-xl">Find your next challenge in the heart of Africa.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-[70px] z-30 bg-white/80 backdrop-blur-md border-b border-mint-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Search */}
            <div className="relative flex-grow max-w-md">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search expeditions..."
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-mint-50/50 border border-mint-100 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3">
              <select 
                className="px-4 py-3 rounded-xl bg-mint-50/50 border border-mint-100 focus:outline-none text-sm font-medium"
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value as any)}
              >
                <option value="All">All Difficulties</option>
                <option value="Easy">Easy</option>
                <option value="Moderate">Moderate</option>
                <option value="Strenuous">Strenuous</option>
                <option value="Technical">Technical</option>
              </select>

              <select 
                className="px-4 py-3 rounded-xl bg-mint-50/50 border border-mint-100 focus:outline-none text-sm font-medium"
                value={durationFilter}
                onChange={(e) => setDurationFilter(e.target.value as any)}
              >
                <option value="All">All Durations</option>
                <option value="Single">Single Day</option>
                <option value="Multi">Multi Day</option>
              </select>

              <select 
                className="px-4 py-3 rounded-xl bg-mint-50/50 border border-mint-100 focus:outline-none text-sm font-medium"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
              >
                <option value="popular">Most Popular</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="duration">Duration</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredTours.map((tour, index) => (
                <motion.div
                  key={tour.id}
                  layout
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: (index % 3) * 0.1 
                  }}
                  whileHover={{ y: -10 }}
                >
                  <Link to={`/tour/${tour.slug}`} className="card-premium group block h-full">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={tour.heroImage} 
                        alt={tour.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent opacity-60" />
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-secondary`}>
                          {tour.difficulty}
                        </span>
                      </div>
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <span className="bg-white text-secondary px-6 py-2 rounded-full font-bold text-sm shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          View Details
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-[10px] font-bold text-mint-600 uppercase tracking-widest mb-3">
                        <span className="flex items-center gap-1"><FaClock /> {tour.durationDays} Days</span>
                        <span className="flex items-center gap-1"><FaMountain /> {tour.maxElevationM}m</span>
                      </div>
                      <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary-dark transition-colors">
                        {tour.title}
                      </h3>
                      <p className="text-gray-500 text-xs mb-6 line-clamp-2 leading-relaxed">{tour.description}</p>
                      <div className="flex items-center justify-between border-t border-mint-50 pt-4 mt-auto">
                        <div>
                          <span className="text-gray-400 text-[10px] uppercase font-bold">From</span>
                          <p className="text-xl font-bold text-secondary">${tour.basePrice}</p>
                        </div>
                        <span className="text-mint-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                          Expedition Details <FaArrowRight size={12} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredTours.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300 mt-8"
            >
              <FaMountain className="text-gray-300 text-6xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-secondary mb-2">No tours match your filters</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search criteria</p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setDifficultyFilter('All');
                  setDurationFilter('All');
                }}
                className="px-6 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all"
              >
                Clear All Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Tours;
