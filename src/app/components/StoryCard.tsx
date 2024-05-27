// StoryCard.tsx

import React from 'react';

interface Friend {
  id: string;
  name: string;
  profileImage: string;
}

interface StoryCardProps {
  friend: Friend;
  onClick: (name: string) => void;
}

const StoryCard: React.FC<StoryCardProps> = ({ friend, onClick }) => {
  const handleCardClick = () => {
    onClick(friend.name); // Call onClick with the friend's name as argument
  };

  return (
    <div className="flex flex-col items-center cursor-pointer">
      <div 
        className="relative flex items-center justify-center w-16 h-16 overflow-hidden rounded-full border-2 border-orange-500"
        onClick={handleCardClick}
      >
        <img 
          src={friend.profileImage} 
          alt={friend.name} 
          className="absolute w-full h-full object-cover rounded-full" 
        />
      </div>
      <p className="text-sm font-semibold">{friend.name}</p>
    </div>
  );
};

export default StoryCard;
