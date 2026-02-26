import { Check } from "lucide-react";

interface VideoInfoProps {
  title: string;
  views: string;
  daysAgo: string;
  channelName: string;
  channelLogo?: string;
}

const VideoInfo = ({ title, views, daysAgo, channelName, channelLogo }: VideoInfoProps) => {
  return (
    <div className="px-4 py-3 animate-slide-up">
      <h1 className="text-lg font-semibold text-foreground">{title}</h1>
      <p className="text-sm text-muted-foreground mt-1">
        {views} views - {daysAgo}
      </p>
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm overflow-hidden">
            {channelLogo ? (
              <img src={channelLogo} alt={channelName} className="w-full h-full object-cover" />
            ) : (
              channelName.charAt(0)
            )}
          </div>
          <span className="font-medium text-foreground">{channelName}</span>
        </div>
        <div className="partner-badge">
          Partner verified
          <Check className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
