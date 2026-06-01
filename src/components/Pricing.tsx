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
    <section id="pricing" className="py-16 md:py-24 bg-[#fafafa] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-red/2 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-10 w-64 h-64 bg-brand-red/2 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-red text-sm font-extrabold uppercase tracking-widest bg-brand-red-light px-4 py-1.5 rounded-full">Transparent Pricing</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-4 font-display">Affordable Packages</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Choose the perfect plan for your driving journey. All prices include professional instruction and vehicle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                plan.highlighted
                  ? 'bg-brand-red text-white shadow-2xl md:scale-105 border border-brand-red-hover'
                  : 'bg-white shadow-lg text-gray-900 border border-gray-100'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-gray-950 px-4 py-1 rounded-tr-2xl rounded-bl-xl font-black text-xs uppercase tracking-wider">
                  POPULAR
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2 font-display">{plan.name}</h3>
              <p className={`text-sm mb-5 leading-relaxed ${plan.highlighted ? 'text-brand-red-light/90' : 'text-gray-500'}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-4xl font-extrabold font-display">{plan.price}</span>
                <span className={`text-sm ml-2 font-semibold ${plan.highlighted ? 'text-brand-red-light/85' : 'text-gray-500'}`}>
                  {plan.period}
                </span>
              </div>

              <button
                className={`w-full py-3.5 rounded-full font-bold mb-6 transition-all duration-300 cursor-pointer shadow-xs ${
                  plan.highlighted
                    ? 'bg-white text-brand-red hover:bg-gray-100'
                    : 'bg-brand-red text-white hover:bg-brand-red-hover'
                }`}
              >
                Get Started
              </button>

              <ul className="space-y-3.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle
                      size={18}
                      className={plan.highlighted ? 'text-yellow-300 shrink-0' : 'text-brand-red shrink-0'}
                    />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 font-medium">
            Need a custom package? <span className="font-bold text-brand-red">Contact us for special pricing</span>
          </p>
          <a
            href="/contact"
            className="inline-block bg-brand-red text-white px-8 py-3.5 rounded-full hover:bg-brand-red-hover transition-all duration-300 font-bold shadow-md shadow-brand-red/10 hover:shadow-lg hover:shadow-brand-red/20 cursor-pointer"
          >
            Contact Sales Team
          </a>
        </div>
      </div>
    </section>
  );
}
