import { ArrowRight, Star, Shield, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/dental-hero-bg.jpg";
import { UserCheck, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import drNikitaPortrait from "@/assets/dr-nopain-portrait.jpg";


const Hero = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Pain-Free Expertise",
      description: "Advanced techniques for comfortable treatments"
    },
    {
      icon: <Heart className="h-6 w-6 text-white" />,
      title: "Trust & Comfort",
      description: "Gentle care in a relaxing environment"
    },
    {
      icon: <Star className="h-6 w-6 text-white" />,
      title: "Aesthetic Excellence",
      description: "Picture-perfect smiles with modern technology"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Painfree treatments,
                <span className="block text-lavender-secondary">Picture Perfect</span>
                <span className="block text-white">Smiles</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto lg:mx-0">
                At NoPain Dental Lounge, we combine advanced dental technology with a gentle approach 
                to ensure a stress-free experience, focusing on aesthetics and overall well-being.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/appointment">
                <Button size="lg" className="bg-gradient-to-r from-[#7E287D] to-[#A34D9D] text-white px-6 py-2 rounded-full hover:shadow-elegant transition-all duration-300">
                  Book Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/service">
                <Button size="lg" className="bg-gradient-to-r from-[#7E287D] to-[#A34D9D] text-white px-6 py-2 rounded-full hover:shadow-elegant transition-all duration-300">
                  Explore Our Services
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-white/80">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm">4.5 Patient Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-green-400" />
                <span className="text-sm">100% Pain-Free Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-white/10 backdrop-blur-sm border-white/20 p-6 animate-fade-in hover:bg-white/15 transition-all duration-300 hover:shadow-premium"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-hero rounded-full p-3 shadow-dental animate-gentle-float">
                    {feature.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    <p className="text-white/80">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}

            {/* Quick Booking Card */}
            <Card className="bg-white border-0 p-6 shadow-premium animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold text-[#7E287D]">Emergency Appointments Available</h3>
                <p className="text-muted-foreground">Same-day consultations for urgent dental care</p>
                <Button className="w-full bg-gradient-to-r from-[#7E287D] to-[#A34D9D] hover:shadow-dental">
                  Call Now: +91 74835 96630
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-gentle-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-lavender-secondary/20 rounded-full animate-gentle-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-white/5 rounded-full animate-gentle-float" style={{ animationDelay: "2s" }}></div>
    </section>
  );
};

export default Hero;