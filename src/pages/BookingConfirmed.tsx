import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaEnvelope, FaCalendar, FaUsers, FaMountain } from 'react-icons/fa';

const BookingConfirmed: React.FC = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl mx-auto bg-white rounded-3xl shadow-premium overflow-hidden border border-mint-50"
        >
          {/* Success Header */}
          <div className="bg-primary p-12 text-center relative overflow-hidden">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              className="relative z-10"
            >
              <FaCheckCircle className="text-secondary text-7xl mx-auto" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-secondary mt-6 relative z-10"
            >
              Expedition Booked!
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-secondary/60 mt-2 relative z-10 text-sm"
            >
              Get ready for the journey of a lifetime.
            </motion.p>
          </div>

          {/* Booking Details */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="p-8 md:p-12"
          >
            <div className="bg-mint-50/50 rounded-2xl p-6 mb-8 border border-mint-100">
              <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Booking Reference</h3>
              <p className="text-xl font-bold text-secondary">ETH-2026-{Math.random().toString(36).substr(2, 6).toUpperCase()}</p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-1">Tour</p>
                <p className="font-bold text-secondary text-sm">Simien Mountains</p>
              </div>
              <div>
                <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-1">Date</p>
                <p className="font-bold text-secondary text-sm">Sept 15, 2026</p>
              </div>
            </div>

            {/* Next Steps */}
            <div className="space-y-4 mb-10">
              <h3 className="font-bold text-secondary text-sm mb-4">Next Steps</h3>
              {[
                "Check your inbox for the confirmation email.",
                "Our team will reach out within 24 hours.",
                "Preparation guide will be sent 2 weeks before."
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3 text-xs text-gray-500">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-[10px] font-bold text-secondary flex-shrink-0">{i+1}</div>
                  <p>{step}</p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/tours" className="btn-primary flex-1 py-3 text-sm">
                More Tours
              </Link>
              <Link to="/" className="btn-outline flex-1 py-3 text-sm">
                Return Home
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BookingConfirmed;
