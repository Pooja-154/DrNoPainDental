import { Sparkles, Shield, Zap, Heart, Smile } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  const services = [
    {
      icon: <Smile className="h-8 w-8" />,
      title: "Pain-Free Dentistry",
      description: "We ensure comfort at every step, making treatments virtually painless.",
      features: ["Gentle treatments", "Focus on patient comfort", "Stress-free environment"],
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Advanced Technology",
      description: "Enjoy safer, faster, and more precise treatments with the latest innovations.",
      features: ["Regular Cleanings", "Fluoride Treatments", "Oral Health Screenings"],
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Boutique Experience",
      description: "Step into a relaxing, spa-like clinic designed around your comfort.",
      features: [
        "Personalized care tailored to your smile goals.",
        "Relaxing, spa-like environment to ease dental visits",
      ],
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Smile Makeover",
      description: "Transform your smile with veneers, aligners, and cosmetic expertise.",
      features: [
        "Customized smile makeovers enhancing natural beauty.",
        "Balanced aesthetics and functionality for a confident smile.",
      ],
    },
  ];

  // Simulate loading and reveal cards with mesmerizing effect
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      // Reveal cards one by one with magical effect
      services.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards(prev => [...prev, index]);
        }, index * 300);
      });
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate header first
            const header = entry.target.querySelector('.animate-header');
            if (header) {
              header.classList.add('animate-fade-in-up');
            }

            // Then animate cards with staggered effect
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-slide-in-up');
                card.classList.remove('opacity-0', 'translate-y-8');
              }, index * 150);
            });

            // Finally animate CTA
            setTimeout(() => {
              const cta = entry.target.querySelector('.animate-cta');
              if (cta) {
                cta.classList.add('animate-fade-in-scale');
              }
            }, cards.length * 150 + 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-[#7E287D]/30 to-[#A34D9D]/30 rounded-full blur-xl animate-float-magical"></div>
        <div className="absolute top-1/2 right-20 w-24 h-24 bg-gradient-to-r from-[#A34D9D]/40 to-[#7E287D]/40 rounded-full blur-xl animate-float-delayed-magical"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-gradient-to-r from-[#7E287D]/20 to-[#A34D9D]/20 rounded-full blur-2xl animate-pulse-magical"></div>
        <div className="absolute top-1/4 left-1/2 w-16 h-16 bg-gradient-to-r from-[#A34D9D]/50 to-[#7E287D]/50 rounded-full blur-lg animate-orbit"></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-gradient-to-r from-[#7E287D]/25 to-[#A34D9D]/25 rounded-full blur-xl animate-drift"></div>
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#7E287D]/10 to-[#A34D9D]/10 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-[#7E287D]/20 rounded-full animate-spin-magical">
              <div className="absolute inset-0 border-4 border-transparent border-t-[#7E287D] rounded-full animate-spin"></div>
              <div className="absolute inset-2 border-4 border-transparent border-t-[#A34D9D] rounded-full animate-spin-reverse"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="h-8 w-8 text-[#7E287D] animate-sparkle-magical" />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-[#7E287D]/20 to-[#A34D9D]/20 rounded-full animate-pulse-ring-magical"></div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className={`text-center space-y-6 mb-16 transition-all duration-1000 ${!isLoading ? 'animate-header opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-[#7E287D] to-[#A34D9D] rounded-full p-4 shadow-lg relative group animate-glow-magical">
              <Sparkles className="h-8 w-8 text-white animate-sparkle-magical" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7E287D] to-[#A34D9D] animate-ping-magical opacity-30"></div>
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#7E287D]/50 to-[#A34D9D]/50 animate-rotate-magical opacity-20"></div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#7E287D] to-[#A34D9D] bg-clip-text text-transparent animate-gradient-text-magical">
              Our Promises
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience comprehensive dental care with our range of advanced, pain-free treatments 
              designed to give you the perfect smile you've always wanted.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`service-card relative group hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-[#7E287D]/30 ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0 animate-card-reveal-magical' 
                  : 'opacity-0 translate-y-12'
              }`}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#7E287D]/10 to-[#A34D9D]/10 opacity-0 group-hover:opacity-100 transition-all duration-700 animate-shimmer-magical"></div>
              
              {/* Magical Border Effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#7E287D] via-[#A34D9D] to-[#7E287D] p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-[1px] rounded-lg bg-white/95 backdrop-blur-sm"></div>
              </div>
              
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-[#7E287D] to-[#A34D9D] rounded-full p-4 text-white group-hover:shadow-lg group-hover:shadow-[#7E287D]/50 transition-all duration-700 transform group-hover:scale-110 group-hover:rotate-6 relative animate-icon-float">
                    <div className="relative z-10 transform transition-transform duration-300 group-hover:animate-bounce-gentle">
                      {service.icon}
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7E287D] to-[#A34D9D] opacity-40 scale-150 animate-pulse-ring-magical"></div>
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#A34D9D]/30 to-[#7E287D]/30 animate-rotate-slow opacity-20"></div>
                  </div>
                </div>
                <CardTitle className="text-xl bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-[#7E287D] group-hover:to-[#A34D9D] transition-all duration-500">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4 relative z-10">
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-start space-x-3 text-sm transform transition-all duration-300 hover:translate-x-1"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-[#7E287D] to-[#A34D9D] rounded-full mt-2 animate-pulse-gentle-magical flex-shrink-0"></div>
                      <span className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              {/* Hover Shimmer Effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-[#7E287D]/20 via-[#A34D9D]/20 to-transparent -skew-x-12 animate-shimmer-magical-slow"></div>
              </div>
              
              {/* Magical Particles */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-4 right-4 w-1 h-1 bg-[#7E287D] rounded-full animate-particle-1"></div>
                <div className="absolute bottom-6 left-6 w-1 h-1 bg-[#A34D9D] rounded-full animate-particle-2"></div>
                <div className="absolute top-1/2 left-4 w-1 h-1 bg-[#7E287D] rounded-full animate-particle-3"></div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center space-y-6 bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-0 relative overflow-hidden transition-all duration-1000 ${
          !isLoading ? 'animate-cta-magical opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          {/* CTA Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#7E287D]/5 via-[#A34D9D]/5 to-[#7E287D]/5 animate-gradient-shift-magical"></div>
          <div className="absolute inset-0 bg-gradient-to-45 from-transparent via-[#7E287D]/10 to-transparent animate-diagonal-sweep"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#7E287D] to-[#A34D9D] bg-clip-text text-transparent animate-text-glow">
              Ready to Transform Your Smile?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Schedule a consultation today and discover how our pain-free approach can give you 
              the confident, beautiful smile you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#7E287D] to-[#A34D9D] text-white hover:from-[#7E287D]/90 hover:to-[#A34D9D]/90 transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-[#7E287D]/50 relative overflow-hidden group"
              >
                <span className="relative z-10">Book Free Consultation</span>
                <div className="absolute inset-0 rounded-md bg-gradient-to-r from-[#A34D9D] to-[#7E287D] opacity-0 group-hover:opacity-100 animate-pulse-button-magical"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-[#7E287D]/30 hover:border-[#7E287D]/50 hover:bg-[#7E287D]/5 transform hover:scale-105 transition-all duration-500 hover:shadow-lg hover:shadow-[#7E287D]/20 group relative overflow-hidden"
              >
                <span className="bg-gradient-to-r from-[#7E287D] to-[#A34D9D] bg-clip-text text-transparent group-hover:from-[#7E287D]/80 group-hover:to-[#A34D9D]/80 relative z-10">
                  View Before & After Gallery
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#7E287D]/10 to-[#A34D9D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;