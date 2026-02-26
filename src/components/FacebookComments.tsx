import { useState, useEffect } from "react";

const comments = [
  {
    name: "Emily Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    time: "2 min ago",
    text: "Guys, I'm amazed!!! I just withdrew 300 DOLLARS and had to come here to share it!"
  },
  {
    name: "Michael Brown",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    time: "5 min ago",
    text: "I've been using this new YouTube tool for 3 months now and I keep receiving transfers every day. I'm earning about 200 dollars a day minimum."
  },
  {
    name: "Jessica Miller",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    time: "8 min ago",
    text: "I'm earning so much with YouTube that I'm finally buying my new motorcycle. Try it, guys — it really works!"
  },
  {
    name: "David Wilson",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    time: "12 min ago",
    text: "Honestly, I don't know how to thank you! I just withdrew $200 in a few minutes!"
  },
  {
    name: "Olivia Martinez",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    time: "15 min ago",
    text: "Hey everyone! I totally recommend this new YouTube tool — it's perfect. The money hits your account instantly. Amazing! Thank you, YouTube 🤑💰"
  },
  {
    name: "Sophia Anderson",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face",
    time: "18 min ago",
    text: "I watched the full video and the money showed up quickly in my account. A great opportunity to earn extra cash."
  },
  {
    name: "Jacob Thompson",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    time: "22 min ago",
    text: "I thought it was just talk, but I already received my first $100. Super happy with the results!"
  },
  {
    name: "Ava Robinson",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    time: "25 min ago",
    text: "It didn't take long to learn. I followed the video step-by-step and started earning almost immediately!"
  },
  {
    name: "Ethan Harris",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    time: "30 min ago",
    text: "I needed some extra money to help at home, and with this tool I finally made it happen. Thank you so much!"
  },
  {
    name: "Isabella Clark",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
    time: "35 min ago",
    text: "I'm not tech-savvy at all, but I followed the instructions and it worked instantly. Truly incredible."
  },
  {
    name: "Daniel Lewis",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=face",
    time: "40 min ago",
    text: "I have a part-time job, and this app is making me more money than my main job!"
  },
  {
    name: "Grace Walker",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&crop=face",
    time: "45 min ago",
    text: "I managed to save enough to buy a gift for my mom. I've never seen anything this simple before."
  },
  {
    name: "Logan Hall",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
    time: "50 min ago",
    text: "I just started yesterday and already made 50 dollars. What a huge help for my bills."
  },
  {
    name: "Chloe Young",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=face",
    time: "55 min ago",
    text: "I heard about this from a friend and it totally exceeded my expectations. It really works!"
  },
  {
    name: "William King",
    avatar: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=100&h=100&fit=crop&crop=face",
    time: "1 hr ago",
    text: "I saved all week and finally bought my first new phone — all thanks to this YouTube tool!"
  },
  {
    name: "Madison Wright",
    avatar: "https://images.unsplash.com/photo-1502323777036-f29e3972f0f4?w=100&h=100&fit=crop&crop=face",
    time: "1 hr ago",
    text: "I thought it would be a waste of time, but I was wrong. I get payments almost every day!"
  },
  {
    name: "Matthew Scott",
    avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face",
    time: "2 hr ago",
    text: "The best part is that you don't need to invest anything — just watch the video and follow the steps. Awesome!"
  },
  {
    name: "Ella Green",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
    time: "2 hr ago",
    text: "Honestly, I had doubts at first, but now I don't regret it. My brother and I are making extra income easily!"
  },
  {
    name: "Natalie Adams",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    time: "3 hr ago",
    text: "At first, I didn't believe it, but now I wish I had started sooner. I get deposits in my account every day!"
  },
  {
    name: "Hannah Carter",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
    time: "3 hr ago",
    text: "What are you waiting for? I watched the video until the end and had money in my account within 24 hours. Incredible!"
  },
  {
    name: "Ashley Mitchell",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop&crop=face",
    time: "4 hr ago",
    text: "Oh my god, I just paid off all my debts this week thanks to this tool!"
  },
  {
    name: "James Richardson",
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=100&h=100&fit=crop&crop=face",
    time: "5 hr ago",
    text: "I can't believe this actually works! I made $358 today using it. Try it as soon as you can!"
  }
];

const FacebookComments = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setIsVisible(false);
      
      // After fade out, change comment and fade in
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % comments.length);
        setIsVisible(true);
      }, 500); // 500ms for fade out transition
    }, 20000); // 20 seconds between transitions

    return () => clearInterval(interval);
  }, []);

  const currentComment = comments[currentIndex];

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden animate-slide-up">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#1877F2] rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">f</span>
          </div>
          <span className="font-medium text-[#1877F2]">Facebook</span>
        </div>
        <span className="text-muted-foreground text-sm">{currentIndex + 1} of {comments.length} comments</span>
      </div>
      <div className="p-4 min-h-[120px]">
        <div 
          className={`flex gap-3 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-300 to-purple-300 flex-shrink-0 overflow-hidden">
            <img 
              src={currentComment.avatar} 
              alt={currentComment.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-foreground">{currentComment.name}</p>
            <p className="text-xs text-muted-foreground mb-1">{currentComment.time}</p>
            <p className="text-foreground text-sm">
              {currentComment.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacebookComments;
