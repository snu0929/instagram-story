# Instagram Stories Feature Web App

 This web application mimics the Instagram Stories feature, allowing users to view stories from their friends in a format similar to Instagram. The app is responsive and optimized for mobile devices.

## Features
- Display a list of friends with their profile pictures.
- Click on a friend to view their stories.
- Stories are displayed with a progress bar indicating the remaining time for each story.
- Automatically transition to the next story after a set interval.
- Touch left or right to navigate between stories.
- Fully responsive design, optimized for mobile devices.

## Setup Instructions
### Prerequisites

- Node.js (>= 17.x)
- npm (>= 6.x) or yarn (>= 1.x)

## Installation

1. Clone the repository:

git clone https://github.com/your-username/instagram-story.git

cd instagram-story

2. Install the dependencies:

## Using npm:
npm install

## Using yarn:
yarn install

## Running the Application
To run the application in development mode:

## Using npm:
npm run dev

## Using yarn:
yarn dev

This will start the application and you can view it by navigating to http://localhost:3000 in your web browser.

## Deployment
The application is deployed on Vercel. You can view the live version at:[ https://your-vercel-app-url.vercel.app](https://instagram-story-xi.vercel.app/)

## Design Choices

## Component Structure
- StoryCard: Represents a single friend's story card with a profile picture.
- StoryCardList: Contains a horizontal list of StoryCard components.
- StoryViewer: Displays the stories of a selected friend with navigation and progress indicators.
  
## Performance and Scalability
- useEffect Optimization: The useEffect hook is used to manage the story transition interval, ensuring that the component re-renders only when necessary.
- Responsive Design: The app is designed to be fully responsive, providing a seamless experience on mobile devices.
## Assumptions
- The stories data is static and hard-coded. In a real-world application, this data would be fetched from an API.
- Each story is an image. Other types of stories (e.g., videos) would require additional handling.

  
# Detailed Explanation

## StoryCard Component
This component displays a friend's profile picture and name. Clicking on it will open the friend's stories in the StoryViewer.

## StoryCardList Component
This component renders a horizontal list of StoryCard components. It allows for horizontal scrolling to view more friends.

## StoryViewer Component
This component displays the stories for a selected friend. It includes a progress bar for each story, indicating the remaining viewing time. The stories automatically transition to the next one after a set interval, but users can also navigate manually by clicking on the left or right side of the screen.

## Page Component
This is the main page that integrates all components and renders the story card list and story viewer. It handles the selection of a friend and manages the display of the StoryViewer.

## Deployment on Vercel
The app is deployed on Vercel for easy and scalable hosting. Vercel provides automatic builds and deployments from the GitHub repository, ensuring that the latest changes are always live.

## Conclusion
This Instagram Stories feature web app provides a user-friendly and responsive way to view stories from friends, mimicking the Instagram experience. The use of React hooks ensures efficient state management and component lifecycle handling. The app is optimized for performance and scalability, making it suitable for future enhancements and real-world applications.****

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
