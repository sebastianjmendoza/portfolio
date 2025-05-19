
import { useRef } from 'react';
import { useIsMobile } from "@/hooks/use-mobile";
import { DesignTypeAnimator } from "./hero/DesignTypeAnimator";
import { DesignerTitle } from "./hero/DesignerTitle";
import { HeroContent } from "./hero/HeroContent";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const designTypes = ["Interaction", "Web", "UI/UX", "Graphic"];
  const isMobile = useIsMobile();
  const animationState = DesignTypeAnimator({ designTypes });

  // Set up intersection observer to trigger animations when the hero section is visible
  const observerRef = useRef<IntersectionObserver | null>(null);

  if (heroRef.current && !observerRef.current) {
    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100');
      }
    }, {
      threshold: 0.1
    });
    observerRef.current.observe(heroRef.current);
  }

  return (
    <section 
      id="home" 
      ref={heroRef} 
      className="min-h-screen bg-black text-white relative opacity-0 transition-opacity duration-1000 flex items-center overflow-hidden"
    >
      <div className="container mx-auto px-6 py-20 relative z-10 w-full">
        <div className="text-center flex flex-col justify-center items-center max-w-3xl mx-auto">
          <DesignerTitle 
            designTypes={designTypes} 
            animationState={animationState} 
            isMobile={isMobile} 
          />
          <HeroContent />
        </div>
      </div>
    </section>
  );
};

export default Hero;
