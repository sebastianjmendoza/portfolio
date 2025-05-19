
import { useEffect, useRef, useState } from 'react';

// Gallery items for 2x4 layout
const galleryItems = [
    {
    id: 1,
    image: "images/Gotham.png",
    title: "Typeface Poster",
    size: "square"
  },
   {
    id: 2,
    image: "images/Cd_cover.png",
    title: "Amara Bleu's Vinyl and CD Cover",
    size: "square"
  },
  {
    id: 3,
    image: "images/Magazine_1.png",
    title: "Communication Arts Magazine",
    size: "square"
  },
   {
    id: 4,
    image: "images/Csm_brochure.png",
    title: "CSM Wellness Center Tri-fold Brochure",
    size: "square"
  },
  
  {
    id: 5,
    image: "images/Snake.png",
    title: "Hide and Snake: Children's Book",
    size: "square"
  },
  {
    id: 6,
    image: "images/Bird.png",
    title: "Scientific Illustration",
    size: "square"
  },
  {
    id: 7,
    image: "images/Magazine_2.png",
    title: "Editorial Design",
    size: "square"
  },
  {
    id: 8,
    image: "images/Mad_hatter.png", 
    title: "Character Design Study",
    size: "square"
  }
];

const Gallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force Gallery visibility and rendering
    if (galleryRef.current) {
      galleryRef.current.style.display = 'grid';
      galleryRef.current.style.opacity = '1';
      galleryRef.current.style.visibility = 'visible';
    }
    
    // Preload all images to ensure they're visible
    galleryItems.forEach(item => {
      const img = new Image();
      img.src = item.image;
      img.onload = () => {
        // Each image loaded successfully
      };
    });
    
    // Apply animation to items with a small delay
    const items = galleryRef.current?.querySelectorAll('.gallery-item');
    if (items) {
      Array.from(items).forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('opacity-100', 'translate-y-0');
        }, index * 100);
      });
    }
  }, []);

  return (
    <div 
      ref={galleryRef}
      className="grid grid-cols-2 md:grid-cols-2 gap-4 max-w-6xl mx-auto"
      style={{
        display: 'grid',
        opacity: 1,
        visibility: 'visible'
      }}
    >
      {galleryItems.map((item) => (
        <div 
          key={item.id}
          className="gallery-item opacity-0 translate-y-4 transition-all duration-700 relative overflow-hidden cursor-pointer group aspect-square"
        >
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="eager"
              style={{ visibility: 'visible', opacity: 1 }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <h3 className="text-white p-4 font-medium tracking-wide">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
