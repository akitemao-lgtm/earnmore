import { useState } from "react";
import Header from "@/components/Header";
import VideoInfo from "@/components/VideoInfo";
import QuestionCard from "@/components/QuestionCard";
import BlockedContent from "@/components/BlockedContent";
import EarningsModal from "@/components/EarningsModal";

interface VideoData {
  embedId: string;
  title: string;
  views: string;
  daysAgo: string;
  channelName: string;
  channelLogo?: string;
}

interface VideoScreenProps {
  balance: number;
  videoData: VideoData;
  onComplete: () => void;
}

const VideoScreen = ({ balance, videoData, onComplete }: VideoScreenProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleAnswer = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    onComplete();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header balance={balance} />
      
      <div className="w-full aspect-video bg-black">
        <iframe
          src={`https://player-vz-a11b5e43-1b7.tv.pandavideo.com.br/embed/?v=${videoData.embedId}`}
          className="w-full h-full"
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
          allowFullScreen
        />
      </div>

      <VideoInfo
        title={videoData.title}
        views={videoData.views}
        daysAgo={videoData.daysAgo}
        channelName={videoData.channelName}
        channelLogo={videoData.channelLogo}
      />

      <div className="px-4 mt-4">
        <QuestionCard onAnswer={handleAnswer} />
      </div>

      <div className="px-4 pb-8">
        <BlockedContent />
      </div>

      {showModal && (
        <EarningsModal amount={60} onClose={handleModalClose} />
      )}
    </div>
  );
};

export default VideoScreen;
