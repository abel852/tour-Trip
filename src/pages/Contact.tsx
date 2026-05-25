import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane, FaCheck } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] bg-secondary overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1523802510508-065010706fd5?q=80&w=2070" alt="Contact" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Get In Touch</h1>
              <p className="text-lg text-white/70 max-w-xl">We'd love to hear from you. Let's plan your adventure.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="accent-text">Contact Information</span>
              <h2 className="section-title">Start Your Journey</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  { icon: FaMapMarkerAlt, title: 'Visit Us', lines: ['Bole Road', 'Addis Ababa'] },
                  { icon: FaPhoneAlt, title: 'Call Us', lines: ['+251 911 22 33 44'] },
                  { icon: FaEnvelope, title: 'Email Us', lines: ['info@ethiotrek.com'] },
                  { icon: FaClock, title: 'Office Hours', lines: ['Mon-Sat, 8am-7pm'] },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-2xl bg-mint-50/30 border border-mint-50">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <item.icon className="text-mint-600 text-base" />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary text-sm mb-1">{item.title}</h4>
                      {item.lines.map((line, i) => <p key={i} className="text-gray-500 text-xs">{line}</p>)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-premium h-[350px] relative border border-mint-50">
                <iframe title="Office Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31528.8000!2d38.789!3d9.00!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850!2sBole%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1" width="100%" height="100%" allowFullScreen="" loading="lazy" className="border-0 grayscale opacity-80" />
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="bg-white rounded-[2rem] border border-mint-50 shadow-premium p-8 md:p-12">
                <h3 className="text-2xl font-bold text-secondary mb-8">Send Us a Message</h3>
                
                {isSubmitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                    <div className="w-16 h-16 bg-mint-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-mint-100">
                      <FaCheck className="text-mint-600 text-2xl" />
                    </div>
                    <h4 className="text-xl font-bold text-secondary mb-2">Message Sent!</h4>
                    <p className="text-gray-500 text-sm">We'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-6 py-4 rounded-xl bg-mint-50/30 border border-mint-100 text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm" placeholder="Full Name" />
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-6 py-4 rounded-xl bg-mint-50/30 border border-mint-100 text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm" placeholder="Email Address" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-6 py-4 rounded-xl bg-mint-50/30 border border-mint-100 text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm" placeholder="Phone Number" />
                      <select value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="w-full px-6 py-4 rounded-xl bg-mint-50/30 border border-mint-100 text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm appearance-none">
                        <option value="">Subject</option>
                        <option value="booking">Tour Booking</option>
                        <option value="custom">Custom Expedition</option>
                        <option value="group">Group Travel</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                    <textarea rows={5} required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-6 py-4 rounded-xl bg-mint-50/30 border border-mint-100 text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm resize-none" placeholder="How can we help?" />
                    <button type="submit" className="w-full btn-primary group">
                      <FaPaperPlane size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
