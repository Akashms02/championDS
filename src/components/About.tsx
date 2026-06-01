import { useEffect, useState, useRef } from 'react';

export default function About() {
  const [progress, setProgress] = useState(0); // Holds raw scroll progress (0 to 1)
  const [roadProgress, setRoadProgress] = useState(0); // Holds raw scroll progress (0 to 1) for road
  const containerRef = useRef<HTMLDivElement>(null);
  const roadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      
      // 1. Calculate section scroll progress (for text word fade)
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const totalDistance = rect.height + viewportHeight;
        const currentDistance = viewportHeight - rect.top;
        const p = Math.max(0, Math.min(1, currentDistance / totalDistance));
        setProgress(p);
      }
      
      // 2. Calculate road scroll progress (for car driving)
      if (roadRef.current) {
        const rect = roadRef.current.getBoundingClientRect();
        const totalDistance = rect.height + viewportHeight;
        const currentDistance = viewportHeight - rect.top;
        const p = Math.max(0, Math.min(1, currentDistance / totalDistance));
        setRoadProgress(p);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    // Initial measurement
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Proportional progress calculations
  const carStartThreshold = 0.15;
  const carProgressVal = roadProgress < carStartThreshold 
    ? 0 
    : (roadProgress - carStartThreshold) / (1 - carStartThreshold);

  const textStartThreshold = 0.1;
  const textEndThreshold = 0.55;
  const textProgress = progress < textStartThreshold
    ? 0
    : progress > textEndThreshold
      ? 1
      : (progress - textStartThreshold) / (textEndThreshold - textStartThreshold);

  // Paragraph Text Splits for Scroll Word-by-Word Animation
  const paragraph1 = "At Prime Champion, We've Been Helping Learners Become Confident, Responsible, And Skilled Drivers For Over A Decade. Our Mission Is To Provide High-Quality Driver Education That Prioritizes Safety, Confidence, And Lifelong Driving Skills.";
  const paragraph2 = "Whether You're A Complete Beginner Or Looking To Refine Your Driving Abilities, Our Expert Team Is Dedicated To Guiding You Every Step Of The Way Toward Becoming A Safe And Confident Driver.";

  const words1 = paragraph1.split(" ");
  const words2 = paragraph2.split(" ");
  const totalWords = words1.length + words2.length;

  const renderWords = (words: string[], startIndex: number) => {
    return words.map((word, idx) => {
      const globalIdx = startIndex + idx;
      
      // Distribute words evenly across the textProgress (0 to 1) range
      const startVal = globalIdx / totalWords;
      const endVal = Math.min(1, (globalIdx + 3) / totalWords); // Overlap slightly for smooth transition
      
      let opacity = 0.15; // Dimmed base state
      if (textProgress > startVal) {
        const factor = (textProgress - startVal) / (endVal - startVal);
        opacity = 0.15 + 0.85 * Math.min(1, factor);
      }
      
      return (
        <span 
          key={globalIdx} 
          className="inline transition-opacity duration-200"
          style={{ opacity }}
        >
          {word}{" "}
        </span>
      );
    });
  };

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative w-full flex flex-col md:flex-row bg-white overflow-hidden min-h-[550px] md:h-[650px] lg:h-[750px] xl:h-[800px]"
    >
      {/* Left Column: Content Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center py-16 md:py-0 px-8 sm:px-16 lg:px-24 xl:px-32 z-10">
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 font-display uppercase text-left select-none"
          style={{ letterSpacing: '1px' }}
        >
          About Us
        </h2>
        
        <div className="space-y-6 text-gray-700 font-medium text-sm sm:text-base md:text-lg leading-relaxed max-w-xl text-left">
          <p>
            {renderWords(words1, 0)}
          </p>
          <p>
            {renderWords(words2, words1.length)}
          </p>
        </div>
      </div>

      {/* Right Column: Interactive Road Visualization */}
      <div ref={roadRef} className="w-full md:w-1/2 relative h-[450px] sm:h-[500px] md:h-full bg-[#ffffff] flex items-center justify-center overflow-hidden border-t md:border-t-0 md:border-l border-gray-100">
        
        {/* Road Container - Big Road matching reference */}
        <div className="w-[85%] md:w-[80%] lg:w-[75%] h-full bg-[#fafafa] relative border-l border-r border-[#e5e7eb] flex justify-center shadow-[inset_0_0_20px_rgba(0,0,0,0.01)]">
          
          {/* Center Blue Lane Line */}
          <div className="w-5 md:w-6 bg-[#60a5fa] h-full flex items-center justify-center relative">
            
            {/* GPS Cursor Indicator */}
            <div className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center shadow-lg shadow-blue-500/20 animate-pulse z-10">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3L4 21L12 17L20 21L12 3Z" />
              </svg>
            </div>
            
          </div>

          {/* Top-Down Car Asset */}
          <div 
            className="absolute z-20"
            style={{ 
              top: `${100 - carProgressVal * 130}%`, 
              left: '50%', 
              transform: 'translate(-50%, -50%)',
              width: 'clamp(140px, 45%, 320px)',
              transition: 'top 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <img 
              src="/cartop.svg" 
              alt="Champion Driving School Training Vehicle Top View" 
              className="w-full h-auto drop-shadow-[0_20px_25px_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
