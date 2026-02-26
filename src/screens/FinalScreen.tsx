import { useState, useEffect } from "react";
import Header from "@/components/Header";
import FacebookComments from "@/components/FacebookComments";
import { Volume2 } from "lucide-react";

interface FinalScreenProps {
  balance: number;
}

const FinalScreen = ({ balance }: FinalScreenProps) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Show button after 11 minutes (660000ms)
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 660000);

    return () => clearTimeout(timer);
  }, []);

  const handleFinalClick = () => {
    window.location.href = "https://creator-stack-pack.checkoutpage.com/creator-pack";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header balance={balance} />
      
      <div className="px-4 py-4">
        <div className="bg-gray-50 rounded-xl p-4 mb-4 animate-slide-up">
          <p className="text-center font-semibold text-foreground">
            There is very little time left to withdraw your available balance. 👇
          </p>
        </div>

        <div className="w-full aspect-video bg-black rounded-xl overflow-hidden mb-4">
          <iframe
            src="https://player-vz-a11b5e43-1b7.tv.pandavideo.com.br/embed/?v=288cb514-46fc-42fc-b6ef-a6558ea7b2bd"
            className="w-full h-full"
            allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
            allowFullScreen
          />
        </div>

        {showButton && (
          <button
            onClick={handleFinalClick}
            className="w-full bg-destructive text-destructive-foreground font-bold py-5 px-8 rounded-full shadow-xl text-xl mb-4 pulse-red-animation"
          >
            I Want Pay The Fee
          </button>
        )}

        <div className="flex items-center justify-center gap-2 text-foreground mb-6 animate-slide-up">
          <Volume2 className="w-5 h-5" />
          <span>Check if your sound is turned on</span>
        </div>

        <FacebookComments />
      </div>
    </div>
  );
};

export default FinalScreen;
