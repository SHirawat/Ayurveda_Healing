import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-hero flex items-center justify-center z-50">
      <div className="text-center space-y-8 animate-fade-in">
        {/* Ayurveda Symbol */}
        <div className="relative">
          <div className="w-24 h-24 mx-auto bg-ayur-cream rounded-full flex items-center justify-center animate-float">
            <svg
              viewBox="0 0 100 100"
              className="w-12 h-12 text-ayur-bronze animate-spin-slow"
              fill="currentColor"
            >
              <path d="M50 20 C35 30, 35 50, 50 60 C65 50, 65 30, 50 20 Z" />
              <circle cx="50" cy="50" r="5" />
              <path d="M50 80 C35 70, 35 50, 50 40 C65 50, 65 70, 50 80 Z" />
            </svg>
          </div>
          <div className="absolute inset-0 w-24 h-24 mx-auto border-2 border-ayur-cream/30 rounded-full animate-ping"></div>
        </div>

        {/* Brand Name */}
        <div className="space-y-2">
          <h1 className="text-5xl font-bold text-ayur-cream tracking-wide">
            CGH Earth Ayurveda
          </h1>
          <p className="text-ayur-cream/80 text-lg">
            Health in Totality
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="h-1 bg-ayur-cream/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-ayur-cream transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-ayur-cream/60 text-sm mt-2">
            Preparing your wellness journey...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;