import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCalendarAlt, FaUserFriends, FaEnvelope, FaPhone, FaExclamationTriangle, FaCheck } from 'react-icons/fa';
import { Tour } from '../types/tour';

interface BookingModalProps {
  tour: Tour;
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ tour, isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    startDate: tour.availableDates[0]?.toISOString().split('T')[0] || '',
    adults: 1,
    children: 0,
    fullName: '',
    email: '',
    phone: '',
    emergencyContact: '',
    dietaryRestrictions: '',
    medicalRestrictions: '',
  });

  const totalPrice = (formData.adults * tour.basePrice) + (formData.children * tour.basePrice * 0.7);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(step + 1);
    } else {
      window.location.href = '/booking-confirmed';
      onClose();
    }
  };

  const handleClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-secondary/80 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-secondary transition-colors z-10 bg-white rounded-full p-2 shadow"
            >
              <FaTimes size={20} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* Sidebar */}
              <div className="md:col-span-2 bg-secondary p-8">
                <div className="mb-8">
                  <p className="text-primary font-bold text-xs uppercase tracking-widest mb-2">Booking for</p>
                  <h3 className="text-xl font-bold text-white">{tour.title}</h3>
                </div>

                <div className="space-y-4 text-white/80">
                  <div className="flex items-center gap-3 text-sm">
                    <FaCalendarAlt className="text-primary" />
                    <span>{new Date(formData.startDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <FaUserFriends className="text-primary" />
                    <span>{formData.adults} Adults{formData.children > 0 ? `, ${formData.children} Children` : ''}</span>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/20">
                  <p className="text-gray-400 text-xs uppercase font-bold mb-1">Estimated Total</p>
                  <p className="text-3xl font-bold text-white">${totalPrice.toLocaleString()}</p>
                </div>

                <div className="mt-6 space-y-2 text-xs text-gray-400">
                  <p className="flex items-center gap-2"><FaCheck className="text-primary" /> Free cancellation up to 30 days</p>
                  <p className="flex items-center gap-2"><FaCheck className="text-primary" /> No payment required today</p>
                </div>
              </div>

              {/* Form Content */}
              <div className="md:col-span-3 p-8">
                <div className="flex gap-2 mb-8">
                  <div className={`h-2 flex-grow rounded-full transition-colors ${step >= 1 ? 'bg-primary' : 'bg-gray-200'}`} />
                  <div className={`h-2 flex-grow rounded-full transition-colors ${step >= 2 ? 'bg-primary' : 'bg-gray-200'}`} />
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {step === 1 && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <h2 className="text-2xl font-bold text-secondary">Trip Details</h2>
                      
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Select Departure Date</label>
                        <select 
                          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none"
                          value={formData.startDate}
                          onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                        >
                          {tour.availableDates.map((date, i) => (
                            <option key={i} value={date.toISOString().split('T')[0]}>
                              {new Date(date).toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' })}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Adults (18+)</label>
                          <input 
                            type="number" 
                            min="1"
                            max={tour.maxGroupSize}
                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none text-center font-bold"
                            value={formData.adults}
                            onChange={(e) => setFormData({...formData, adults: parseInt(e.target.value) || 1})}
                          />
                          <p className="text-xs text-gray-500 mt-1 text-center">${tour.basePrice} each</p>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Children</label>
                          <input 
                            type="number" 
                            min="0"
                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none text-center font-bold"
                            value={formData.children}
                            onChange={(e) => setFormData({...formData, children: parseInt(e.target.value) || 0})}
                          />
                          <p className="text-xs text-gray-500 mt-1 text-center">${tour.basePrice * 0.7} each</p>
                        </div>
                      </div>

                      <div className="bg-amber-50 rounded-xl p-4 flex gap-3">
                        <FaExclamationTriangle className="text-amber-500 mt-1 flex-shrink-0" />
                        <p className="text-xs text-amber-800 leading-relaxed">
                          Group size limited to {tour.maxGroupSize} people per departure. {tour.maxGroupSize - formData.adults - formData.children} spots remaining.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <h2 className="text-2xl font-bold text-secondary">Your Information</h2>
                      
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                        <input 
                          type="text" 
                          placeholder="As shown on passport"
                          required
                          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none"
                          value={formData.fullName}
                          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                          <input 
                            type="email" 
                            placeholder="your@email.com"
                            required
                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Phone *</label>
                          <input 
                            type="tel" 
                            placeholder="+1 234 567 890"
                            required
                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Emergency Contact *</label>
                        <input 
                          type="text" 
                          placeholder="Name and phone number"
                          required
                          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none"
                          value={formData.emergencyContact}
                          onChange={(e) => setFormData({...formData, emergencyContact: e.target.value})}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Dietary Restrictions</label>
                        <input 
                          type="text" 
                          placeholder="Vegetarian, vegan, allergies, etc."
                          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none"
                          value={formData.dietaryRestrictions}
                          onChange={(e) => setFormData({...formData, dietaryRestrictions: e.target.value})}
                        />
                      </div>

                      <div className="p-4 bg-primary/10 rounded-xl border border-primary/20 flex gap-3">
                        <FaExclamationTriangle className="text-primary mt-1 flex-shrink-0" />
                        <p className="text-xs text-gray-700 leading-relaxed">
                          By confirming, you agree to our terms and confirm that all participants meet the fitness requirements: {tour.fitnessLevel}
                        </p>
                      </div>
                    </motion.div>
                  )}

                  <div className="pt-4 flex gap-3">
                    {step > 1 && (
                      <button 
                        type="button"
                        onClick={() => setStep(step - 1)}
                        className="px-6 py-3 border border-gray-200 text-secondary font-bold rounded-xl hover:bg-gray-50 transition-all"
                      >
                        Back
                      </button>
                    )}
                    <button 
                      type="submit"
                      className="flex-1 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
                    >
                      {step === 2 ? 'Confirm Booking' : 'Continue'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
