import { useEffect, useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  Award,
  Heart,
  Star,
  User,
  Shield,
  Brain,
  MessageCircle,
  Target,
  Calendar,
  Phone,
  CheckCircle,
  Sparkles
} from "lucide-react";
import DrNikita from "@/assets/profilepic.jpg";

const Team = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleElements, setVisibleElements] = useState<number[]>([]);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      // Stagger the appearance of elements
      const elements = Array.from({ length: 20 }, (_, i) => i);
      elements.forEach((index) => {
        setTimeout(() => {
          setVisibleElements(prev => [...prev, index]);
        }, index * 100);
      });
    }
  }, [isLoaded]);

  const specialists = [
    {
      name: "Dr. Ayesha Mehra",
      specialty: "Specialist Orthodontist",
      bio: "Dr. Ayesha combines modern orthodontic techniques with a compassionate approach. She specializes in invisible braces, aligners, and early orthodontic guidance for teens and adults alike.",
      image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Dr. Rahul Menon",
      specialty: "Cosmetic & Restorative Dentist",
      bio: "With an eye for detail and a passion for facial aesthetics, Dr. Rahul crafts natural, beautiful smiles through veneers, teeth whitening, and aesthetic restorations.",
      image: "https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Dr. Priya Reddy",
      specialty: "Pediatric Dental Specialist",
      bio: "Known for her warm approach, Dr. Priya makes dental visits fun and anxiety-free for children. She focuses on preventive care and painless treatments tailored for young smiles.",
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Dr. Vikram Shah",
      specialty: "Oral & Maxillofacial Surgeon",
      bio: "Dr. Vikram handles complex extractions, implants, and jaw surgeries with precision and empathy, ensuring patients are comfortable throughout.",
      image: "https://images.pexels.com/photos/6749777/pexels-photo-6749777.jpeg?auto=compress&cs=tinysrgb&w=400"
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
      title: "Aesthetic Integrity",
      description: "Natural-looking results that enhance your smile"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Gentle Communication",
      description: "Clear, caring communication every step of the way"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Clinical Precision",
      description: "Meticulous attention to detail in every procedure"
    }
  ];

  const whyChooseUs = [
    {
      icon: "🌟",
      title: "10+ Years Average Specialist Experience",
      description: "Proven expertise you can trust"
    },
    {
      icon: "🤝",
      title: "Collaborative, Multi-Specialty Approach",
      description: "Comprehensive care under one roof"
    },
    {
      icon: "💜",
      title: "Pain-Free Treatment Philosophy",
      description: "Advanced techniques for comfortable procedures"
    },
    {
      icon: "🧠",
      title: "Continuous Education & Latest Tech",
      description: "Always at the forefront of dental innovation"
    },
    {
      icon: "🧘",
      title: "Calm, Patient-First Communication Style",
      description: "We listen, understand, and care about your concerns"
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#7E287D] via-[#A34D9D] to-[#7E287D] flex items-center justify-center">
        <div className="text-center text-white">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <Sparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-white animate-pulse" />
          </div>
          <h2 className="text-2xl font-bold mb-2 animate-pulse">Loading Your Dental Experts</h2>
          <p className="text-lg opacity-80 animate-pulse">Preparing something beautiful...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#7E287D] via-[#A34D9D] to-[#7E287D] text-white relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className={`text-center space-y-6 max-w-4xl mx-auto transition-all duration-1000 ${visibleElements.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-lg md:text-xl font-medium opacity-80">
                Meet Your Dental Experts
              </h2>
              <h1 className={`text-4xl md:text-6xl font-bold transition-all duration-1000 delay-200 ${visibleElements.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Your Smile is in Expert Hands
              </h1>
              <p className={`text-lg md:text-xl opacity-90 transition-all duration-1000 delay-400 ${visibleElements.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                A passionate team of specialists dedicated to pain-free, aesthetic, and trusted dental care.
              </p>
              <p className={`text-base opacity-80 transition-all duration-1000 delay-600 ${visibleElements.includes(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                At Dr. NoPain Dental Lounge, our team of highly skilled specialists brings together years of clinical expertise, a passion for gentle dentistry, and an eye for aesthetic perfection.
              </p>
            </div>
          </div>
        </section>

        {/* Founder Section - Dr. Nikita Singh */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className={`relative transition-all duration-1000 ${visibleElements.includes(4) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="bg-gradient-to-br from-[#7E287D] to-[#A34D9D] rounded-2xl p-1 transform hover:scale-105 transition-transform duration-300">
                  <Card className="bg-white shadow-2xl border-0 overflow-hidden">
                    <div className="p-6">
                      <img
                        src={DrNikita}
                        alt="Dr. Nikita Singh - Founder & Chief Endodontist"
                        className="w-full h-96 object-cover rounded-lg"
                      />
                      <div className="mt-4 text-center">
                        <h3 className="text-xl font-semibold text-[#7E287D]">Dr. Nikita Singh</h3>
                        <p className="text-gray-600">Founder & Chief Endodontist</p>
                      </div>
                    </div>
                  </Card>
                </div>
                <div className={`absolute -bottom-6 -right-6 bg-white rounded-full p-4 shadow-2xl transition-all duration-1000 delay-800 ${visibleElements.includes(5) ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                  <Award className="h-8 w-8 text-[#7E287D]" />
                </div>
              </div>

              <div className={`space-y-6 transition-all duration-1000 delay-400 ${visibleElements.includes(6) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#7E287D]">
                    Dr. Nikita Singh
                  </h2>
                  <p className="text-xl text-[#A34D9D] font-semibold">
                    Founder & Chief Endodontist
                  </p>
                  <p className="text-gray-600">
                    Dr. Nikita Singh is a seasoned endodontist with over a decade of experience in pain-free root canal treatments and smile design. Her calm demeanor, artistic eye, and commitment to painless care have made her a trusted name among patients.
                  </p>
                  <p className="text-gray-600">
                    As the founder of NoPain Dental Lounge, her vision was clear — to eliminate dental anxiety by creating a space that feels like a boutique spa and delivers expert-led, personalized care.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#7E287D]/10 to-[#A34D9D]/10 p-6 rounded-lg space-y-3">
                  <h3 className="font-semibold text-[#7E287D]">Key Highlights:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#7E287D]" />
                      <span>BDS, MDS – Endodontics</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#7E287D]" />
                      <span>10+ Years of Clinical Experience</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#7E287D]" />
                      <span>Specialist in Root Canals, Smile Designing, and Cosmetic Dentistry</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#7E287D]" />
                      <span>Known for her "Pain-Free Guarantee"</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Specialists */}
        <section className="py-16 bg-gradient-to-r from-[#7E287D]/5 to-[#A34D9D]/5">
          <div className="container mx-auto px-4">
            <div className={`text-center space-y-6 mb-16 transition-all duration-1000 ${visibleElements.includes(7) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#7E287D]">
                Our Core Specialists
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Each specialist brings unique expertise and a commitment to exceptional care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {specialists.map((specialist, index) => (
                <div
                  key={index}
                  className={`group text-center transition-all duration-1000 transform hover:scale-105 ${visibleElements.includes(8 + index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${(8 + index) * 100}ms` }}
                >
                  <div className="relative mb-6">
                    <div className="w-40 h-40 mx-auto relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#7E287D] to-[#A34D9D] rounded-full p-1 shadow-2xl">
                        <img
                          src={specialist.image}
                          alt={`${specialist.name} - ${specialist.specialty}`}
                          className="w-full h-full object-cover rounded-full transition-all duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Star className="w-4 h-4 text-[#7E287D]" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-[#7E287D] group-hover:text-[#A34D9D] transition-colors duration-300">
                      {specialist.name}
                    </h3>
                    <p className="text-[#A34D9D] font-semibold">
                      {specialist.specialty}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed px-2">
                      {specialist.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className={`text-center space-y-6 mb-16 transition-all duration-1000 ${visibleElements.includes(12) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#7E287D]">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamValues.map((value, index) => (
                <Card 
                  key={index} 
                  className={`text-center p-6 border-2 border-transparent hover:border-[#7E287D]/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${visibleElements.includes(13 + index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${(13 + index) * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#7E287D] to-[#A34D9D] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#7E287D] mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Book With Confidence */}
        <section className="py-20 bg-gradient-to-br from-[#7E287D] via-[#A34D9D] to-[#7E287D] text-white relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-10 w-40 h-40 bg-white/5 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 left-20 w-28 h-28 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className={`text-center space-y-8 max-w-4xl mx-auto transition-all duration-1000 ${visibleElements.includes(18) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl md:text-5xl font-bold">
                Book With Confidence
              </h2>
              <p className="text-xl opacity-90">
                Come meet our caring team — we look forward to helping you smile pain-free.
              </p>

              <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-400 ${visibleElements.includes(19) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Button
                  size="lg"
                  className="bg-white text-[#7E287D] hover:bg-gray-100 shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </Button>
                <a href="tel:+917483596630" style={{ textDecoration: "none" }}>
                  <Button
                    size="lg"
                    className="bg-white text-[#7E287D] hover:bg-gray-100 shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us Today
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Team;