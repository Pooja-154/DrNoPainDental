import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo2 from "@/assets/logo-13.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-dental border-t border-border/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Map */}
          <div className="lg:col-span-1 flex flex-col items-center">
            <h4 className="font-semibold text-foreground mb-4">Find Us on Map</h4>
            <div className="w-80 h-80 rounded-lg overflow-hidden shadow-md mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.781532015708!2d77.7676197!3d12.985820499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0f078e6c5ea5%3A0xefab688ce8bb490!2sDr.%20NoPain%20Dental!5e0!3m2!1sen!2sin!4v1758647142881!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <Button
              className="bg-gradient-to-r from-[#7E287D] to-[#A34D9D] text-white px-6 py-2 rounded-full hover:shadow-elegant transition-all duration-300"
              asChild
            >
              <a
                href="https://maps.app.goo.gl/7hdRg7Rh7MRoNAPL9"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps
              </a>
            </Button>
          </div>

          {/* Center: Description + Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Practice Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-5">
                <div className="bg-gradient-hero rounded-full ">
                  <img
                    src={logo2}
                    alt="Dr. NoPain Dental Logo"
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-[#7E287D]">Dr. NoPain Dental</h3>
                  <p className="text-sm text-muted-foreground">
                    PainFree Treatments <br /> Picture Perfect Smiles
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Dr. NoPain Dental is a Multi-speciality dental clinic in Channasandra,
                Whitefield, Bengaluru. We specialize in ‘Painfree Dental Treatments,
                Picture Perfect Smiles’ in a soothing, comfortable atmosphere. We have a
                patient first approach. Our expert panel of specialists ensures precision
                dentistry using advanced technology.
              </p>
            </div>
            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-[#7E287D] mt-1 flex-shrink-0" />
                  <div className="text-sm text-muted-foreground">
                    First floor, Doddathayamma Complex, <br />
                    Sy No. 8/3, FCI Main Road, Near Axis,<br />
                    bank ATM, Channasandra, Bengaluru,<br />
                    Karnataka 560067
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-[#7E287D]" />
                  <a
                    href="tel:+917483596630"
                    className="text-sm text-muted-foreground hover:text-[#7E287D] transition-colors"
                  >
                    +91 74835 96630
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-[#7E287D]" />
                  <a
                    href="mailto:drnopaindental@gmail.com"
                    className="text-sm text-muted-foreground hover:text-[#7E287D] transition-colors"
                  >
                    drnopaindental@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quick Links + Practice Hours + Social */}
          <div className="lg:col-span-1 space-y-4 flex flex-col">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2 mb-6">
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-[#7E287D] transition-colors">
                About Us
              </Link>
              <Link to="/servicessection" className="block text-sm text-muted-foreground hover:text-[#7E287D] transition-colors">
                Our Services
              </Link>
              <Link to="/gallery" className="block text-sm text-muted-foreground hover:text-[#7E287D] transition-colors">
                Smile Gallery
              </Link>
              <Link to="/testimonialsection" className="block text-sm text-muted-foreground hover:text-[#7E287D] transition-colors">
                Patient Experience
              </Link>
              <Link to="/blog" className="block text-sm text-muted-foreground hover:text-[#7E287D] transition-colors">
                Blog
              </Link>
            </div>
            {/* Practice Hours */}
            <div className="space-y-4 mb-6">
              <h4 className="font-semibold text-foreground">Practice Hours</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-[#7E287D]" />
                  <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
                </div>
                <div className="ml-7">
                  <span>Sunday: 10:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
            {/* Social */}
            <div className="space-y-3">
              <h5 className="font-medium text-foreground">Follow Us</h5>
              <div className="flex space-x-3">
                <Button variant="outline" size="icon" className="w-8 h-8" asChild>
                  <a href="https://www.facebook.com/share/16fGP3cUTJ/" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="w-8 h-8" asChild>
                  <a href="https://www.instagram.com/drnopaindental/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="w-8 h-8" asChild>
                  <a href="https://g.co/kgs/mLr5r2r" target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 488 512"
                      className="h-4 w-4 fill-black"
                    >
                      <path d="M488 261.8C488 403.3 391.1 504 248 504 111.1 504 0 392.9 0 256S111.1 8 248 8c66.8 0 123.6 24.6 166.3 64.9l-67.5 64.9C317.2 110.7 284.6 96 248 96c-84.2 0-152.6 69-152.6 160s68.4 160 152.6 160c97.7 0 134.2-70.2 139.8-106.9H248v-85.3h240c2.3 13.6 3.9 27.2 3.9 43z" />
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Dr. NoPain Dental. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-[#7E287D] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-[#7E287D] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
