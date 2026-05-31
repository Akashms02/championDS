import { Star, User } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Passed First Attempt',
      feedback: '"Champion\'s instructors were incredibly patient and professional. I felt confident behind the wheel from day one!"'
    },
    {
      name: 'Michael Chen',
      role: 'Certified Driver',
      feedback: '"The best driving school in town! Professional, affordable, and the instructors really care about your progress."'
    },
    {
      name: 'Emma Wilson',
      role: 'Confident Driver',
      feedback: '"I was nervous about driving, but Champion made it easy and fun. Highly recommend to anyone learning to drive!"'
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-brand-red/2 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-red text-sm font-extrabold uppercase tracking-widest bg-brand-red-light px-4 py-1.5 rounded-full">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-4 font-display">What Our Students Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Don't just take our word for it. Hear from our satisfied, confident graduates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50/50 border border-gray-100 p-6 md:p-8 rounded-2xl shadow-xs hover:shadow-xl hover:shadow-gray-200/50 hover:bg-white transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed text-sm md:text-base">
                {testimonial.feedback}
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md bg-gradient-to-br ${
                  index === 0 ? 'from-brand-red to-red-700' :
                  index === 1 ? 'from-gray-700 to-gray-900' :
                  'from-red-500 to-orange-500'
                }`}>
                  <User size={18} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 font-display">{testimonial.name}</p>
                  <p className="text-xs font-semibold text-brand-red uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
