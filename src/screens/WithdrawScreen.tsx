import Header from "@/components/Header";
import { Check } from "lucide-react";

interface WithdrawScreenProps {
  balance: number;
  onWithdraw: () => void;
}

const WithdrawScreen = ({ balance, onWithdraw }: WithdrawScreenProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header balance={balance} />
      
      <div className="px-6 py-8 max-w-md mx-auto animate-slide-up">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-3">
            Congratulations!
          </h1>
          <p className="text-foreground text-lg">
            Your balance is available for immediate withdrawal! 🎉
          </p>
        </div>

        <div className="earnings-box text-center mb-8">
          <p className="text-lg font-bold text-foreground flex items-center justify-center gap-2">
            <span className="text-2xl">✅</span>
            YOU'VE ALREADY WON US$ {balance.toFixed(0)}!
          </p>
          <p className="text-muted-foreground mt-3">
            These are your earnings for the 3 surveys you just completed.
          </p>
        </div>

        <p className="text-center text-foreground mb-8">
          Click the button below and see the immediate withdrawal guide! 👇
        </p>

        <button
          onClick={onWithdraw}
          className="btn-primary-pill pulse-animation flex items-center justify-center gap-3"
        >
          <Check className="w-6 h-6" />
          Withdraw my balance now!
        </button>
      </div>
    </div>
  );
};

export default WithdrawScreen;
