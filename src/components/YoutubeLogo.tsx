interface YoutubeLogoProps {
  size?: "sm" | "lg";
}

const YoutubeLogo = ({ size = "sm" }: YoutubeLogoProps) => {
  const iconSize = size === "lg" ? 48 : 28;
  const textSize = size === "lg" ? "text-3xl" : "text-xl";

  return (
    <div className="flex items-center gap-1">
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="34" rx="8" y="7" fill="#FF0000" />
        <path d="M20 16L32 24L20 32V16Z" fill="white" />
      </svg>
      <span className={`font-bold text-foreground ${textSize}`}>YouTube</span>
    </div>
  );
};

export default YoutubeLogo;
