import { useEffect, useState } from 'react';
import { Zap, CheckCircle2 } from 'lucide-react';
import '../styles/animations.css';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative pt-16 pb-8 md:pt-18 md:pb-12 bg-white overflow-hidden flex flex-col items-center justify-center h-screen min-h-[650px] sm:min-h-[750px] md:min-h-[850px]"
    >
      {/* Background Accent Grid / Spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(#f3f4f6_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-75 -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[300px] md:h-[400px] bg-brand-red/5 rounded-full blur-3xl -z-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center h-full">
        
        {/* Giant Title - Red, bold, Outfit font, match reference */}
        <h1 
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-brand-red tracking-tight leading-none uppercase font-display animate-text-glow select-none"
          style={{ 
            fontFamily: 'var(--font-display)',
            textShadow: '0 4px 20px rgba(222, 29, 38, 0.08)'
          }}
        >
          Champion Driving School
        </h1>

        {/* Premium Interactive Car Vector Showcase with Drive-In Animation */}
        <div className="relative w-full max-w-4xl mx-auto my-4 md:my-6 flex flex-col items-center justify-center min-h-[180px] sm:min-h-[260px] md:min-h-[320px]">
          {isLoaded && (
            <>
              {/* The Car SVG Container */}
              <div className="relative w-full z-10 animate-drive-in pointer-events-none select-none">
                <img 
                  src="/car.svg" 
                  alt="Champion Driving School Training Vehicle" 
                  className="w-full max-h-[200px] sm:max-h-[300px] md:max-h-[360px] object-contain mx-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)]"
                  onError={(e) => {
                    // Fallback to logo.svg or another car asset if needed
                    (e.target as HTMLImageElement).src = '/logo.svg';
                  }}
                />
              </div>

              {/* Realistic Road Shadow underneath the car */}
              <div 
                className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 w-[75%] h-[20px] sm:h-[30px] bg-radial from-black/25 via-black/8 to-transparent rounded-full blur-xs sm:blur-sm z-0 animate-shadow-scale"
                style={{ transformOrigin: 'center' }}
              ></div>
            </>
          )}
        </div>

        {/* Subtitle - Exact copy from reference image, styled elegantly */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed mb-6 md:mb-8 px-4 animate-fade-in-up">
          Professional Driving School With Expert Instructors. Learn Safe, Confident Driving Skills From Experienced Professionals.
        </p>

        {/* Premium Buttons matching the red theme */}
        <div 
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 justify-center items-center animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          <a 
            href="#contact"
            className="w-full sm:w-auto bg-brand-red text-white px-6 py-3 rounded-full hover:bg-brand-red-hover transition-all duration-300 font-bold text-sm sm:text-base shadow-lg shadow-brand-red/25 hover:shadow-xl hover:shadow-brand-red/35 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Zap size={16} className="fill-white group-hover:scale-110 transition-transform" />
            Start Your Journey
          </a>
          
          <a 
            href="#pricing"
            className="w-full sm:w-auto border-2 border-gray-200 bg-white text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 hover:border-gray-300 hover:text-brand-red transition-all duration-300 font-bold text-sm sm:text-base shadow-xs transform hover:-translate-y-0.5 flex items-center justify-center cursor-pointer"
          >
            Explore Pricing
          </a>
        </div>

        {/* Subtle trust badge below CTA */}
        <div 
          className="flex items-center gap-2 mt-4 md:mt-6 text-sm text-gray-500 font-medium animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <CheckCircle2 size={16} className="text-brand-red animate-pulse" />
          <span>Government Certified RTO Training Partner</span>
        </div>

      </div>
    </section>
  );
}
