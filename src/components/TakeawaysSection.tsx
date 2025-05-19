
import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface TakeawaysSectionProps {
  onClose: () => void;
  isMobile?: boolean;
  nextProjectIndex: number;
  onNextProject: (index: number) => void;
  takeaways: string[];
  projectKey?: string;
}

const TakeawaysSection = ({ 
  onClose, 
  isMobile, 
  nextProjectIndex, 
  onNextProject, 
  takeaways,
  projectKey
}: TakeawaysSectionProps) => {
  const navigate = useNavigate();
  
  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    // Add a small delay to ensure the main page is loaded before scrolling
    setTimeout(() => {
      const portfolioSection = document.getElementById('work');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleNextProjectClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Update to next project first
    onNextProject(nextProjectIndex);
  };

  const handleOtherWorkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Close current case study first
    onClose();
    
    // Unlock scrolling before navigation
    document.body.style.overflow = '';
    
    // Navigate to other work
    navigate('/other-work');
    
    // Reset any page state issues by setting a flag
    sessionStorage.setItem('manualNavigation', 'true');
  };

  const buttonClasses = isMobile 
    ? "px-8 py-4" 
    : "px-8 py-4";

  return (
    <section className="py-24 bg-white text-black opacity-0 translate-y-4 transition-all duration-700">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-playfair text-4xl font-bold mb-12 relative">
          Takeaways
          <span className="absolute -bottom-4 left-0 h-0.5 w-24 bg-burgundy"></span>
        </h2>
        <div className="mb-16">
          <ul className="list-disc pl-6 mb-8 text-black/80 space-y-4">
            {takeaways.map((takeaway, index) => (
              <li key={index} className="text-lg">{takeaway}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {projectKey === 'quillJournalingApp' ? (
            <a 
              href="#" 
              onClick={handleOtherWorkClick} 
              className={`bg-burgundy text-white ${buttonClasses} font-medium hover:bg-burgundy/80 transition-colors text-center flex items-center justify-center`}
            >
              See Other Work <ArrowRight className="ml-1 h-4 w-4 inline" />
            </a>
          ) : (
            <a 
              href="#" 
              onClick={handleNextProjectClick} 
              className={`bg-burgundy text-white ${buttonClasses} font-medium hover:bg-burgundy/80 transition-colors text-center flex items-center justify-center`}
            >
              See Next Project <ArrowRight className="ml-1 h-4 w-4 inline" />
            </a>
          )}
          <a 
            href="https://www.figma.com/proto/dEDHndGzMhOvefGou5HcHA/QR-code-system?page-id=26%3A2&node-id=26-3&starting-point-node-id=47%3A30&hide-ui=1&t=ylcOIYt78vReE2ML-8" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`border border-black ${buttonClasses} font-medium hover:bg-black hover:text-white transition-colors text-center flex items-center justify-center`}
          >
            See Prototype <ExternalLink className="ml-1 h-4 w-4 inline" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TakeawaysSection;
