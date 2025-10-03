import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Chetsi",
      age: 32,
      rating: 5,
      content: "I recently visited Dr. NoPain Dental in Bengaluru for a tooth extraction, and I was treated by Dr. Nikita. I must say, the entire experience was absolutely painless and smooth. As a breastfeeding mother, I was especially concerned about medications, but Dr. Nikita was extremely careful and thoughtful while prescribing. What stood out even more was her proactive follow-ups—she truly cares about her patients' recovery and comfort. I highly recommend Dr. Nikita at Dr. NoPain Dental to anyone looking for a painless and seamless dental experience in Bengaluru.",
      location: "Bengaluru"
    },
    {
      name: "Sravani",
      age: 28,
      rating: 5,
      content: "I had an accident that caused damage to my teeth. Dr. Nikita Singh treated me with great care and expertise. Three of my teeth required RCT (Root Canal Treatment), and one broken tooth was beautifully restored with composite filling. She explained every step of the process clearly, ensuring I fully understood the treatment plan. Dr. Nikita also suggested Invisalign for my alignment issues and provided detailed guidance on the process. I have now started my Invisalign journey, and I couldn’t be happier. I am extremely satisfied with her professionalism and the quality of care I received. Highly recommended!",
      location: "Bangalore"
    },
    {
      name: "Aditya",
      age: 35,
      rating: 4,
      content: "We have gone for our 5 year kid teeth cavity .I can tell you that doctor is very friendly and awesome with explanation of the issue . With we have taken the necessary steps and all is good. I will recommend this doctor for your teeth problem.",
      location: "Bangalore"
    },
    {
      name: "Nisha",
      age: 42,
      rating: 5,
      content: "I have been consulting Dr Nikita since last 2 years for dental scaling and polishing. She is quite good and methodical in treatment. I like the way she communicates and explains everything so that anyone can understand. She also suggests preventive care plan which I have not seen other doctors doing.",
      location: "Bengaluru"
    },
    {
      name: "Aayushi",
      age: 29,
      rating: 4,
      content: "Visited Dr. NoPain Dental Clinic for getting my fractured tooth extraction. The extraction process was extremely smooth and as the name says it was Painless. I highly recommend people to visit the clinic for hassle free procedures. Dr. Nikita is highly skilled and knowledgeable at work.",
      location: "Bangalore"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="flex justify-center">
            <div className="bg-white rounded-full p-4 shadow-dental">
              <Quote className="h-8 w-8 text-[#7E287D]" />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              What Our Patients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real stories from patients who experienced our pain-free dental care and achieved their dream smiles.
            </p>
          </div>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-white shadow-premium border-0 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-6">
                {/* Stars */}
                <div className="flex justify-center space-x-1">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed italic">
                  "{currentTestimonial.content}"
                </blockquote>
                {/* Patient Name */}
                <div className="mt-6 text-center">
                  <span className="font-bold text-2xl text-[#7E287D]">{currentTestimonial.name}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-[#7E287D] scale-125' 
                      : 'bg-[#7E287D]/30 hover:bg-[#7E287D]/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "100+", label: "Happy Patients" },
            { number: "100%", label: "Pain-Free Guarantee" },
            { number: "10+", label: "Years Experience" },
            { number: "4.5", label: "Average Rating" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <Card className="bg-white/50 backdrop-blur-sm border-white/20 p-6 hover:bg-white/70 transition-all duration-300">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-[#7E287D]">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;