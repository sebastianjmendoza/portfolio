
import { cn } from "@/lib/utils";
import { AnimationStateType } from "./DesignTypeAnimator";

type DesignerTitleProps = {
  designTypes: string[];
  animationState: AnimationStateType;
  isMobile: boolean;
};

export const DesignerTitle = ({ 
  designTypes, 
  animationState, 
  isMobile 
}: DesignerTitleProps) => {
  const { designType, designerMoved } = animationState;

  // Function to determine whether to use "a" or "an"
  const getArticle = (type: string) => {
    return type === "Interaction" ? "an" : "a";
  };

  return (
    <>
      <span 
        className="block mb-1 text-sm uppercase tracking-widest font-light animate-fade-in opacity-0" 
        style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
      >
        Hi there, I am{' '}
        {designTypes.map((type) => (
          <span 
            key={`article-${type}`}
            className="transition-opacity duration-700 ease-in-out"
            style={{
              opacity: designType === type ? 1 : 0,
              position: designType === type ? 'relative' : 'absolute',
              visibility: designType === type ? 'visible' : 'hidden',
            }}
          >
            {getArticle(type)}
          </span>
        ))}
        :
      </span>
      
      <h1 
        className="font-playfair text-4xl sm:text-5xl md:text-7xl font-bold mb-6 animate-fade-in opacity-0 break-words w-full" 
        style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
      >
        <div className={cn(
          "flex flex-wrap justify-center", 
          isMobile ? "flex-col items-center space-y-2" : "space-x-3"
        )}>
          <span className="text-burgundy inline-flex items-baseline relative">
            {designTypes.map((type) => (
              <span 
                key={type}
                className="transition-all duration-700 ease-in-out whitespace-nowrap absolute"
                style={{
                  opacity: designType === type ? 1 : 0,
                  transform: `translateY(${designType === type ? 0 : '10px'})`,
                  position: designType === type ? 'relative' : 'absolute',
                  left: 0,
                }}
              >
                {type}
              </span>
            ))}
          </span>
          <span 
            className="whitespace-nowrap"
            style={{
              transition: 'transform 1s ease-in-out',
              transform: designerMoved ? 'translateX(0)' : 'translateX(-15px)',
              opacity: 1
            }}
          >
            Designer
          </span>
        </div>
      </h1>
    </>
  );
};
