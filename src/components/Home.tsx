import { Car, CheckCircle, Zap } from 'lucide-react';
import '../styles/animations.css';

export default function Home() {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-linear-to-br from-blue-50 to-blue-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Animated Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-down">
              Master the Road with <span className="text-blue-600 inline-block animate-pulse">Champion</span>
            </h1>

            {/* Animated Subtitle */}
            <p className="text-lg text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Professional driving school with expert instructors. Learn safe, confident driving skills from experienced professionals.
            </p>

            {/* Animated Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold transform hover:scale-105 duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <Zap size={20} />
                Start Your Journey
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition font-semibold transform hover:scale-105 duration-300">
                Learn More
              </button>
            </div>

            {/* Animated Feature */}
            <div className="flex items-center gap-4 text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <CheckCircle className="w-5 h-5 text-green-500 animate-bounce" />
              <span>Certified Instructors with 10+ years experience</span>
            </div>
          </div>

          {/* Right Image with Floating Animation */}
          <div className="hidden md:block">
            <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-lg w-full h-96 flex items-center justify-center shadow-2xl transform animate-float">
              <div className="relative">
                <Car className="w-48 h-48 text-white opacity-90 animate-pulse" />
                {/* Decorative Elements */}
                <div className="absolute top-10 -left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-spin-slow"></div>
                <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
