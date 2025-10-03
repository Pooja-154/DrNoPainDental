import React, { useState, useRef, useEffect } from 'react';
import { Camera, Filter, ChevronLeft, ChevronRight, Star, Award, Sparkles, Eye, Calendar, ArrowLeft, ArrowRight } from 'lucide-react';

interface GalleryItem {
  id: string;
  procedure: string;
  beforeImage: string;
  afterImage: string;
  caption: string;
  patientAge: string;
  treatmentDuration: string;
  description: string;
  results: string[];
}

const galleryData: GalleryItem[] = [
  {
    id: '1',
    procedure: 'Smile Makeover',
    beforeImage: 'https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=400',
    afterImage: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=400',
    caption: 'Sarah M: Complete smile transformation with porcelain veneers',
    patientAge: '32 years old',
    treatmentDuration: '3 weeks',
    description: 'Complete smile makeover addressing discoloration, gaps, and misalignment',
    results: ['8 shades whiter', 'Perfect alignment', 'Natural appearance', 'Boosted confidence']
  },
  {
    id: '2',
    procedure: 'Teeth Whitening',
    beforeImage: 'https://images.pexels.com/photos/6812540/pexels-photo-6812540.jpeg?auto=compress&cs=tinysrgb&w=400',
    afterImage: 'https://images.pexels.com/photos/6812541/pexels-photo-6812541.jpeg?auto=compress&cs=tinysrgb&w=400',
    caption: 'Michael R: Professional whitening treatment in single session',
    patientAge: '28 years old',
    treatmentDuration: '1 hour',
    description: 'Professional LED whitening treatment removing years of staining',
    results: ['6 shades whiter', 'No sensitivity', 'Immediate results', 'Long-lasting effect']
  },
  {
    id: '3',
    procedure: 'Veneers',
    beforeImage: 'https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=400',
    afterImage: 'https://images.pexels.com/photos/5699462/pexels-photo-5699462.jpeg?auto=compress&cs=tinysrgb&w=400',
    caption: 'Emma L: Porcelain veneers for chipped and uneven teeth',
    patientAge: '35 years old',
    treatmentDuration: '2 weeks',
    description: 'Custom porcelain veneers to correct chips, gaps, and shape irregularities',
    results: ['Perfect symmetry', 'Natural translucency', 'Stain resistant', 'Durable solution']
  },
  {
    id: '4',
    procedure: 'Cosmetic Fillings',
    beforeImage: 'https://images.pexels.com/photos/6812542/pexels-photo-6812542.jpeg?auto=compress&cs=tinysrgb&w=400',
    afterImage: 'https://images.pexels.com/photos/6812543/pexels-photo-6812543.jpeg?auto=compress&cs=tinysrgb&w=400',
    caption: 'David K: Mercury-free composite fillings replacing old amalgam',
    patientAge: '41 years old',
    treatmentDuration: '1 session',
    description: 'Replacement of old silver fillings with tooth-colored composite materials',
    results: ['Invisible repairs', 'Mercury-free', 'Strengthened teeth', 'Natural appearance']
  },
  {
    id: '5',
    procedure: 'Smile Makeover',
    beforeImage: 'https://images.pexels.com/photos/6812544/pexels-photo-6812544.jpeg?auto=compress&cs=tinysrgb&w=400',
    afterImage: 'https://images.pexels.com/photos/6812545/pexels-photo-6812545.jpeg?auto=compress&cs=tinysrgb&w=400',
    caption: 'Jennifer T: Full mouth reconstruction with crowns and veneers',
    patientAge: '45 years old',
    treatmentDuration: '6 weeks',
    description: 'Comprehensive treatment combining crowns, veneers, and whitening',
    results: ['Complete transformation', 'Improved function', 'Youthful appearance', 'Enhanced confidence']
  },
  {
    id: '6',
    procedure: 'Teeth Whitening',
    beforeImage: 'https://images.pexels.com/photos/6812546/pexels-photo-6812546.jpeg?auto=compress&cs=tinysrgb&w=400',
    afterImage: 'https://images.pexels.com/photos/6812547/pexels-photo-6812547.jpeg?auto=compress&cs=tinysrgb&w=400',
    caption: 'Robert C: Laser whitening for coffee-stained teeth',
    patientAge: '39 years old',
    treatmentDuration: '90 minutes',
    description: 'Advanced laser whitening treatment for stubborn coffee and wine stains',
    results: ['7 shades whiter', 'Even color', 'Quick treatment', 'Comfortable process']
  },
  {
    id: '7',
    procedure: 'Veneers',
    beforeImage: 'https://images.pexels.com/photos/6812548/pexels-photo-6812548.jpeg?auto=compress&cs=tinysrgb&w=400',
    afterImage: 'https://images.pexels.com/photos/6812549/pexels-photo-6812549.jpeg?auto=compress&cs=tinysrgb&w=400',
    caption: 'Lisa H: Ultra-thin veneers for gap closure',
    patientAge: '29 years old',
    treatmentDuration: '3 weeks',
    description: 'Minimal-prep veneers to close gaps and improve tooth shape',
    results: ['Closed gaps', 'Minimal tooth reduction', 'Perfect proportions', 'Natural feel']
  },
  {
    id: '8',
    procedure: 'Cosmetic Fillings',
    beforeImage: 'https://images.pexels.com/photos/6812550/pexels-photo-6812550.jpeg?auto=compress&cs=tinysrgb&w=400',
    afterImage: 'https://images.pexels.com/photos/6812551/pexels-photo-6812551.jpeg?auto=compress&cs=tinysrgb&w=400',
    caption: 'Mark W: Artistic composite bonding for front teeth',
    patientAge: '33 years old',
    treatmentDuration: '2 hours',
    description: 'Composite bonding to repair chips and improve tooth contours',
    results: ['Seamless repairs', 'Color matched', 'Conservative treatment', 'Immediate results']
  }
];

