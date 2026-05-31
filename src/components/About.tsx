import { Award, Car, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative accent background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-red/2 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-red/2 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-red text-sm font-extrabold uppercase tracking-widest bg-brand-red-light px-4 py-1.5 rounded-full">Why Choose Us</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-4 font-display">About Prime Champion</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            We've been helping students become confident, safe, and elite drivers for over a decade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-50/50 border border-gray-100 p-8 rounded-2xl hover:shadow-xl hover:shadow-gray-200/50 hover:bg-white transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-brand-red-light rounded-xl flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-brand-red" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Expert Instructors</h3>
            <p className="text-gray-600 leading-relaxed">
              All our instructors are certified professionals with extensive experience in driver education and road safety.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-50/50 border border-gray-100 p-8 rounded-2xl hover:shadow-xl hover:shadow-gray-200/50 hover:bg-white transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-brand-red-light rounded-xl flex items-center justify-center mb-6">
              <Car className="w-8 h-8 text-brand-red" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Modern Fleet</h3>
            <p className="text-gray-600 leading-relaxed">
              Learn in our well-maintained vehicles equipped with the latest safety features and technology.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-50/50 border border-gray-100 p-8 rounded-2xl hover:shadow-xl hover:shadow-gray-200/50 hover:bg-white transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-brand-red-light rounded-xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-brand-red" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Personalized Training</h3>
            <p className="text-gray-600 leading-relaxed">
              One-on-one instruction tailored to your learning pace and driving goals.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gray-50/50 border border-gray-100 rounded-3xl p-10 md:p-12 shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-200/60">
            <div className="text-center pt-6 md:pt-0">
              <div className="text-4xl md:text-5xl font-black text-brand-red font-display tracking-tight">5000+</div>
              <p className="text-gray-500 font-semibold mt-2 text-sm uppercase tracking-wider">Students Trained</p>
            </div>
            <div className="text-center pt-6 md:pt-0">
              <div className="text-4xl md:text-5xl font-black text-brand-red font-display tracking-tight">98%</div>
              <p className="text-gray-500 font-semibold mt-2 text-sm uppercase tracking-wider">Pass Rate</p>
            </div>
            <div className="text-center pt-6 md:pt-0">
              <div className="text-4xl md:text-5xl font-black text-brand-red font-display tracking-tight">50+</div>
              <p className="text-gray-500 font-semibold mt-2 text-sm uppercase tracking-wider">Expert Instructors</p>
            </div>
            <div className="text-center pt-6 md:pt-0">
              <div className="text-4xl md:text-5xl font-black text-brand-red font-display tracking-tight">10+</div>
              <p className="text-gray-500 font-semibold mt-2 text-sm uppercase tracking-wider">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
