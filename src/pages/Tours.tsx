import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { tours } from '../data/tours';
import { DifficultyLevel } from '../types/tour';
import { FaFilter, FaSearch, FaRoute, FaClock, FaMountain } from 'react-icons/fa';

const Tours: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyLevel | 'All'>('All');
  const [durationFilter, setDurationFilter] = useState<'All' | 'Single' | 'Multi'>('All');

  const filteredTours = tours.filter(tour => {
    const matchesSearch = tour.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty = difficultyFilter === 'All' || tour.difficulty === difficultyFilter;
    const matchesDuration = durationFilter === 'All' || 
      (durationFilter === 'Single' && tour.durationDays === 1) ||
      (durationFilter === 'Multi' && tour.durationDays > 1);
    
    return matchesSearch && matchesDifficulty && matchesDuration;
  });

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-secondary mb-4">All Expeditions</h1>
          <p className="text-gray-600">Discover your next challenge in the heart of nature.</p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <div className="flex items-center gap-2 mb-6 font-bold text-secondary">
                <FaFilter className="text-primary" />
                <span>Filters</span>
              </div>

              {/* Search */}
              <div className="mb-8">
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2 tracking-wider">Search</label>
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Where to?"
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Difficulty */}
              <div className="mb-8">
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2 tracking-wider">Difficulty</label>
                <div className="space-y-2">
                  {['All', 'Easy', 'Moderate', 'Strenuous', 'Technical'].map(level => (
                    <label key={level} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="radio" 
                        name="difficulty" 
                        className="w-4 h-4 text-primary focus:ring-primary"
                        checked={difficultyFilter === level}
                        onChange={() => setDifficultyFilter(level as any)}
                      />
                      <span className="text-gray-600 group-hover:text-secondary transition-colors">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Duration */}
              <div className="mb-8">
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2 tracking-wider">Duration</label>
                <div className="space-y-2">
                  {[
                    { label: 'All Durations', value: 'All' },
                    { label: 'Single Day', value: 'Single' },
                    { label: 'Multi Day', value: 'Multi' }
                  ].map(option => (
                    <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="radio" 
                        name="duration" 
                        className="w-4 h-4 text-primary focus:ring-primary"
                        checked={durationFilter === option.value}
                        onChange={() => setDurationFilter(option.value as any)}
                      />
                      <span className="text-gray-600 group-hover:text-secondary transition-colors">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => {
                  setSearchQuery('');
                  setDifficultyFilter('All');
                  setDurationFilter('All');
                }}
                className="w-full py-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          </aside>

          {/* Tour Grid */}
          <main className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredTours.map(tour => (
                <Link key={tour.id} to={`/tour/${tour.slug}`} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={tour.heroImage} 
                      alt={tour.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-secondary">
                      {tour.difficulty}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">{tour.title}</h3>
                    <p className="text-gray-500 text-sm mb-6 line-clamp-2">{tour.description}</p>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                      <div className="flex gap-4">
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <FaClock className="text-primary" />
                          <span>{tour.durationDays} Days</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <FaRoute className="text-primary" />
                          <span>{tour.distanceKm}km</span>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-secondary">
                        ${tour.basePrice}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredTours.length === 0 && (
              <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
                <p className="text-gray-400">No tours match your current filters.</p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setDifficultyFilter('All');
                    setDurationFilter('All');
                  }}
                  className="mt-4 text-primary font-bold"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Tours;
