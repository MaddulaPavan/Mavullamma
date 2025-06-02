import React from 'react';
import { X } from 'lucide-react';
import { Button } from './button';

interface ImageModalProps {
  imageUrl: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
      <div className="relative max-w-7xl max-h-[90vh] mx-4">
        <Button
          variant="ghost"
          size="icon"
          className="absolute -top-12 right-0 text-white hover:text-gray-300"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>
        <img
          src={imageUrl}
          alt="Full size car image"
          className="max-h-[90vh] w-auto object-contain"
        />
      </div>
    </div>
  );
};

export default ImageModal; 