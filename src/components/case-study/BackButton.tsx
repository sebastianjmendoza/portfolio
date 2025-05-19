
import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  onClose: () => void;
}

const BackButton = ({ onClose }: BackButtonProps) => {
  const handleClick = () => {
    onClose();
    // Add a small delay to ensure the main page is loaded before scrolling
    setTimeout(() => {
      const portfolioSection = document.getElementById('work');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <button 
      onClick={handleClick} 
      className="fixed top-8 left-8 z-50 flex items-center gap-2 text-white bg-black px-4 py-2 hover:bg-white hover:text-black transition-colors"
    >
      <ArrowLeft size={20} />
      Back to Portfolio
    </button>
  );
};

export default BackButton;