const procedures = ['All', 'Smile Makeover', 'Teeth Whitening', 'Veneers', 'Cosmetic Fillings'];

const FloatingParticles: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => {
        const left = `${Math.random() * 100}%`;
        const top = `${Math.random() * 100}%`;
        const animationDelay = `${Math.random() * 10}s`;
        const animationDuration = `${8 + Math.random() * 8}s`;
        return (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left,
              top,
              animationDelay,
              animationDuration,
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-[#7E287D] to-[#A34D9D] rounded-full blur-sm" />
          </div>
        );
      })}
    </div>
  );
};

const BeforeAfterSlider: React.FC<{ item: GalleryItem; index: number }> = ({ item, index }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updateSliderPosition(e);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      updateSliderPosition(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updateSliderPosition = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    }
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(percentage);
      }
    };

    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl hover:shadow-purple-300/50 transition-all duration-500 transform hover:-translate-y-2 animate-fadeInUp"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Before/After Slider */}
      <div
        ref={containerRef}
        className="relative h-80 overflow-hidden cursor-col-resize"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {/* After Image (Background) */}
        <img
          src={item.afterImage}
          alt={`${item.procedure} after treatment`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden transition-all duration-300"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={item.beforeImage}
            alt={`${item.procedure} before treatment`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 cursor-col-resize transition-all duration-200"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-[#7E287D] to-[#A34D9D] rounded-full shadow-lg flex items-center justify-center">
            <ArrowLeft className="w-3 h-3 text-white absolute left-1" />
            <ArrowRight className="w-3 h-3 text-white absolute right-1" />
          </div>
        </div>

        {/* Before/After Labels */}
        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
          <Eye className="w-4 h-4 inline mr-1" />
          Before
        </div>
        <div className="absolute top-4 right-4 bg-gradient-to-r from-[#7E287D] to-[#A34D9D] text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
          <Sparkles className="w-4 h-4 inline mr-1" />
          After
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="bg-gradient-to-r from-[#7E287D]/10 to-[#A34D9D]/10 text-[#7E287D] px-3 py-1 rounded-full text-sm font-medium border border-[#A34D9D]/30">
            {item.procedure}
          </span>
          <div className="flex items-center text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
        </div>

        <h3 className="text-lg font-bold text-[#7E287D] mb-2">{item.caption}</h3>
        <p className="text-gray-600 text-sm mb-4">{item.description}</p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center p-3 bg-gradient-to-br from-[#7E287D]/5 to-[#A34D9D]/5 rounded-lg">
            <div className="text-sm text-gray-500">Patient Age</div>
            <div className="font-semibold text-[#7E287D]">{item.patientAge}</div>
          </div>
          <div className="text-center p-3 bg-gradient-to-br from-[#7E287D]/5 to-[#A34D9D]/5 rounded-lg">
            <div className="text-sm text-gray-500">Treatment Time</div>
            <div className="font-semibold text-[#7E287D]">{item.treatmentDuration}</div>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          {item.results.map((result, index) => (
            <div key={index} className="flex items-center text-sm text-gray-600">
              <Award className="w-4 h-4 text-[#A34D9D] mr-2 flex-shrink-0" />
              {result}
            </div>
          ))}
        </div>

        <button className="w-full bg-gradient-to-r from-[#7E287D] to-[#A34D9D] text-white font-semibold py-3 px-6 rounded-full hover:from-[#7E287D]/90 hover:to-[#A34D9D]/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          <Calendar className="w-4 h-4 inline mr-2" />
          Book Similar Treatment
        </button>
      </div>
    </div>
  );
};

export const Gallery: React.FC = () => {
  const [selectedProcedure, setSelectedProcedure] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredData = selectedProcedure === 'All'
    ? galleryData
    : galleryData.filter(item => item.procedure === selectedProcedure);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const handleProcedureChange = (procedure: string) => {
    setSelectedProcedure(procedure);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 relative overflow-hidden">
      <FloatingParticles />

      {/* Header */}
      <div className="relative z-10 pt-32 pb-12 animate-fadeIn">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-slideDown">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#7E287D] to-[#A34D9D] rounded-full mb-8 animate-pulse shadow-2xl">
              <Camera className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#7E287D] via-[#A34D9D] to-purple-600 bg-clip-text text-transparent mb-6 animate-slideUp">
              Smile Gallery
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed animate-fadeInUp delay-200">
              Witness the incredible transformations achieved through our pain-free dental treatments.
              Each smile tells a story of renewed confidence and exceptional care.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fadeInUp delay-300">
            {procedures.map((procedure) => (
              <button
                key={procedure}
                onClick={() => handleProcedureChange(procedure)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedProcedure === procedure
                    ? 'bg-gradient-to-r from-[#7E287D] to-[#A34D9D] text-white shadow-lg'
                    : 'bg-white/90 text-gray-700 hover:bg-white shadow-md hover:shadow-lg'
                }`}
              >
                <Filter className="w-4 h-4 inline mr-2" />
                {procedure}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center mb-8 animate-fadeInUp delay-400">
            <p className="text-gray-700">
              Showing <span className="font-semibold text-[#7E287D]">{filteredData.length}</span> amazing transformations
              {selectedProcedure !== 'All' && (
                <span> for <span className="font-semibold text-[#A34D9D]">{selectedProcedure}</span></span>
              )}
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentItems.map((item, index) => (
              <BeforeAfterSlider key={item.id} item={item} index={index} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-4 animate-fadeInUp">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-gradient-to-r hover:from-[#7E287D] hover:to-[#A34D9D] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600 hover:text-white" />
              </button>

              <div className="flex space-x-2">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`w-10 h-10 rounded-full font-semibold transition-all duration-300 transform hover:scale-110 ${
                      currentPage === index + 1
                        ? 'bg-gradient-to-r from-[#7E287D] to-[#A34D9D] text-white shadow-lg'
                        : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-gradient-to-r hover:from-[#7E287D] hover:to-[#A34D9D] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-110"
              >
                <ChevronRight className="w-5 h-5 text-gray-600 hover:text-white" />
              </button>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-20 text-center animate-fadeInUp delay-500">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-[#A34D9D]/30 transform transition-all duration-500 hover:scale-105">
              <h3 className="text-3xl font-bold text-[#7E287D] mb-4">
                Ready for Your Own Transformation?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied patients who have transformed their smiles with our pain-free treatments.
                Your dream smile is just one appointment away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-[#7E287D] to-[#A34D9D] text-white font-bold py-4 px-8 rounded-full text-lg hover:from-[#7E287D]/90 hover:to-[#A34D9D]/90 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-purple-400/50">
                  <Calendar className="w-6 h-6 inline mr-3" />
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
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

        .animate-float {
          animation: float ease-in-out infinite;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-400 {
          animation-delay: 400ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
