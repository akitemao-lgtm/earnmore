import { Lock } from "lucide-react";

const blockedItems = [
  { title: "Amazing deal revealed...", channel: "TopDeals", views: "120K views" },
  { title: "You won't believe this...", channel: "Viral Clips", views: "89K views" },
  { title: "Secret method exposed...", channel: "LifeHacks", views: "245K views" },
  { title: "Incredible savings trick...", channel: "MoneyTips", views: "56K views" },
];

const BlockedContent = () => {
  return (
    <div className="mt-6 space-y-4">
      {blockedItems.map((item, index) => (
        <div
          key={index}
          className="relative rounded-xl overflow-hidden bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 h-48"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-300/50 to-purple-300/50" />
          <div className="blocked-overlay">
            <div className="bg-black/70 backdrop-blur-md rounded-xl px-6 py-4 flex flex-col items-center">
              <Lock className="w-6 h-6 text-white mb-2" />
              <span className="text-white font-semibold text-lg">Blocked content</span>
              <span className="text-white/80 text-sm">Rate the videos selected first.</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-300 blur-sm" />
            <div className="space-y-1">
              <div className="h-3 w-32 bg-gray-300 rounded blur-sm" />
              <div className="h-2 w-20 bg-gray-300 rounded blur-sm" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlockedContent;
