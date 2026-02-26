import { useState } from "react";
import LandingScreen from "@/screens/LandingScreen";
import VideoScreen from "@/screens/VideoScreen";
import WithdrawScreen from "@/screens/WithdrawScreen";
import FinalScreen from "@/screens/FinalScreen";
import burgerville from "@/assets/burgerville-logo.webp";
import always from "@/assets/always-logo.webp";
import xumo from "@/assets/xumo-logo.webp";

type Screen = "landing" | "video1" | "video2" | "video3" | "withdraw" | "final";

const videoData = {
  video1: {
    embedId: "9fd5a3df-e337-4b87-8c1e-ae29e8c34922",
    title: "Burgerville Big Sassy Cheeseburger",
    views: "251K",
    daysAgo: "4 days ago",
    channelName: "Burgerville",
    channelLogo: burgerville,
  },
  video2: {
    embedId: "f43b55e8-6fea-49e7-977e-e15b7a5802e3",
    title: "Always Ultra Thin – Fear No Gush",
    views: "1.1M",
    daysAgo: "15 days ago",
    channelName: "Always",
    channelLogo: always,
  },
  video3: {
    embedId: "7a3070d1-eb67-4d4a-85d1-fb6c9afdede7",
    title: "Losing is Hard",
    views: "45K",
    daysAgo: "2 days ago",
    channelName: "Xumo",
    channelLogo: xumo,
  },
};

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("landing");
  const [balance, setBalance] = useState(0);

  const handleVideoComplete = (nextScreen: Screen, earnAmount: number = 60) => {
    setBalance((prev) => prev + earnAmount);
    setCurrentScreen(nextScreen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "landing":
        return <LandingScreen onStart={() => setCurrentScreen("video1")} />;
      case "video1":
        return (
          <VideoScreen
            balance={balance}
            videoData={videoData.video1}
            onComplete={() => handleVideoComplete("video2")}
          />
        );
      case "video2":
        return (
          <VideoScreen
            balance={balance}
            videoData={videoData.video2}
            onComplete={() => handleVideoComplete("video3")}
          />
        );
      case "video3":
        return (
          <VideoScreen
            balance={balance}
            videoData={videoData.video3}
            onComplete={() => handleVideoComplete("withdraw")}
          />
        );
      case "withdraw":
        return (
          <WithdrawScreen
            balance={balance}
            onWithdraw={() => setCurrentScreen("final")}
          />
        );
      case "final":
        return <FinalScreen balance={balance} />;
      default:
        return <LandingScreen onStart={() => setCurrentScreen("video1")} />;
    }
  };

  return <div className="max-w-lg mx-auto">{renderScreen()}</div>;
};

export default Index;
