
import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface ProcessItemProps {
  title: string;
  number: number;
  images: string[];
  description: string;
}

const ProcessItem = ({ title, number, images, description }: ProcessItemProps) => {
  return (
    <div className="text-center">
      <h3 className="font-playfair text-2xl font-bold mb-4">{title}</h3>
      <Dialog>
        <DialogTrigger asChild>
          <div className="rounded-full bg-burgundy w-16 h-16 mx-auto mb-4 flex items-center justify-center cursor-pointer hover:bg-burgundy/80 transition-colors">
            <span className="text-2xl">{number}</span>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-3xl">
          <h2 className="font-playfair text-2xl font-bold mb-6">{title} Phase</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {images.map((img, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden">
                <img 
                  src={img} 
                  alt={`${title} process ${idx + 1}`} 
                  className="w-full h-auto object-cover" 
                />
              </div>
            ))}
          </div>
          <p className="mt-4 text-gray-700">{description}</p>
        </DialogContent>
      </Dialog>
      <p className="text-gray-300">
        {description.substring(0, description.indexOf('.') + 1)}
      </p>
    </div>
  );
};

export default ProcessItem;
