import { motion } from "motion/react";
import { SectionHeading } from "./ui/SectionHeading";
import { Check } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "199",
      description: "Perfect for starting creators and small businesses.",
      features: [
        "2 YouTube Videos/mo",
        "4 YouTube Shorts",
        "4 Custom Thumbnails",
        "Basic Color Grading",
        "3 Days Delivery"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "499",
      description: "Ideal for established channels and growing brands.",
      features: [
        "8 YouTube Videos/mo",
        "15 YouTube Shorts",
        "10 Custom Thumbnails",
        "Advanced Transitions & FX",
        "Cinematic Color Grading",
        "1 Day Delivery",
        "Priority Support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "App Development & Custom Web Solutions.",
      features: [
        "Custom Android App",
        "Full-Stack Web App",
        "UI/UX Design",
        "API Integration",
        "Firebase Backend",
        "Ongoing Maintenance",
        "Dedicated Manager"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Simple" highlight="Pricing" />
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glass-card p-8 relative flex flex-col ${
                plan.popular ? 'border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.15)] transform md:-translate-y-4' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-brand text-white text-sm font-bold py-1 px-4 rounded-full">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-sm text-gray-400 mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-black text-white">{plan.price === 'Custom' ? 'Custom' : `$${plan.price}`}</span>
                {plan.price !== 'Custom' && <span className="text-gray-400">/mo</span>}
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <Check size={18} className="text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-lg font-bold transition-all ${
                plan.popular 
                  ? 'bg-gradient-brand text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]' 
                  : 'glass text-white hover:bg-white/10'
              }`}>
                {plan.price === 'Custom' ? 'Request Quote' : 'Get Started'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
