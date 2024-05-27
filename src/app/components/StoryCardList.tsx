import React from 'react';
import StoryCard from './StoryCard';

interface Friend {
  id: string;
  name: string;
  profileImage: string;
  stories: { id: string; type: string; uri: string }[];
}

interface StoryCardListProps {
  friends: Friend[];
  onCardClick: (name: string) => void;
}

const StoryCardList: React.FC<StoryCardListProps> = ({ friends, onCardClick }) => {
  return (
    <div className="flex flex-nowrap overflow-x-auto p-4">
      {friends.map((friend) => (
        <div key={friend.id} className="flex-none px-2">
          <StoryCard friend={friend} onClick={onCardClick} />
        </div>
      ))}
    </div>
  );
};

export default StoryCardList;
