import { useEffect } from "react";

interface EarningsModalProps {
  amount: number;
  onClose: () => void;
}

const EarningsModal = ({ amount, onClose }: EarningsModalProps) => {
  useEffect(() => {
    // Play cash sound
    const audio = new Audio("/cash-sound.mp3");
    audio.volume = 0.6;
    audio.play().catch(() => {
      // Silently handle if autoplay is blocked
    });
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center animate-fade-in shadow-2xl">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Congratulations!</h2>
        <p className="text-lg text-muted-foreground">
          You earned{" "}
          <span className="text-primary font-bold">US$ {amount.toFixed(0)}!</span>
        </p>
        <p className="text-sm text-muted-foreground mt-4">Tap anywhere to continue</p>
      </div>
    </div>
  );
};

export default EarningsModal;
