import { CheckCircle } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Standard Practice',
      price: '₹6,500',
      period: '/ 10 Days Class',
      description: 'Perfect for hands-on, daily practice to master control and confidence.',
      features: [
        '10 days intensive practical training',
        'Dual-control modern training vehicle',
        'Certified professional instructors',
        'Parallel parking & reversing mastery',
        'Basic driving theory & road signals'
      ],
      highlighted: false
    },
    {
      name: 'Complete DL Package',
      price: '₹12,500',
      period: '/ Full Course + License',
      description: 'Our most comprehensive program, including complete practice and RTO License assistance.',
      features: [
        'Comprehensive practical training course',
        'Complete Driving License (DL) assistance',
        'Official RTO mock test preparation',
        'Dual-control vehicle provided for RTO test',
        'Elite senior instructors & premium fleet',
        'Flexible scheduling & progress tracking'
      ],
      highlighted: true
    },
    {
      name: 'Extra Coaching',
      price: '₹650',
      period: '/ Per Day',
      description: 'Need extra practice? Get flexible daily coaching sessions on-demand.',
      features: [
        '₹650 per day additional practice cost',
        'Flexible day-by-day customized training',
        'Focus on specific skills (e.g. night driving)',
        'One-on-one instruction with your vehicle',
        'Convenient local pick-up and drop-off'
      ],
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your driving journey. All prices include professional instruction and vehicle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                plan.highlighted
                  ? 'bg-blue-600 text-white shadow-2xl md:scale-105'
                  : 'bg-white shadow-lg text-gray-900'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-4 py-1 rounded-bl-lg font-bold text-sm">
                  POPULAR
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-sm mb-4 ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={`text-sm ml-2 ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.period}
                </span>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold mb-6 transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Get Started
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle
                      size={20}
                      className={plan.highlighted ? 'text-yellow-300' : 'text-blue-600'}
                    />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Need a custom package? <span className="font-semibold">Contact us for special pricing</span>
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Contact Sales Team
          </a>
        </div>
      </div>
    </section>
  );
}
