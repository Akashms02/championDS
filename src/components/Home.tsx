import { useEffect, useState } from 'react';
import '../styles/animations.css';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen md:h-screen md:min-h-[750px] lg:min-h-[850px] bg-[#fafafa] overflow-hidden pt-28 pb-12 md:pt-3 flex flex-col justify-between"
    >
      {/* Background Accent Grid / Spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-40 -z-10"></div>
      
      {/* Container holding all elements */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full h-full flex flex-col justify-between relative flex-1">
        
        {/* Mobile & Desktop Main Heading - Title case matching reference */}
        <div className="w-full mt-4 md:mt-0 md:absolute md:top-24 lg:top-28 xl:top-24 md:left-6 lg:left-0 xl:left-[-80px] z-20 animate-slide-in-left">
          <h1 
            className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl leading-tight text-left select-none"
            style={{ letterSpacing: '1px' }}
          >
            <span className="text-gray-800 block">Prime</span>
            <span className="text-brand-red block mt-1">Champion Drive</span>
            <span className="text-gray-800 block mt-1">Academy</span>
          </h1>
        </div>

        {/* Center Showcase - Circle backdrop and Red Car */}
        <div className="relative my-8 md:my-0 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-[45%] flex flex-col items-center justify-center z-10 w-full md:w-auto">
          {isLoaded && (
            <>
              {/* White Circle Backdrop - Restored original desktop sizes with mobile scaling */}
              <div 
                className="w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] xl:w-[620px] xl:h-[620px] rounded-full bg-[#FAFAFA] opacity-95 shadow-[0_8px_40px_rgba(0,0,0,0.01)] transition-all duration-700 animate-scale-in"
              >
                {/* Nested div to apply pulse so scale-in finishes cleanly */}
                <div className="w-full h-full rounded-full bg-white animate-pulse-slow"></div>
              </div>
              
              {/* Red Car Image Wrapper - Restored original desktop widths, cleared max-width restriction for desktop */}
              <div className="absolute w-[85vw] max-w-[340px] sm:max-w-none sm:w-[420px] md:w-[550px] lg:w-[680px] xl:w-[780px] z-10 animate-drive-in pointer-events-auto">
                <img 
                  src="/car.svg" 
                  alt="Prime Champion Drive Academy Training Vehicle" 
                  className="w-full h-auto object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.12)] hover:-translate-y-2.5 transition-transform duration-500 cursor-pointer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/logo.svg';
                  }}
                />
                
                {/* Realistic Road Shadow underneath the car */}
                <div 
                  className="absolute bottom-1.5 md:bottom-2 left-1/2 -translate-x-1/2 w-[85%] h-[12px] md:h-[18px] bg-black/10 rounded-full blur-xs md:blur-sm -z-10 animate-shadow-scale"
                  style={{ transformOrigin: 'center' }}
                ></div>
              </div>
            </>
          )}
        </div>

        {/* Right Side Badges - Driving & License */}
        {/* On mobile, they sit nicely in a row below the car. On desktop, they sit absolute at stair-step positions */}
        <div className="w-full md:w-auto flex justify-start gap-8 md:gap-0 md:block mt-6 md:mt-0 z-20">
          
          {/* Driving Badge */}
          {/* <div className="md:absolute md:top-[30%] md:right-8 lg:right-[-20px] xl:right-[-40px] flex items-center gap-3 group cursor-pointer select-none animate-slide-in-right">
            <div className="p-2 rounded-xl bg-white/40 backdrop-blur-xs shadow-[0_4px_12px_rgba(0,0,0,0.02)] border border-white/40 group-hover:bg-white group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.05)] transition-all duration-300">
              <svg className="w-8 h-8 md:w-9 md:h-9 text-gray-700 transition-transform duration-700 group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="2.5" />
                <line x1="12" y1="3" x2="12" y2="9.5" />
                <line x1="4.2" y1="16.5" x2="10.2" y2="13.5" />
                <line x1="19.8" y1="16.5" x2="13.8" y2="13.5" />
              </svg>
            </div>
            <span className="font-display font-bold text-lg md:text-xl lg:text-2xl text-gray-700 group-hover:text-brand-red transition-colors duration-300">
              Driving
            </span>
          </div> */}

          {/* License Badge */}
          <div 
            className="md:absolute md:top-[22%] lg:top-[26%] xl:top-[30%] md:right-6 lg:right-2 xl:right-[-20px] flex items-center gap-3 group cursor-pointer select-none animate-slide-in-right"
            style={{ animationDelay: '0.15s' }}
          >
            <div className="p-2 rounded-xl bg-white/40 backdrop-blur-xs shadow-[0_4px_12px_rgba(0,0,0,0.02)] border border-white/40 group-hover:bg-white group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.05)] transition-all duration-300">
              <svg className="w-8 h-8 md:w-9 md:h-9 text-gray-700 transition-all duration-500 group-hover:scale-105 group-hover:-rotate-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <circle cx="7" cy="11" r="2.2" />
                <path d="M4 16.2c0-1.2 1.2-2.2 3-2.2s3 1 3 2.2" />
                <line x1="13" y1="9" x2="19" y2="9" strokeWidth="1.8" />
                <line x1="13" y1="12" x2="19" y2="12" strokeWidth="1.8" />
                <line x1="13" y1="15" x2="17" y2="15" strokeWidth="1.8" />
              </svg>
            </div>
            <span className="font-display font-bold text-lg md:text-xl lg:text-2xl text-gray-700 group-hover:text-brand-red transition-colors duration-300">
              License
            </span>
          </div>

        </div>

        {/* Bottom Elements: Class duration (left) & Paragraph (right) */}
        <div className="w-full flex flex-col md:block mt-8 md:mt-0 z-20">
          
          {/* Bottom Left - Class Duration */}
          <div className="md:absolute md:bottom-12 lg:bottom-16 xl:bottom-22 md:left-6 lg:left-0 xl:left-[-80px] font-display font-extrabold text-xl md:text-2xl lg:text-3xl text-gray-800 animate-fade-in-up">
            Class : <span className="text-brand-red">10 Days</span>
          </div>

          {/* Bottom Right - Description paragraph (clamped max-width on smaller screens to prevent collision) */}
          <div className="mt-4 md:mt-0 md:absolute md:bottom-12 lg:bottom-16 xl:bottom-22 md:right-6 lg:right-0 xl:right-[-40px] md:max-w-[280px] lg:max-w-[340px] xl:max-w-[420px] text-left text-gray-600 text-sm md:text-base lg:text-lg font-medium leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="w-full">
              Professional Driving School With Expert Instructors Learn Safe, Confident Driving Skills From Experienced Professionals
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
