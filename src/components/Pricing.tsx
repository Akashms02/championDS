import { CheckCircle } from 'lucide-react';

export default function Pricing() {
  const renderPricingText = (text: string) => {
    const parts = text.split(/(\d+|[₹/])/g);
    return parts.map((part, idx) => {
      if (/^(\d+|[₹/])$/.test(part)) {
        return (
          <span key={idx} className="font-display font-extrabold text-gray-900 group-hover:text-brand-red transition-colors duration-300">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  const plans = [
    {
      name: 'Car Practice',
      price: '₹6,500',
      period: '/ 10 Days Class',
      description: 'Perfect for hands-on, daily practice to master control and confidence.',
      features: [
        '10 days intensive practical training',
        'Dual-control modern training vehicle',
        'Certified professional instructors',
        'Parallel parking & reversing mastery',
        'Basic driving theory & road signals',
        '₹650 per day extra after 10 days'
      ],
      highlighted: false
    },
    {
      name: 'Both Car Practise with DL',
      price: '₹12,500',
      period: '/ 10 Days Class + License',
      description: 'Our most comprehensive program, including complete practice and RTO License assistance.',
      features: [
        'Comprehensive practical training course',
        'Complete Driving License (DL) assistance',
        'Dual-control vehicle provided for RTO test',
        'Flexible scheduling & progress tracking',
        '₹650 per day extra after 10 days'
      ],
      highlighted: true
    },
    {
      name: 'Bike / DL',
      price: '₹3,200',
      period: '/ License Only',
      description: 'Already know how to ride? Get complete assistance and vehicle provision for your RTO Two-Wheeler Driving License.',
      features: [
        'Complete 2-wheeler Driving License (DL) assistance',
        'Official RTO documents and application handling',
        'Safety gear and vehicle provided for RTO test',
        'Official RTO track practice and test mock run',
        'Senior coordinator guidance on RTO test day'
      ],
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="pt-6 pb-16 md:pt-10 md:pb-24 bg-[#fafafa] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-red/2 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-10 w-64 h-64 bg-brand-red/2 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-4 font-display">Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Transparent pricing plans tailored to your driving journey. All prices include professional instruction and vehicle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="group relative p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 flex flex-col justify-between bg-white shadow-lg text-gray-900 border border-gray-100 hover:bg-brand-red/8 hover:border-brand-red/25 hover:shadow-2xl cursor-pointer"
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-gray-950 px-4 py-1 rounded-tr-2xl rounded-bl-xl font-black text-xs uppercase tracking-wider z-20">
                  POPULAR
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold mb-2 font-display group-hover:text-brand-red transition-colors duration-300">{plan.name}</h3>
                <p className="text-sm mb-5 leading-relaxed text-gray-500 transition-colors duration-300">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-extrabold font-display group-hover:text-brand-red transition-colors duration-300">{plan.price}</span>
                  <span className="text-sm ml-2 font-semibold text-gray-500 transition-colors duration-300">
                    {renderPricingText(plan.period)}
                  </span>
                </div>

                <ul className="space-y-3.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle
                        size={18}
                        className="text-brand-red shrink-0 transition-colors duration-300"
                      />
                      <span className="text-sm font-medium">{renderPricingText(feature)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
