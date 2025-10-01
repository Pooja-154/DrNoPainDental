import React, { useState } from 'react';
import { Bluetooth as Tooth, Sparkles, Heart, Smile, Baby, Shield, Star, Calendar, ChevronRight, Award, X, Zap, Eye, Clock, Users, CheckCircle, MessageCircle, ArrowLeft } from 'lucide-react';
import Header from "@/components/Header";
import { motion } from "framer-motion";

interface ServiceDetail {
  whatItIs: string;
  whyPainFree: string;
  benefits: string[];
  technologyUsed: string[];
  whatToExpect: string[];
  faqs: { question: string; answer: string; }[];
  testimonials: { name: string; text: string; rating: number; }[];
}

interface Service {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  benefits: string[];
  featured?: boolean;
  details: ServiceDetail;
}

const services: Service[] = [
  {
    id: 'root-canal',
    title: 'Root Canal Therapy',
    icon: Tooth,
    description: 'Advanced pain-free root canal treatment using cutting-edge technology to save your natural teeth.',
    benefits: ['100% Pain-Free', 'Same Day Treatment', 'Advanced Technology'],
    featured: true,
    details: {
      whatItIs: 'Root canal therapy is a dental procedure that removes infected or damaged tissue from inside your tooth, preserving your natural tooth structure while eliminating pain and infection.',
      whyPainFree: 'At NoPain Dental, we use advanced laser technology and precision anesthesia techniques that completely eliminate discomfort. Our rotary instruments work faster and smoother than traditional methods, ensuring a completely comfortable experience.',
      benefits: [
        'Saves your natural tooth',
        'Eliminates tooth pain permanently',
        'Prevents spread of infection',
        'Maintains proper chewing function',
        'Cost-effective compared to extraction and replacement'
      ],
      technologyUsed: [
        'Laser-assisted root canal therapy',
        'Digital X-rays for precise diagnosis',
        'Rotary endodontic instruments',
        'Apex locators for accurate measurement',
        'Biocompatible filling materials'
      ],
      whatToExpect: [
        'Comprehensive consultation and digital X-rays',
        'Local anesthesia application (completely painless)',
        'Laser-assisted cleaning of infected tissue',
        'Precise filling and sealing of the tooth',
        'Temporary or permanent crown placement',
        'Follow-up appointment to ensure healing'
      ],
      faqs: [
        {
          question: 'Is root canal treatment really painless?',
          answer: 'Yes! With our advanced laser technology and precision anesthesia, patients report no pain during or after the procedure.'
        },
        {
          question: 'How long does the procedure take?',
          answer: 'Most root canal treatments are completed in a single 60-90 minute appointment.'
        },
        {
          question: 'Will I need a crown after root canal?',
          answer: 'In most cases, yes. A crown protects the treated tooth and restores its full function and appearance.'
        }
      ],
      testimonials: [
        {
          name: 'Sarah Johnson',
          text: 'I was terrified of getting a root canal, but Dr. Smith made it completely painless. I couldn\'t believe how easy it was!',
          rating: 5
        },
        {
          name: 'Michael Chen',
          text: 'The laser technology they use is amazing. No pain, no discomfort, and my tooth feels perfect now.',
          rating: 5
        }
      ]
    }
  },
  {
    id: 'smile-makeover',
    title: 'Smile Makeovers',
    icon: Sparkles,
    description: 'Complete smile transformation combining multiple cosmetic procedures for stunning results.',
    benefits: ['Custom Design', 'Natural Look', 'Confidence Boost'],
    featured: true,
    details: {
      whatItIs: 'A smile makeover is a comprehensive treatment plan that combines multiple cosmetic dental procedures to completely transform your smile, addressing issues like discoloration, misalignment, gaps, and damaged teeth.',
      whyPainFree: 'Our smile makeover process uses minimally invasive techniques, laser technology, and advanced anesthesia methods. Most procedures require little to no drilling, ensuring maximum comfort throughout your transformation.',
      benefits: [
        'Complete smile transformation',
        'Boosted self-confidence',
        'Improved facial aesthetics',
        'Better oral health',
        'Long-lasting results',
        'Customized to your face shape'
      ],
      technologyUsed: [
        'Digital smile design software',
        '3D imaging and modeling',
        'Laser gum contouring',
        'CAD/CAM same-day crowns',
        'Advanced whitening systems',
        'Minimally invasive veneers'
      ],
      whatToExpect: [
        'Comprehensive smile analysis and photos',
        'Digital smile design preview',
        'Treatment plan presentation',
        'Staged treatment appointments',
        'Progress monitoring and adjustments',
        'Final reveal and maintenance plan'
      ],
      faqs: [
        {
          question: 'How long does a complete smile makeover take?',
          answer: 'Depending on the complexity, most smile makeovers are completed in 2-4 appointments over 4-8 weeks.'
        },
        {
          question: 'Can I see what my new smile will look like before treatment?',
          answer: 'Absolutely! We use digital smile design technology to show you exactly how your new smile will look.'
        },
        {
          question: 'Is a smile makeover worth the investment?',
          answer: 'Yes! Our patients report increased confidence, better career opportunities, and improved quality of life.'
        }
      ],
      testimonials: [
        {
          name: 'Emma Rodriguez',
          text: 'My smile makeover changed my life! I smile confidently now and feel amazing about myself.',
          rating: 5
        },
        {
          name: 'David Park',
          text: 'The digital preview was incredible - my actual results exceeded even those expectations!',
          rating: 5
        }
      ]
    }
  },
  {
    id: 'cosmetic-fillings',
    title: 'Cosmetic Fillings',
    icon: Heart,
    description: 'Tooth-colored fillings that blend seamlessly with your natural teeth for invisible repairs.',
    benefits: ['Natural Appearance', 'Durable Materials', 'Mercury-Free'],
    featured: true,
    details: {
      whatItIs: 'Cosmetic fillings use tooth-colored composite resin materials to repair cavities and damaged teeth, providing a natural-looking restoration that blends seamlessly with your existing teeth.',
      whyPainFree: 'Our laser cavity preparation technique eliminates the need for drilling in many cases. When anesthesia is needed, we use topical numbing and precision injection techniques for complete comfort.',
      benefits: [
        'Invisible, natural appearance',
        'Mercury-free and biocompatible',
        'Preserves more tooth structure',
        'Bonds directly to tooth',
        'Can be completed in one visit',
        'Strengthens weakened teeth'
      ],
      technologyUsed: [
        'Laser cavity preparation',
        'High-quality composite resins',
        'LED curing lights',
        'Shade matching technology',
        'Minimally invasive techniques',
        'Digital cavity detection'
      ],
      whatToExpect: [
        'Thorough examination and X-rays',
        'Color matching to your natural teeth',
        'Gentle cavity preparation (often laser-assisted)',
        'Layer-by-layer filling placement',
        'Precise shaping and polishing',
        'Bite adjustment and final check'
      ],
      faqs: [
        {
          question: 'How long do cosmetic fillings last?',
          answer: 'With proper care, cosmetic fillings typically last 7-10 years or longer.'
        },
        {
          question: 'Are cosmetic fillings as strong as silver fillings?',
          answer: 'Modern composite materials are extremely durable and actually bond to your tooth, making them very strong.'
        },
        {
          question: 'Can old silver fillings be replaced with cosmetic ones?',
          answer: 'Yes! We can safely remove old amalgam fillings and replace them with beautiful, natural-looking alternatives.'
        }
      ],
      testimonials: [
        {
          name: 'Lisa Thompson',
          text: 'You can\'t even tell I have fillings! The color match is perfect and the procedure was completely painless.',
          rating: 5
        },
        {
          name: 'James Wilson',
          text: 'Replaced all my old silver fillings with cosmetic ones. My smile looks so much better now!',
          rating: 5
        }
      ]
    }
  },
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening',
    icon: Smile,
    description: 'Professional whitening treatments for a brighter, more confident smile in just one session.',
    benefits: ['Instant Results', 'Safe & Effective', 'Long-lasting'],
    featured: true,
    details: {
      whatItIs: 'Professional teeth whitening is a safe, effective cosmetic treatment that removes stains and discoloration from your teeth, making them several shades whiter in just one appointment.',
      whyPainFree: 'Our advanced whitening system includes desensitizing agents and precise application techniques that prevent sensitivity. We monitor your comfort throughout the entire process.',
      benefits: [
        'Immediate visible results',
        'Safe professional-grade materials',
        'Customized treatment strength',
        'Long-lasting whitening effects',
        'Boosts self-confidence',
        'Quick and convenient'
      ],
      technologyUsed: [
        'LED light-activated whitening',
        'Professional-grade whitening gel',
        'Custom-fitted whitening trays',
        'Desensitizing treatments',
        'Shade guide monitoring',
        'Protective soft tissue barriers'
      ],
      whatToExpect: [
        'Initial shade assessment and photos',
        'Protective barrier application',
        'Professional whitening gel application',
        'LED light activation (15-20 minutes)',
        'Multiple treatment cycles as needed',
        'Final shade comparison and photos'
      ],
      faqs: [
        {
          question: 'How many shades whiter will my teeth get?',
          answer: 'Most patients see 3-8 shades of improvement in a single session, with results varying by individual.'
        },
        {
          question: 'Will my teeth be sensitive after whitening?',
          answer: 'Our advanced system minimizes sensitivity, and any mild sensitivity typically resolves within 24-48 hours.'
        },
        {
          question: 'How long do whitening results last?',
          answer: 'With proper care and occasional touch-ups, professional whitening results can last 1-3 years.'
        }
      ],
      testimonials: [
        {
          name: 'Rachel Green',
          text: 'Amazing results in just one hour! My teeth are 6 shades whiter and I had no sensitivity at all.',
          rating: 5
        },
        {
          name: 'Mark Davis',
          text: 'Best investment I\'ve made for my appearance. The results are incredible and completely natural-looking.',
          rating: 5
        }
      ]
    }
  },
  {
    id: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    icon: Baby,
    description: 'Gentle, kid-friendly dental care creating positive experiences for your little ones.',
    benefits: ['Child-Friendly', 'Preventive Focus', 'Anxiety-Free'],
    featured: true,
    details: {
      whatItIs: 'Pediatric dentistry focuses on the oral health of children from infancy through adolescence, providing specialized care tailored to young patients\' unique needs and developmental stages.',
      whyPainFree: 'We use child-specific techniques including topical anesthetics, distraction methods, and gentle approaches. Our kid-friendly environment and specially trained staff ensure every visit is comfortable and positive.',
      benefits: [
        'Builds positive dental habits early',
        'Prevents future dental problems',
        'Child-specific treatment approaches',
        'Reduces dental anxiety',
        'Monitors proper development',
        'Family-friendly environment'
      ],
      technologyUsed: [
        'Child-sized digital X-ray equipment',
        'Laser therapy for gentle treatments',
        'Nitrous oxide (laughing gas)',
        'Fluoride varnish applications',
        'Sealant placement technology',
        'Interactive patient education tools'
      ],
      whatToExpect: [
        'Fun, welcoming office environment',
        'Gentle introduction to dental tools',
        'Comprehensive oral health assessment',
        'Preventive treatments as needed',
        'Oral hygiene education for child and parent',
        'Positive reinforcement and rewards'
      ],
      faqs: [
        {
          question: 'When should my child first visit the dentist?',
          answer: 'We recommend the first visit by age 1 or within 6 months of the first tooth appearing.'
        },
        {
          question: 'How do you help anxious children?',
          answer: 'We use gentle techniques, explain everything in kid-friendly terms, and create a fun, non-threatening environment.'
        },
        {
          question: 'Do you offer sedation for children?',
          answer: 'We offer nitrous oxide (laughing gas) for anxious children, which is safe and helps them relax during treatment.'
        }
      ],
      testimonials: [
        {
          name: 'Jennifer Martinez',
          text: 'My 5-year-old actually looks forward to dental visits now! The staff is amazing with kids.',
          rating: 5
        },
        {
          name: 'Tom Anderson',
          text: 'They made my daughter\'s first dental experience so positive. She wasn\'t scared at all!',
          rating: 5
        }
      ]
    }
  },
  {
    id: 'preventive-care',
    title: 'Preventive Care',
    icon: Shield,
    description: 'Comprehensive cleanings and checkups to maintain optimal oral health.',
    benefits: ['Early Detection', 'Professional Cleaning', 'Health Maintenance'],
    details: {
      whatItIs: 'Preventive dental care includes regular cleanings, examinations, and treatments designed to prevent dental problems before they start, maintaining optimal oral health throughout your life.',
      whyPainFree: 'Our gentle cleaning techniques and modern ultrasonic scalers make cleanings comfortable. We use topical anesthetics when needed and adjust our approach based on your sensitivity levels.',
      benefits: [
        'Prevents cavities and gum disease',
        'Early detection of problems',
        'Maintains fresh breath',
        'Saves money on future treatments',
        'Supports overall health',
        'Professional stain removal'
      ],
      technologyUsed: [
        'Ultrasonic scaling technology',
        'Digital X-rays with minimal radiation',
        'Intraoral cameras for detailed views',
        'Fluoride varnish applications',
        'Air polishing systems',
        'Laser bacterial reduction'
      ],
      whatToExpect: [
        'Comprehensive oral health examination',
        'Professional cleaning and scaling',
        'Digital X-rays (as needed)',
        'Oral cancer screening',
        'Personalized oral hygiene instruction',
        'Treatment planning for any issues found'
      ],
      faqs: [
        {
          question: 'How often should I have preventive cleanings?',
          answer: 'Most patients benefit from cleanings every 6 months, though some may need more frequent visits.'
        },
        {
          question: 'Are dental X-rays safe?',
          answer: 'Yes! Our digital X-rays use 90% less radiation than traditional X-rays and are completely safe.'
        },
        {
          question: 'What if I haven\'t been to the dentist in years?',
          answer: 'No judgment here! We\'ll work with you to get your oral health back on track with a gentle, comprehensive approach.'
        }
      ],
      testimonials: [
        {
          name: 'Susan Clark',
          text: 'The most thorough and gentle cleaning I\'ve ever had. They caught a small cavity early and saved me from major work.',
          rating: 5
        },
        {
          name: 'Robert Kim',
          text: 'I actually enjoy my dental cleanings now. The staff is professional and the technology is impressive.',
          rating: 5
        }
      ]
    }
  }
];

