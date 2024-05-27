import React, { useState, useEffect } from 'react';

interface Story {
  id: string;
  type: string;
  uri: string;
}

interface Friend {
  id: string;
  name: string;
  profileImage: string;
  stories: Story[];
}

interface StoryViewerProps {
  friends: Friend[];
  initialFriendIndex: number;
  onClose: () => void;
}

const StoryViewer: React.FC<StoryViewerProps> = ({ friends, initialFriendIndex, onClose }) => {
  const [currentFriendIndex, setCurrentFriendIndex] = useState(initialFriendIndex);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const currentFriend = friends[currentFriendIndex] || null;
  const currentStory = currentFriend?.stories[currentStoryIndex] || null;

  const handlePrevStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
    } else {
      if (currentFriendIndex > 0) {
        setCurrentFriendIndex(currentFriendIndex - 1);
        setCurrentStoryIndex(friends[currentFriendIndex - 1].stories.length - 1);
      } else {
        onClose();
      }
    }
  };

  const handleNextStory = () => {
    if (currentStoryIndex < (currentFriend?.stories.length || 0) - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
    } else {
      if (currentFriendIndex < friends.length - 1) {
        setCurrentFriendIndex(currentFriendIndex + 1);
        setCurrentStoryIndex(0);
      } else {
        onClose();
      }
    }
  };

  const handleTouch = (e: React.MouseEvent | React.TouchEvent) => {
    let clientX: number;

    if ('touches' in e) {
      if (e.touches.length === 0) return; // No touch points, ignore
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }

    const halfWidth = window.innerWidth / 2;
    if (clientX < halfWidth) {
      handlePrevStory();
    } else {
      handleNextStory();
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextStory();
    }, 5000); // Automatically advance after 5 seconds

    return () => clearInterval(timer);
  }, [currentStoryIndex, currentFriendIndex]);

  if (!currentFriend || !currentStory) {
    return null; // Render nothing if there's no current friend or story
  }

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 z-50"
      onClick={handleTouch}
      onTouchEnd={handleTouch}
    >
      <button onClick={onClose} className="absolute top-4 right-4 text-white">
        Close
      </button>
      <div className="absolute top-4 left-4 flex items-center space-x-2">
        <img
          src={currentFriend.profileImage}
          alt={`Avatar of ${currentFriend.name}`}
          className="w-8 h-8 rounded-full z-10"
        />
        <h6 className="text-white">{currentFriend.name}</h6>
      </div>
      <div className="flex justify-center w-full mb-2">
        {currentFriend.stories.map((_, index) => (
          <div
            key={index}
            className={`h-1 flex-grow mx-1 rounded-full ${
              index <= currentStoryIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
      <div className="relative w-80 h-140 bg-black rounded-md">
        {currentStory.type === 'image' && (
          <img
            src={currentStory.uri}
            alt={`Story ${currentStoryIndex + 1} of ${currentFriend.name}`}
            className="w-full h-full object-cover rounded-md"
          />
        )}
      </div>
    </div>
  );
};

export default StoryViewer;
