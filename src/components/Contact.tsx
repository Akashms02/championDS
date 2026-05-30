import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

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
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your driving journey? Contact us today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info 1 */}
          <div className="bg-blue-50 p-8 rounded-lg text-center">
            <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600">+91 99639 32158</p>
          </div>

          {/* Contact Info 2 */}
          <div className="bg-blue-50 p-8 rounded-lg text-center">
            <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">nitheeshreddyv@gmail.com</p>
          </div>

          {/* Contact Info 3 */}
          <div className="bg-blue-50 p-8 rounded-lg text-center">
            <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              2nd Floor, No 712, Modi Hospital Rd, Mahalakshmi Puram, West of Chord Road, Stage 2, Nagapura, Bengaluru, Karnataka 560086
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-8 md:p-12 rounded-lg max-w-2xl mx-auto shadow-xs border border-gray-100">
          {status === 'success' && (
            <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Thank you! Your message has been sent successfully. We will get back to you shortly.
            </div>
          )}

          {status === 'error' && (
            <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              Could not send email. Please ensure your EmailJS credentials are correct in Contact.tsx.
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 bg-white"
                required
                disabled={status === 'sending'}
              />
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 bg-white"
                required
                disabled={status === 'sending'}
              />
            </div>
            <input 
              type="text" 
              name="phone"
              placeholder="Phone Number" 
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 bg-white"
              disabled={status === 'sending'}
            />
            <textarea 
              name="message"
              placeholder="Message" 
              rows={5} 
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 bg-white resize-none"
              required
              disabled={status === 'sending'}
            ></textarea>
            <button 
              type="submit" 
              disabled={status === 'sending'}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition font-semibold transform hover:scale-[1.01] active:scale-[0.99] duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              {status === 'sending' ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Sending Message...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
