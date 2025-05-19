
import { AvailabilityToggle } from "./AvailabilityToggle";

export const HeroContent = () => {
  return (
    <>
      <p 
        className="mb-5 text-lg animate-fade-in opacity-0" 
        style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
      >
        📍 Based in San Francisco
      </p>
      
      <p 
        className="mb-8 opacity-80 animate-fade-in opacity-0 max-w-xs sm:max-w-lg mx-auto" 
        style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
      >
        According to ChatGPT: "In every design Sebastian creates, he relies on the 3 Ws: the Who, the What, and the Why" 
      </p>
      
      <p 
        className="mb-8 opacity-80 animate-fade-in opacity-0 max-w-xs sm:max-w-lg mx-auto" 
        style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}
      >
        Actually... I am not famous enough to be on ChatGPT, but I do rely on the 3Ws 🤓
      </p>
      
      <p 
        className="mb-10 opacity-80 animate-fade-in opacity-0 max-w-xs sm:max-w-lg mx-auto" 
        style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}
      >
        I also balance storytelling and visuals to create something cool and unforgettable.
      </p>
      
      <div 
        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5 animate-fade-in opacity-0" 
        style={{ animationDelay: '2.1s', animationFillMode: 'forwards' }}
      >
        <a 
          href="#contact" 
          className="bg-burgundy text-white px-8 py-4 font-medium hover:bg-burgundy/80 transition-colors"
        >
          Contact
        </a>
        <a 
          href="#work" 
          className="border border-white px-8 py-4 font-medium hover:bg-white hover:text-black transition-colors"
        >
          See my Work
        </a>
      </div>
      
      <AvailabilityToggle />
    </>
  );
};
