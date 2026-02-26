import YoutubeLogo from "./YoutubeLogo";
import BalanceBadge from "./BalanceBadge";

interface HeaderProps {
  balance: number;
}

const Header = ({ balance }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border px-4 py-3 flex items-center justify-between">
      <YoutubeLogo size="sm" />
      <BalanceBadge balance={balance} />
    </header>
  );
};

export default Header;
