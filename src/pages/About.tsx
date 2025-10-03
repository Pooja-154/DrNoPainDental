import { Award, Heart, Shield, Star, Users, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Pain-Free Expertise",
      description: "Advanced techniques and gentle care ensuring comfortable treatments for every patient."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Trust & Comfort",
      description: "Building lasting relationships through compassionate care and transparent communication."
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Aesthetic Excellence",
      description: "Combining artistry with precision to create picture-perfect, natural-looking smiles."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Modern Technology",
      description: "State-of-the-art equipment and innovative techniques for superior treatment outcomes."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Personalized Care",
      description: "Tailored treatment plans designed specifically for each patient's unique needs and goals."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Relaxing Ambience",
      description: "Calming environment designed to reduce anxiety and create a spa-like dental experience."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 animate-fadeIn">
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-r from-[#7E287D] to-[#A34D9D] animate-slideDown">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-6 animate-fadeInUp">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slideUp">
                About Dr. NoPain Dental
              </h1>
              <p className="text-xl text-white/95 leading-relaxed animate-fadeInUp delay-200">
                We combine advanced dental technology with a gentle approach to ensure a stress-free experience,
                focusing on aesthetics and overall well-being for every patient who walks through our doors.
              </p>
            </div>
          </div>
        </section>

        {/* Meet the Founder */}
        <section className="py-20 bg-white animate-fadeIn delay-300">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-slideInLeft">
                <h2 className="text-4xl font-bold text-[#7E287D]">Meet the Founder</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    <strong className="text-2xl text-[#A34D9D]">Dr. Nikita Singh <br />A Pioneer in Precision and Painless Dentistry<br />
                    B.D.S, M.D.S (Endodontics and Conservative Dentistry)</strong>
                  </p>
                  <p>
                    Root Canal Specialist and Smile Design Expert
                    Previous Experiences: Apollo Dental (Whitefield), Aditya Birla Memorial Hospital (Pune)
                  </p>
                  <p>
                    With over 10 years of expertise in Conservative Dentistry and Endodontics, Dr. Nikita is renowned for her pain-free, precision-driven treatments. Having served at leading institutions like Aditya Birla Memorial Hospital and Apollo Dental, she now brings her vision to life at her state-of-the-art clinic in Whitefield, Bengaluru. Known for her gentle care and advanced techniques, she lives by the motto: "Painfree Treatments, Picture Perfect Smiles."
                  </p>
                  <p>
                    NoPain Dental Lounge was born from a simple promise — to make every dental visit comfortable and stress-free. With advanced technology, precision-driven care, and a compassionate approach, my mission is to give patients not just healthier teeth, but the confidence of a truly picture-perfect smile.
                  </p>
                </div>
              </div>
              <div className="flex justify-center animate-slideInRight">
                <div className="bg-white shadow-2xl border border-purple-100 rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-purple-300/50">
                  <div className="p-6">
                    <div className="w-full h-96 bg-gradient-to-br from-[#7E287D]/10 to-[#A34D9D]/10 rounded-lg flex items-center justify-center animate-pulse">
                      <div className="text-center">
                        <div className="text-6xl mb-4">👩‍⚕️</div>
                        <p className="text-gray-500">Dr. Portrait</p>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-xl font-semibold text-[#7E287D]">Dr. Nikita Singh</h3>
                      <p className="text-gray-600">Founder & Chief Endodontist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6 mb-16 animate-fadeInUp">
              <h2 className="text-4xl md:text-5xl font-bold text-[#7E287D]">
                The NoPain Experience
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                What makes our clinic different - gentle techniques, comfort-first approach, and aesthetic focus
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-500 hover:-translate-y-2 animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="bg-gradient-to-br from-[#7E287D] to-[#A34D9D] rounded-full p-4 text-white shadow-lg transform transition-transform duration-300 hover:rotate-12 hover:scale-110">
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-[#7E287D] mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clinic Ambience Photos */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6 mb-16 animate-fadeInUp">
              <h2 className="text-4xl md:text-5xl font-bold text-[#7E287D]">
                Our Spa-Like Environment
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience dental care in a calming, luxurious setting designed to ease anxiety and promote relaxation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { emoji: "🏠", title: "Waiting Lounge", desc: "Comfortable seating area" },
                { emoji: "💡", title: "Soft Lighting", desc: "Ambient and calming" },
                { emoji: "🏥", title: "Treatment Room", desc: "Modern and peaceful" },
                { emoji: "🌿", title: "Reception Area", desc: "Welcoming entrance" },
                { emoji: "🛋", title: "Relaxation Zone", desc: "Pre-treatment comfort" },
                { emoji: "✨", title: "Spa Interiors", desc: "Luxury atmosphere" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-500 transform hover:scale-105 animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-video bg-gradient-to-br from-[#7E287D]/10 to-[#A34D9D]/10 flex items-center justify-center">
                    <div className="text-center text-[#7E287D]">
                      <div className="text-4xl mb-2 animate-bounce">{item.emoji}</div>
                      <p className="font-semibold text-lg">{item.title}</p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gradient-to-r from-[#7E287D] to-[#A34D9D] animate-fadeIn">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeInUp">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Our Mission
              </h2>
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 transform transition-all duration-500 hover:scale-105">
                <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed italic mb-6">
                  "To revolutionize dental care by providing completely pain-free treatments that restore
                  confidence and create picture-perfect smiles, while fostering a warm, comfortable
                  environment where patients feel valued and cared for."
                </blockquote>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    We believe that everyone deserves a beautiful, healthy smile without the fear or discomfort
                    traditionally associated with dental procedures. Through continuous innovation, compassionate
                    care, and unwavering commitment to excellence, we strive to make dental wellness an enjoyable
                    and transformative experience for every individual.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-8 animate-fadeInUp">
              <h2 className="text-3xl md:text-4xl font-bold text-[#7E287D]">
                Ready to Experience the NoPain Difference?
              </h2>
              <p className="text-xl text-gray-600">
                Discover why patients choose our spa-like dental experience for comfort, quality, and beautiful results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="px-8 py-4 bg-gradient-to-r from-[#7E287D] to-[#A34D9D] text-white rounded-full font-semibold shadow-lg hover:shadow-2xl hover:shadow-purple-300/50 transform hover:scale-105 transition-all duration-300"
                  onClick={() => navigate("/team")}
                >
                  Meet the Team
                </button>
                <button className="px-8 py-4 bg-white text-[#7E287D] border-2 border-[#7E287D] rounded-full font-semibold shadow-lg hover:bg-[#7E287D] hover:text-white transform hover:scale-105 transition-all duration-300">
                  Book an Appointment
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.8s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  );
};

export default About;
