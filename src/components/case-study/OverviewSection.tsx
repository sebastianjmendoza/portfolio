
import React from 'react';

interface OverviewSectionProps {
  challenge: string;
  challengeMore: string;
  solution: string;
  solutionPoints: string[];
}

const OverviewSection = ({ 
  challenge, 
  challengeMore, 
  solution, 
  solutionPoints 
}: OverviewSectionProps) => {
  return (
    <section className="py-24 bg-cream opacity-0 translate-y-4 transition-all duration-700">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-playfair text-4xl font-bold mb-12 relative">
          Overview
          <span className="absolute -bottom-4 left-0 h-0.5 w-24 bg-black"></span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">The Challenge</h3>
            <p className="text-gray-800 mb-8">{challenge}</p>
            <p className="text-gray-800 mb-8">{challengeMore}</p>
          </div>
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">The Solution</h3>
            <p className="text-gray-800 mb-4">{solution}</p>
            
            <ul className="list-disc pl-6 mb-8 text-gray-800 space-y-2">
              {solutionPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
