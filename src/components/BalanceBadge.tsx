import { Wallet } from "lucide-react";

interface BalanceBadgeProps {
  balance: number;
}

const BalanceBadge = ({ balance }: BalanceBadgeProps) => {
  return (
    <div className="balance-badge">
      <Wallet className="w-5 h-5 text-primary" />
      <span>US$ {balance.toFixed(2)}</span>
    </div>
  );
};

export default BalanceBadge;
