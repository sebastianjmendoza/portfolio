
import React, { useEffect, useRef } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface HeroSectionProps {
  title: string;
  category: string;
  description: string;
  image: string;
}

const HeroSection = ({ title, category, description, image }: HeroSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'translate-y-4');
        entry.target.classList.add('opacity-100', 'translate-y-0');
      }
    }, {
      threshold: 0.1
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center items-center bg-black text-white opacity-0 translate-y-4 transition-all duration-700 py-24 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="relative w-full max-w-3xl mx-auto">
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-center">{title}</h1>
          <p className="text-cream uppercase tracking-widest text-sm font-light mb-8 text-center">{category}</p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-center mb-16">{description}</p>
          
          {/* Featured image with forced landscape aspect ratio */}
          <div className="w-full mx-auto mt-12">
            <div className="rounded-md overflow-hidden shadow-xl">
              <div className="w-full aspect-[16/9]">
                <img 
                  src={image} 
                  alt={`${title} featured image`} 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
