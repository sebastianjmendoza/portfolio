
import { useEffect, useState } from 'react';

type DesignTypeAnimatorProps = {
  designTypes: string[];
  initialType?: string;
  animationInterval?: number;
};

export type AnimationStateType = {
  designType: string;
  designerMoved: boolean;
};

export const DesignTypeAnimator = ({ 
  designTypes, 
  initialType = "Interaction",
  animationInterval = 4000
}: DesignTypeAnimatorProps) => {
  const [animationState, setAnimationState] = useState<AnimationStateType>({
    designType: initialType,
    designerMoved: true
  });

  useEffect(() => {
    // Animation interval for changing design types
    const intervalId = setInterval(() => {
      // First animate the design type change
      setAnimationState(prev => ({
        ...prev,
        designerMoved: false
      }));
      
      // After a short delay, change the design type
      setTimeout(() => {
        setAnimationState(prev => {
          const currentIndex = designTypes.indexOf(prev.designType);
          const nextIndex = (currentIndex + 1) % designTypes.length;
          return {
            ...prev,
            designType: designTypes[nextIndex]
          };
        });
        
        // After changing the design type, animate the designer text position
        setTimeout(() => {
          setAnimationState(prev => ({
            ...prev,
            designerMoved: true
          }));
        }, 800); // Increased delay for smoother animation
      }, 300); // Increased delay for smoother transition
    }, animationInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [designTypes, animationInterval]);

  return animationState;
};
