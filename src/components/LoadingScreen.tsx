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
        {/* Logo */}
        <div className="relative">
          <div className="w-32 h-32 mx-auto bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-float">
            <img 
              src="/lovable-uploads/88b0f847-3165-4711-b9d1-33072d053667.png" 
              alt="CGH Earth Ayurveda" 
              className="h-16 w-auto"
            />
          </div>
          <div className="absolute inset-0 w-32 h-32 mx-auto border-2 border-white/20 rounded-full animate-ping"></div>
        </div>

        {/* Brand Name */}
        <div className="space-y-3">
          <h1 className="text-5xl font-bold text-white tracking-wide font-serif">
            Ayurveda Wellness
          </h1>
          <p className="text-white/90 text-lg font-medium">
            Health in Totality
          </p>
          <p className="text-white/70 text-sm">
            Treating the Source, Not the Symptom
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-white/70 text-sm mt-2">
            Preparing your wellness journey...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;