import { useState, useEffect } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ramesh Chandra',
      role: 'Senior Learner',
      feedback: "Prime Champion's instructors were incredibly patient and professional. I felt confident behind the wheel from day one!",
      img: '/pic1.png'
    },
    {
      name: 'Sunitha Reddy',
      role: 'Software Engineer',
      feedback: "The best driving school in town! Professional, affordable, and they make learning to drive extremely comfortable.",
      img: '/pic2.png'
    },
    {
      name: 'Karthik Sen',
      role: 'College Student',
      feedback: "I was nervous about driving, but Prime Champion made it easy and fun. Highly recommend to anyone learning to drive!",
      img: '/pic3.png'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');

  useEffect(() => {
    const timer = setInterval(() => {
      setFadeState('fade-out');
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setFadeState('fade-in');
      }, 150); // Wait for fade-out to complete before swapping content
    }, 3000); // Transition automatically every 3 seconds
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#fafafa] relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-brand-red/2 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Testimonials Header */}
        <div className="text-center mb-16">
          {/* <span className="text-brand-red text-sm font-extrabold uppercase tracking-widest bg-brand-red-light px-4 py-1.5 rounded-full">Testimonials</span> */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-4 font-display">What Our Students Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Don't just take our word for it. Hear from our satisfied, confident graduates.
          </p>
        </div>

        {/* Testimonial slider main split wrapper */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          
          {/* Left Column: Image with yellow backdrop teardrop shape */}
          <div className="w-full md:w-5/12 flex justify-center">
            <div 
              className={`relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] bg-[#f59e0b] rounded-tl-[100px] sm:rounded-tl-[140px] rounded-bl-[100px] sm:rounded-bl-[140px] rounded-br-[100px] sm:rounded-br-[140px] rounded-tr-none overflow-hidden shadow-xl border-4 border-white transition-all duration-300 transform ${
                fadeState === 'fade-in' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <img 
                src={testimonials[activeIndex].img} 
                alt={testimonials[activeIndex].name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Right Column: Quotes & Text details */}
          <div 
            className={`w-full md:w-7/12 relative text-left py-4 flex flex-col justify-center transition-all duration-300 transform ${
              fadeState === 'fade-in' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            
            {/* Big quote mark icon */}
            <div className="absolute -top-6 -left-4 text-gray-200/50 -z-10 select-none pointer-events-none">
              <svg className="w-20 h-20 fill-current" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.988zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z" />
              </svg>
            </div>
            
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-700 leading-relaxed italic mb-8 relative">
              "{testimonials[activeIndex].feedback}"
            </p>
            
            <p className="text-brand-red font-black italic text-2xl mb-1 tracking-wide font-display">champion</p>
            <p className="text-gray-500 font-semibold text-sm sm:text-base font-display">
              {testimonials[activeIndex].name} ({testimonials[activeIndex].role})
            </p>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
