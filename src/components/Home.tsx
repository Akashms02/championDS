import { useState, useEffect } from 'react';
import { CheckCircle, Zap } from 'lucide-react';
import '../styles/animations.css';
import heroCar1 from '../assets/hero_car.png';
import heroCar2 from '../assets/hero_car_2.png';
import heroCar3 from '../assets/hero_car_3.png';

export default function Home() {
  const fleet = [
    { id: 0, label: 'Tesla Model 3', desc: 'Active Practice Vehicle', img: heroCar1 },
    { id: 1, label: 'Volkswagen Polo', desc: 'City Street Practice', img: heroCar2 },
    { id: 2, label: 'Toyota Corolla', desc: 'Official RTO Track Prep', img: heroCar3 }
  ];

  const [activeId, setActiveId] = useState(0);
  const [showSideCards, setShowSideCards] = useState(false);

  useEffect(() => {
    // 1 second after component mounts, side cards smoothly slide/fan out
    const timer = setTimeout(() => {
      setShowSideCards(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const getCardPositionStyles = (index: number) => {
    const transitionClass = "transition-all duration-500 ease-out";

    if (index === activeId) {
      // Center Active Card
      return {
        classes: `relative w-56 h-56 md:w-72 md:h-72 rounded-[32px] md:rounded-[40px] overflow-hidden border-8 border-white shadow-2xl bg-white transform hover:-translate-y-3 hover:scale-[1.03] ${transitionClass} z-30 cursor-default`,
        isActive: true,
        labelStyle: "absolute bottom-0 inset-x-0 bg-slate-950/75 backdrop-blur-xs text-white p-3 text-center text-xs font-bold leading-tight"
      };
    } else if (index === (activeId + 1) % 3) {
      // Right Swapped Behind Card
      return {
        classes: `absolute w-48 h-48 md:w-60 md:h-60 rounded-2xl overflow-hidden border-4 border-white shadow-lg bg-white transform ${transitionClass} cursor-pointer hover:-translate-y-2 hover:opacity-100 hover:scale-[0.97] hover:z-25 ${
          showSideCards 
            ? 'translate-x-28 rotate-12 scale-95 opacity-85 z-20 pointer-events-auto' 
            : 'translate-x-0 rotate-0 scale-95 opacity-0 z-0 pointer-events-none'
        }`,
        isActive: false,
        labelStyle: "absolute bottom-0 inset-x-0 bg-slate-950/70 backdrop-blur-xs text-white p-2 text-center text-[10px] font-bold"
      };
    } else {
      // Left Swapped Behind Card
      return {
        classes: `absolute w-48 h-48 md:w-60 md:h-60 rounded-2xl overflow-hidden border-4 border-white shadow-lg bg-white transform ${transitionClass} cursor-pointer hover:-translate-y-2 hover:opacity-100 hover:scale-[0.97] hover:z-25 ${
          showSideCards 
            ? '-translate-x-28 -rotate-12 scale-95 opacity-85 z-20 pointer-events-auto' 
            : '-translate-x-0 -rotate-0 scale-95 opacity-0 z-0 pointer-events-none'
        }`,
        isActive: false,
        labelStyle: "absolute bottom-0 inset-x-0 bg-slate-950/70 backdrop-blur-xs text-white p-2 text-center text-[10px] font-bold"
      };
    }
  };

  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-linear-to-br from-slate-50 via-slate-100/50 to-blue-50/70 relative overflow-hidden">
      {/* Subtle Professional Dotted Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60"></div>

      {/* Soft Light Spotlights */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 left-10 w-[400px] h-[400px] bg-blue-100/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Animated Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight animate-fade-in-down">
              Master the Road with <span className="text-blue-600 inline-block animate-pulse">Prime Champion</span>
            </h1>

            {/* Animated Subtitle */}
            <p className="text-lg text-slate-600 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Professional driving school with expert instructors. Learn safe, confident driving skills from experienced professionals.
            </p>

            {/* Animated Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold transform hover:scale-105 duration-300 shadow-lg shadow-blue-600/10 flex items-center justify-center gap-2">
                <Zap size={20} />
                Start Your Journey
              </button>
              <button className="border border-slate-200 bg-white text-slate-700 px-8 py-3 rounded-lg hover:bg-slate-50 transition font-semibold transform hover:scale-105 duration-300 shadow-xs">
                Learn More
              </button>
            </div>

            {/* Animated Feature */}
            <div className="flex items-center gap-4 text-slate-600 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <CheckCircle className="w-5 h-5 text-green-500 animate-bounce" />
              <span>Certified Instructors with 10+ years experience</span>
            </div>
          </div>

          {/* Right Column: Premium Interactive Fleet Swapping Deck */}
          <div className="relative w-full max-w-lg mx-auto md:max-w-none md:mx-0 mt-12 md:mt-0">
            <div className="relative flex items-center justify-center min-h-[340px] md:min-h-[420px] w-full">
              
              {/* Soft decorative background blurs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl -z-20"></div>

              {fleet.map((car, index) => {
                const { classes, isActive, labelStyle } = getCardPositionStyles(index);
                return (
                  <div
                    key={car.id}
                    className={`${classes} ${isActive ? 'animate-fade-in-up' : ''}`}
                    style={isActive ? { animationDelay: '0.4s' } : undefined}
                    onClick={() => !isActive && setActiveId(index)}
                  >
                    <img
                      src={car.img}
                      alt={car.label}
                      className="w-full h-full object-cover"
                    />
                    <div className={labelStyle}>
                      {isActive ? (
                        <>
                          <p className="text-amber-400 text-[9px] uppercase tracking-wider font-extrabold">{car.desc}</p>
                          <p className="text-slate-100">{car.label}</p>
                        </>
                      ) : (
                        <span>{car.label}</span>
                      )}
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
