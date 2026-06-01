import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

const EMAILJS_SERVICE_ID = 'service_xeh703b';
const EMAILJS_TEMPLATE_ID = 'template_1b57kwy';
const EMAILJS_PUBLIC_KEY = '6vNEy9QyiyaF2P68r';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const url = 'https://api.emailjs.com/api/v1.0/email/send';
    const payload = {
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_PUBLIC_KEY,
      template_params: {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        const text = await response.text();
        console.error('EmailJS Error:', text);
        setStatus('error');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#fafafa] relative overflow-hidden">
      {/* Decorative layout accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-red/2 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-red/3 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Modern Centered Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <span className="text-brand-red text-sm font-extrabold uppercase tracking-widest bg-brand-red-light px-4 py-1.5 rounded-full shadow-xs">
            Connect With Us
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-4 font-display">
            Start Your Driving Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Have questions about pricing, schedule, or license prep? Reach out and we'll reply shortly.
          </p>
        </div>

        {/* Premium Integrated Split Contact Card (Responsive grid layout) */}
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 animate-scale-in">
          
          {/* Left Side: Dark Info Panel */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Glowing effect inside card */}
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-brand-red/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-brand-red/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold font-display tracking-tight text-white mb-2">
                  Contact Information
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  Find our official training center or connect with our support desk directly.
                </p>
              </div>

              {/* Direct Info list with sleek micro-interactions */}
              <div className="space-y-6">
                <a 
                  href="tel:+919963932158" 
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center shrink-0 border border-slate-700/50 group-hover:bg-brand-red transition duration-300">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-450 uppercase tracking-wider">Call Us</p>
                    <p className="text-sm md:text-base font-semibold group-hover:text-brand-red transition">+91 99639 32158</p>
                  </div>
                </a>

                <a 
                  href="mailto:nitheeshreddyv@gmail.com" 
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center shrink-0 border border-slate-700/50 group-hover:bg-brand-red transition duration-300">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-450 uppercase tracking-wider">Email Us</p>
                    <p className="text-sm md:text-base font-semibold group-hover:text-brand-red transition break-all">nitheeshreddyv@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center shrink-0 border border-slate-700/50">
                    <Clock size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-450 uppercase tracking-wider">Hours</p>
                    <p className="text-sm md:text-base font-semibold">6:00 AM - 8:30 PM</p>
                    <p className="text-xs text-gray-400">Monday - Saturday (Sunday Closed)</p>
                  </div>
                </div>

                <a 
                  href="https://maps.google.com/?q=2nd+Floor,+No+712,+Modi+Hospital+Rd,+Mahalakshmi+Puram,+Stage+2,+Nagapura,+Bengaluru,+560086"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center shrink-0 border border-slate-700/50 group-hover:bg-brand-red transition duration-300">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-450 uppercase tracking-wider">Main Branch</p>
                    <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-medium group-hover:text-white transition">
                      2nd Floor, No 712, Modi Hospital Rd, Mahalakshmi Puram, Stage 2, Nagapura, Bengaluru, 560086
                    </p>
                    <span className="text-[10px] font-bold text-brand-red group-hover:underline flex items-center gap-1 mt-1">
                      Open in Google Maps <ArrowRight size={10} />
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Micro-Brand watermark on bottom */}
            <div className="mt-12 pt-6 border-t border-slate-800/80 text-xs text-gray-500 font-semibold relative z-10 flex justify-between items-center">
              <span>Prime Champion Drive Academy</span>
              <span className="w-2 h-2 rounded-full bg-brand-red animate-ping"></span>
            </div>
          </div>

          {/* Right Side: Form Panel */}
          <div className="lg:col-span-7 p-8 md:p-12 bg-gray-50/50 flex flex-col justify-center">
            {status === 'success' && (
              <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm font-semibold flex items-center gap-2.5 animate-scale-in">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                Message sent successfully! We will get back to you shortly.
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm font-semibold flex items-center gap-2.5 animate-scale-in">
                <span className="w-2.5 h-2.5 rounded-full bg-red-550"></span>
                Could not send email. Please check your credentials or try again later.
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 bg-white transition duration-200 font-semibold text-gray-800 placeholder-gray-400 shadow-2xs"
                    required
                    disabled={status === 'sending'}
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 bg-white transition duration-200 font-semibold text-gray-800 placeholder-gray-400 shadow-2xs"
                    required
                    disabled={status === 'sending'}
                  />
                </div>
              </div>
              
              <div className="relative">
                <input 
                  type="text" 
                  name="phone"
                  placeholder="Phone Number" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 bg-white transition duration-200 font-semibold text-gray-800 placeholder-gray-400 shadow-2xs"
                  disabled={status === 'sending'}
                />
              </div>

              <div className="relative">
                <textarea 
                  name="message"
                  placeholder="Tell us about your requirements..." 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 bg-white transition duration-200 font-semibold text-gray-800 placeholder-gray-400 shadow-2xs resize-none"
                  required
                  disabled={status === 'sending'}
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full bg-brand-red text-white px-6 py-4 rounded-full hover:bg-brand-red-hover disabled:bg-brand-red/45 disabled:cursor-not-allowed transition duration-300 font-bold shadow-lg shadow-brand-red/10 hover:shadow-xl hover:shadow-brand-red/25 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer text-base"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Sending Message...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
