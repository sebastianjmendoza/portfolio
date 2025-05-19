
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  link: string;
  index: number;
  description: string;
  onProjectClick: (index: number) => void;
  className?: string;
}

const ProjectCard = ({ 
  title, 
  category, 
  image, 
  link, 
  index, 
  description, 
  onProjectClick,
  className
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // Get mouse position relative to the card center
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    setMousePosition({ x: -x, y: -y });
  };

  const handleClick = () => {
    onProjectClick(index);
  };
  
  return (
    <div 
      className={cn(
        "group relative overflow-hidden opacity-0 animate-fade-in cursor-pointer",
        className
      )}
      style={{ 
        animationDelay: `${index * 0.2}s`,
        transform: isHovered ? `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) scale3d(1.02, 1.02, 1.02)` : '',
        transition: 'transform 0.4s ease'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      <div className="block w-full h-full">
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className={cn(
              "w-full h-full object-cover object-center transition-transform duration-700",
              isHovered ? "scale-110" : "scale-100"
            )}
          />
          <div 
            className={cn(
              "absolute inset-0 bg-black/70 flex flex-col justify-center items-center p-6 transition-opacity duration-500",
              isHovered ? "opacity-100" : "opacity-0"
            )}
          >
            <p className="text-cream uppercase tracking-widest text-sm font-light mb-2">{category}</p>
            <h3 className="font-playfair text-white text-2xl font-bold text-center">{title}</h3>
            <span className="mt-4 inline-block py-2 px-4 border border-white/30 text-white text-sm uppercase tracking-wider hover:bg-burgundy hover:border-burgundy hover:text-white transition-colors duration-300">
              View Project
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
