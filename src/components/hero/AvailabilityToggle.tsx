
import { useState } from 'react';
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";

export const AvailabilityToggle = () => {
  const [isAvailable, setIsAvailable] = useState(true);
  
  return (
    <div 
      className="mt-8 animate-fade-in opacity-0" 
      style={{ animationDelay: '2.4s', animationFillMode: 'forwards' }}
    >
      <Toggle 
        pressed={isAvailable} 
        onPressedChange={setIsAvailable} 
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-full transition-colors",
          isAvailable ? "bg-green-500 text-white" : "bg-gray-400 text-white"
        )}
      >
        <span className="flex items-center">
          <span className={cn(
            "w-2 h-2 rounded-full mr-2",
            isAvailable ? "bg-green-300" : "bg-white/60"
          )}></span>
          {isAvailable ? "Available to Work" : "Not Available"}
        </span>
      </Toggle>
    </div>
  );
};