const teamValues = [
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Patient Comfort",
    description: "Your comfort is our top priority in every interaction"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Ethical Care",
    description: "Honest, transparent treatment recommendations"
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: "Excellence",
    description: "We strive for the highest standards in dental care"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Community Focus",
    description: "Building lasting relationships with our patients and community"
  }
];

const FloatingParticles: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => {
        const left = `${Math.random() * 100}%`;
        const top = `${Math.random() * 100}%`;
        const animationDelay = `${Math.random() * 10}s`;
        const animationDuration = `${8 + Math.random() * 8}s`;
        return (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left,
              top,
              animationDelay,
              animationDuration,
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-violet-400 to-pink-400 rounded-full blur-sm" />
          </div>
        );
      })}
    </div>
  );
};

const ServiceDetailModal: React.FC<{ service: Service; onClose: () => void }> = ({ service, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const Icon = service.icon;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'technology', label: 'Technology', icon: Zap },
    { id: 'process', label: 'What to Expect', icon: Clock },
    { id: 'faq', label: 'FAQ', icon: MessageCircle },
    { id: 'testimonials', label: 'Reviews', icon: Users }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
    ));
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-500 to-pink-500 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <Icon className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">{service.title}</h2>
              <p className="text-violet-100 mt-1">{service.description}</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'text-violet-600 border-b-2 border-violet-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <TabIcon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">What It Is</h3>
                <p className="text-gray-600 leading-relaxed">{service.details.whatItIs}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Why It's Pain-Free at NoPain</h3>
                <p className="text-gray-600 leading-relaxed">{service.details.whyPainFree}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.details.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'technology' && (
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">Advanced Technology Used</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.details.technologyUsed.map((tech, index) => (
                  <div key={index} className="bg-gradient-to-r from-violet-50 to-pink-50 p-4 rounded-xl border border-violet-100">
                    <div className="flex items-center space-x-3">
                      <Zap className="w-5 h-5 text-violet-600" />
                      <span className="font-medium text-gray-800">{tech}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">What to Expect</h3>
              <div className="space-y-4">
                {service.details.whatToExpect.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-600 pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'faq' && (
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-6">
                {service.details.faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-800 mb-2">{faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'testimonials' && (
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">Patient Testimonials</h3>
              <div className="space-y-6">
                {service.details.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gradient-to-r from-violet-50 to-pink-50 p-6 rounded-xl border border-violet-100">
                    <div className="flex items-center space-x-2 mb-3">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-gray-700 mb-3 italic">"{testimonial.text}"</p>
                    <p className="font-semibold text-gray-800">- {testimonial.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer CTA */}
        
      </div>
    </div>
  );
};

const ServiceCard: React.FC<{ service: Service; onLearnMore: () => void }> = ({ service, onLearnMore }) => {
  const Icon = service.icon;
  
  return (
    <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-violet-100">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
      
      {/* Featured badge */}
      {service.featured && (
        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-violet-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
          <Star className="w-4 h-4 inline mr-1" />
          Featured
        </div>
      )}
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-16 h-16 bg-gradient-to-br from-violet-400 to-pink-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        {/* Content */}
        <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-violet-700 transition-colors duration-300">
          {service.title}
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {service.description}
        </p>
        
        {/* Benefits */}
        <div className="space-y-2 mb-6">
          {service.benefits.map((benefit, index) => (
            <div key={index} className="flex items-center text-sm text-violet-700">
              <Award className="w-4 h-4 mr-2 text-pink-500" />
              {benefit}
            </div>
          ))}
        </div>
        
        {/* CTA Buttons */}
        <div className="flex space-x-3">
          <button 
            onClick={onLearnMore}
            className="flex-1 bg-gradient-to-r from-violet-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-full hover:from-violet-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Learn More
            <ChevronRight className="w-4 h-4 inline ml-2" />
          </button>
          <button className="bg-white border-2 border-violet-200 text-violet-600 font-semibold py-3 px-6 rounded-full hover:bg-violet-50 transition-all duration-300 shadow-md hover:shadow-lg">
            <Calendar className="w-4 h-4 inline mr-2" />
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const featuredServices = services.filter(service => service.featured);
  const otherServices = services.filter(service => !service.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-lavender-50 via-pink-50 to-violet-50 relative overflow-hidden">
        <motion.div
          className="min-h-screen bg-gradient-to-br from-lavender-50 via-pink-50 to-violet-50 relative overflow-hidden"
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Header />
          <FloatingParticles />
          
          {/* Header */}
          <div className="relative z-10 pt-20 pb-12">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full mb-8">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
                  Our Services
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Explore our range of pain-free and aesthetic-focused treatments designed to give you the perfect smile you deserve.
                </p>
              </div>
              
              {/* Featured Services */}
              <div className="mb-20">
                <div className="flex items-center justify-center mb-12">
                  <div className="bg-gradient-to-r from-violet-500 to-pink-500 h-1 w-16 rounded-full mr-4" />
                  <h2 className="text-3xl font-bold text-gray-800">Featured Services</h2>
                  <div className="bg-gradient-to-r from-pink-500 to-violet-500 h-1 w-16 rounded-full ml-4" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredServices.map((service) => (
                    <ServiceCard 
                      key={service.id} 
                      service={service} 
                      onLearnMore={() => setSelectedService(service)}
                    />
                  ))}
                </div>
              </div>
              
              {/* Additional Services */}
              {otherServices.length > 0 && (
                <div>
                  <div className="flex items-center justify-center mb-12">
                    <div className="bg-gradient-to-r from-violet-400 to-pink-400 h-1 w-12 rounded-full mr-4" />
                    <h2 className="text-2xl font-bold text-gray-700">Additional Services</h2>
                    <div className="bg-gradient-to-r from-pink-400 to-violet-400 h-1 w-12 rounded-full ml-4" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {otherServices.map((service) => (
                      <ServiceCard 
                        key={service.id} 
                        service={service} 
                        onLearnMore={() => setSelectedService(service)}
                      />
                    ))}
                  </div>
                </div>
              )}
              
              {/* Call to Action */}
              <div className="mt-20 text-center">
                <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-violet-100">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    Ready to Transform Your Smile?
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    Schedule your consultation today and discover why thousands choose NoPain Dental for their oral care needs.
                  </p>
                  <button className="bg-gradient-to-r from-violet-500 to-pink-500 text-white font-bold py-4 px-12 rounded-full text-lg hover:from-violet-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                    <Calendar className="w-6 h-6 inline mr-3" />
                    Schedule Your Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceDetailModal 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}
    </div>
  );
};

export default Services;