"use client"
import React, { useState } from 'react';
import StoryCardList from './components/StoryCardList';
import StoryViewer from './components/StoryViewer';
import { friends } from './data/friends';

// Define the Friend type
interface Friend {
  id: string;
  name: string;
  profileImage: string;
  stories: { id: string; type: string; uri: string }[];
}

const Home: React.FC = () => {
  const [selectedFriendIndex, setSelectedFriendIndex] = useState<number | null>(null);

  const handleCardClick = (friendName: string) => {
    console.log('Clicked on:', friendName); // Check if handleCardClick is triggered
    const friendIndex = friends.findIndex(f => f.name === friendName);
    if (friendIndex !== -1) {
      console.log('Selected friend index:', friendIndex); // Check if selected friend index is correct
      setSelectedFriendIndex(friendIndex);
    } else {
      console.log('Friend not found'); // Log if friend is not found
    }
  };

  const handleCloseViewer = () => {
    setSelectedFriendIndex(null);
  };

  return (
    <main>
      <div className="flex justify-center items-center">
        <img
          src="https://t3.ftcdn.net/jpg/03/97/48/00/360_F_397480090_6mC1Zim2i8MM7wskbu0vFabjIOU50Gmw.jpg"
          alt="instagram"
          className="w-30 h-20"
        />
      </div>

      <StoryCardList friends={friends} onCardClick={handleCardClick} />

      {selectedFriendIndex !== null && (
        <StoryViewer
          friends={friends}
          initialFriendIndex={selectedFriendIndex}
          onClose={handleCloseViewer}
        />
      )}
    </main>
  );
};

export default Home;
