import YoutubeLogo from "@/components/YoutubeLogo";

interface LandingScreenProps {
  onStart: () => void;
}

const LandingScreen = ({ onStart }: LandingScreenProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-between px-6 py-12">
      <div className="flex-1 flex flex-col items-center justify-center max-w-sm">
        <div className="mb-16">
          <YoutubeLogo size="lg" />
        </div>
        
        <div className="text-center space-y-6 animate-slide-up">
          <h1 className="text-2xl font-bold text-foreground">
            Earn money by rating videos
          </h1>
          <div className="space-y-4 text-foreground">
            <p>
              Congratulations! You've just earned a free license to review ads from major companies in our app.
            </p>
            <p>
              Click the button below to start watching the videos and claim your bonuses.
            </p>
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-sm mt-12">
        <button
          onClick={onStart}
          className="btn-primary-pill pulse-animation"
        >
          Start now!
        </button>
      </div>
    </div>
  );
};

export default LandingScreen;
