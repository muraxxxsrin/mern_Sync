import { Origami } from "lucide-react";
import AuthImagePattern from "../components/AuthImagePattern";


const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6">
        {/* Icon Display */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div
              className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center
             justify-center  transform hover:scale-125 hover:rotate-180 transition-transform "
            >
              <Origami className="w-8 h-8 text-primary  animate-bounce animate-spin" />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <AuthImagePattern
        title="Join our community"
        subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
      />
      </div>
      
    </div>
  );
};

export default NoChatSelected;