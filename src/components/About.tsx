import { Award, Car, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Prime Champion Drive Academy</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've been helping students become confident and safe drivers for over a decade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition">
            <Award className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Instructors</h3>
            <p className="text-gray-600">
              All our instructors are certified professionals with extensive experience in driver education and road safety.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition">
            <Car className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Modern Fleet</h3>
            <p className="text-gray-600">
              Learn in our well-maintained vehicles equipped with the latest safety features and technology.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition">
            <Users className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Training</h3>
            <p className="text-gray-600">
              One-on-one instruction tailored to your learning pace and driving goals.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600">5000+</div>
            <p className="text-gray-600 mt-2">Students Trained</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600">98%</div>
            <p className="text-gray-600 mt-2">Pass Rate</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600">50+</div>
            <p className="text-gray-600 mt-2">Expert Instructors</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600">10+</div>
            <p className="text-gray-600 mt-2">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
