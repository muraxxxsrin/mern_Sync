
  
import { Stars, Rocket, Heart, Sun, Cloud, Target, Compass, ThumbsUp, Headphones, Calendar} from "lucide-react";

const AuthImagePattern = ({ title, subtitle }) => {
  const icons = [Stars, Rocket, Heart, Sun, Cloud, Target, Compass, ThumbsUp, Headphones, Calendar]
    ;

  return (
    <div className="hidden lg:flex items-center justify-center hover:cursor-not-allowed bg-base-200 p-12">
      <div className="max-w-md w-full text-center">
        {/* Add keyframe animation inside the component */}
        <style>
          {`
            @keyframes fadeInOut {
              0% {
                opacity: 0;
              }
              50% {
                opacity: 1;
              }
              100% {
                opacity: 0;
              }
            }
          `}
        </style>

        {/* Animated Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6 max-w-[180px] mx-auto">
          {[...Array(9)].map((_, i) => {
            const Icon = icons[i]; 
            return (
              <div
                key={i}
                className={`aspect-square w-14 h-14  rounded-full flex items-center justify-center opacity-0`}
                style={{
                  animation: `fadeInOut 3s ease-in-out infinite ${i * 0.5}s`, 
                }}
              >
                <Icon className="w-6 h-6 text-white opacity-80" />
              </div>
            );
          })}
        </div>

        {/* Title & Subtitle */}
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;



