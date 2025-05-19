
import React from 'react';
import { Image } from 'lucide-react';

interface FinalProductSectionProps {
  images: string[];
}

const FinalProductSection = ({ images }: FinalProductSectionProps) => {
  return (
    <section className="py-24 bg-burgundy text-white opacity-0 translate-y-4 transition-all duration-700">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-playfair text-4xl font-bold mb-12 relative flex items-center">
          <Image className="mr-3" /> Final Product
          <span className="absolute -bottom-4 left-0 h-0.5 w-24 bg-black"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-md shadow-xl">
              <div className="max-h-[1200px] flex items-center justify-center">
                <img 
                  src={img} 
                  alt={`Final product ${idx + 1}`} 
                  className="w-full h-auto object-contain max-h-[1200px] transform hover:scale-105 transition-transform duration-500"
                  loading="eager" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalProductSection;
