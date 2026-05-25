import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCalendarAlt, FaUserFriends, FaEnvelope, FaPhone, FaExclamationTriangle } from 'react-icons/fa';
import { Tour } from '../types/tour';

interface BookingModalProps {
  tour: Tour;
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ tour, isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    startDate: tour.availableDates[0].toISOString().split('T')[0],
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
      // Final submission logic here
      alert('Booking request sent! Our team will contact you shortly.');
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-secondary/80 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-secondary transition-colors z-10"
            >
              <FaTimes size={24} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-5 h-full">
              {/* Sidebar */}
              <div className="md:col-span-2 bg-gray-50 p-8">
                <div className="mb-8">
                  <p className="text-primary font-bold text-xs uppercase tracking-widest mb-2">Booking for</p>
                  <h3 className="text-xl font-bold text-secondary">{tour.title}</h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <FaCalendarAlt className="text-primary" />
                    <span>{new Date(formData.startDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <FaUserFriends className="text-primary" />
                    <span>{formData.adults} Adults, {formData.children} Children</span>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <p className="text-gray-400 text-xs uppercase font-bold mb-1">Total Price</p>
                  <p className="text-3xl font-bold text-secondary">${totalPrice.toLocaleString()}</p>
                </div>
              </div>

              {/* Form Content */}
              <div className="md:col-span-3 p-8">
                <div className="flex gap-2 mb-8">
                  <div className={`h-1 flex-grow rounded-full ${step >= 1 ? 'bg-primary' : 'bg-gray-200'}`} />
                  <div className={`h-1 flex-grow rounded-full ${step >= 2 ? 'bg-primary' : 'bg-gray-200'}`} />
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {step === 1 && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <h2 className="text-2xl font-bold text-secondary mb-6">Trip Details</h2>
                      
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Select Date</label>
                        <select 
                          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none"
                          value={formData.startDate}
                          onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                        >
                          {tour.availableDates.map(date => (
                            <option key={date.toISOString()} value={date.toISOString().split('T')[0]}>
                              {date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Adults</label>
                          <input 
                            type="number" 
                            min="1"
                            max={tour.maxGroupSize}
                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none"
                            value={formData.adults}
                            onChange={(e) => setFormData({...formData, adults: parseInt(e.target.value)})}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Children</label>
                          <input 
                            type="number" 
                            min="0"
                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none"
                            value={formData.children}
                            onChange={(e) => setFormData({...formData, children: parseInt(e.target.value)})}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <h2 className="text-2xl font-bold text-secondary mb-6">Contact Info</h2>
                      
                      <div className="relative">
                        <input 
                          type="text" 
                          placeholder="Full Name"
                          required
                          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none"
                          value={formData.fullName}
                          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <input 
                          type="email" 
                          placeholder="Email"
                          required
                          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                        <input 
                          type="tel" 
                          placeholder="Phone"
                          required
                          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>

                      <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 flex gap-3">
                        <FaExclamationTriangle className="text-amber-500 mt-1 flex-shrink-0" />
                        <p className="text-xs text-amber-800 leading-relaxed">
                          By continuing, you confirm that all participants meet the fitness requirements for this trek.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  <div className="pt-6 flex gap-3">
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
                      className="flex-grow py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
                    >
                      {step === 2 ? 'Confirm Booking' : 'Next Step'}
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
