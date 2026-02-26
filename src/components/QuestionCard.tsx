import { ThumbsUp, ThumbsDown } from "lucide-react";

interface QuestionCardProps {
  onAnswer: () => void;
}

const QuestionCard = ({ onAnswer }: QuestionCardProps) => {
  return (
    <div className="question-card animate-slide-up">
      <p className="text-center text-muted-foreground text-sm mb-2">Reply to receive:</p>
      <p className="text-center font-semibold text-foreground mb-4">
        Is this video relevant to you?
      </p>
      <div className="flex gap-3">
        <button
          onClick={onAnswer}
          className="flex-1 bg-destructive text-destructive-foreground font-semibold py-3 px-4 rounded-full flex items-center justify-center gap-2 shadow-md hover:opacity-90 transition-opacity"
        >
          <ThumbsDown className="w-5 h-5" />
          Not relevant
        </button>
        <button
          onClick={onAnswer}
          className="flex-1 bg-primary text-primary-foreground font-semibold py-3 px-4 rounded-full flex items-center justify-center gap-2 shadow-md hover:opacity-90 transition-opacity"
        >
          <ThumbsUp className="w-5 h-5" />
          Relevant
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
