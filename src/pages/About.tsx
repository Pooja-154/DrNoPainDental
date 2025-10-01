import { Award, Heart, Shield, Star, Users, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import doctorPortrait from "@/assets/dr-nopain-portrait.jpg";
import { motion } from "framer-motion";

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
  };

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <Header />
      <main>
        {/* Hero Section */}
        <motion.section 
          className="pt-32 pb-20 bg-gradient-hero"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About Dr. NoPain Dental 
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                We combine advanced dental technology with a gentle approach to ensure a stress-free experience, 
                focusing on aesthetics and overall well-being for every patient who walks through our doors.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Meet the Founder */}
        <section className="py-20 bg-gradient-dental">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInLeft}
              >
                <h2 className="text-4xl font-bold text-primary">Meet the Founder</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-2xl">Dr. Nikita Singh <br />A Pioneer in Precision and Painless Dentistry<br />
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
              </motion.div>
              <motion.div 
                className="flex justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInRight}
              >
                <Card className="bg-white shadow-premium border-0 overflow-hidden">
                  <div className="p-6">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 1 }}
                    >
                      <img 
                        src={doctorPortrait} 
                        alt="Dr. NoPain - Leading dental professional"
                        className="w-full h-96 object-cover rounded-lg"
                      />
                    </motion.div>
                    <div className="mt-4 text-center">
                      <h3 className="text-xl font-semibold text-primary">Dr. Nikitha Singh</h3>
                      <p className="text-muted-foreground">Founder & Chief Endodontist</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center space-y-6 mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                The NoPain Experience
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                What makes our clinic different - gentle techniques, comfort-first approach, and aesthetic focus
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {values.map((value, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="hover:shadow-premium transition-all duration-300 hover:-translate-y-2">
                    <CardHeader className="text-center pb-4">
                      <div className="flex justify-center mb-4">
                        <div className="bg-gradient-hero rounded-full p-4 text-white shadow-dental">
                          {value.icon}
                        </div>
                      </div>
                      <CardTitle className="text-xl text-primary">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-center leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Clinic Ambience Photos */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center space-y-6 mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                Our Spa-Like Environment
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience dental care in a calming, luxurious setting designed to ease anxiety and promote relaxation
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {[
                { emoji: "🏠", title: "Waiting Lounge", desc: "Comfortable seating area" },
                { emoji: "💡", title: "Soft Lighting", desc: "Ambient and calming" },
                { emoji: "🏥", title: "Treatment Room", desc: "Modern and peaceful" },
                { emoji: "🌿", title: "Reception Area", desc: "Welcoming entrance" },
                { emoji: "🛋", title: "Relaxation Zone", desc: "Pre-treatment comfort" },
                { emoji: "✨", title: "Spa Interiors", desc: "Luxury atmosphere" }
              ].map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="overflow-hidden hover:shadow-premium transition-all duration-300">
                    <div className="aspect-video bg-gradient-dental flex items-center justify-center">
                      <div className="text-center text-primary">
                        <div className="text-4xl mb-2">{item.emoji}</div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <motion.section 
          className="py-20 bg-gradient-lavender"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Our Mission
              </h2>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-premium p-8">
                <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed italic mb-6">
                  "To revolutionize dental care by providing completely pain-free treatments that restore 
                  confidence and create picture-perfect smiles, while fostering a warm, comfortable 
                  environment where patients feel valued and cared for."
                </blockquote>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    We believe that everyone deserves a beautiful, healthy smile without the fear or discomfort 
                    traditionally associated with dental procedures. Through continuous innovation, compassionate 
                    care, and unwavering commitment to excellence, we strive to make dental wellness an enjoyable 
                    and transformative experience for every individual.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="py-20 bg-gradient-lavender"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to Experience the NoPain Difference?
              </h2>
              <p className="text-xl text-muted-foreground">
                Discover why patients choose our spa-like dental experience for comfort, quality, and beautiful results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate("/team")}
                >
                  Meet the Team
                </Button>
                <Button variant="outline" size="lg">
                  Book an Appointment
                </Button>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default About;