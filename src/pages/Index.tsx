import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutDoctorSection from "@/components/AboutDoctorSection";
import Team from "@/components/Team";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <Team />
        <TestimonialsSection />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
