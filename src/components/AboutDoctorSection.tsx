import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UserCheck, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import drNikitaPortrait from "@/assets/profilepic.jpg";

const AboutDoctorSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Doctor Photo */}
          <div className="relative">
            <div className="bg-gradient-hero rounded-2xl p-1">
              <img 
                src={drNikitaPortrait}
                alt="Dr. Nikita Singh - Expert Dentist"
                className="w-full h-[400px] object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-full p-4 shadow-premium">
              <UserCheck className="h-8 w-8 text-primary" />
            </div>
          </div>

          {/* Doctor Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                About Dr. Nikita Singh
              </h2>
              <p className="text-lg text-muted-foreground">
                Leading dental expert dedicated to providing exceptional, pain-free dental care with a personalized approach to every patient's unique needs.
              </p>
              <div className="bg-gradient-hero text-white p-4 rounded-lg">
                <p className="font-semibold text-lg">
                  "10+ years of expertise in painless root canals & aesthetic smile makeovers."
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-hero hover:shadow-dental">
                <Calendar className="h-4 w-4 mr-2" />
                Book Appointment
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctorSection;