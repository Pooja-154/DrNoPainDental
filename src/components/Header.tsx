import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import Logo from "@assets/No Pain Dental Master Logo FIle-11.svg"; // ✅ Import your logo
import Blog from "@/pages/Blog";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Smile Gallery", path: "/gallery" },
  ];

  const isActive = (path: string) => location.pathname === path;
  // Removed useEffect and setIsLoading since setIsLoading is not defined and not used elsewhere
  // Common button classes for all nav items
  const navButtonClasses =
    "bg-gradient-to-r from-[#7E287D] to-[#A34D9D] text-white px-4 py-2 rounded-full hover:shadow-elegant transition-all duration-300 font-medium text-sm";

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 pl-4 pt-2">
            <img
              src={Logo}
              alt="Dr. NoPain Dental Logo"
              className="h-12 w-auto rounded-lg shadow-dental scale-150"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${navButtonClasses} ${
                  isActive(item.path) ? "" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Book Button */}
            <Button
              className="bg-gradient-to-r from-[#7E287D] to-[#A34D9D] text-white px-6 py-2 rounded-full hover:shadow-elegant transition-all duration-300"
              asChild
            >
              <a
                href="https://www.practo.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/20 pt-4 flex flex-col space-y-3 bg-black/40 rounded-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${navButtonClasses} w-full text-center`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Book Button */}
            <Button className={`${navButtonClasses} w-full text-center`} asChild>
              <a
                href="https://www.practo.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book
              </a>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

// Make sure you have a route in your router like:
// <Route path="/gallery" element={<Gallery />} />
