1. Clone the repository: Use Git to clone the repository to your local machine:
2. 
git clone https://github.com/snu0929/instagram-story.git

3. Navigate to the project directory: Change your current directory to the project directory: cd instagram-story

Install dependencies: Install the required dependencies using npm (Node Package Manager):
 npm install or yarn install

4 Run the application in development mode: Start the development server by running the following command:

 npm run dev

5 Access the application: Open a web browser and navigate to http://localhost:3000 to access the locally running instance of the application.

Folder Structure
components: Contains React components used in the application.
pages: Contains Next.js pages.
public: Contains static assets such as images.
styles: Contains CSS stylesheets.
File Structure
1. storyCard.tsx
Description: This file contains the definition of the StoryCard component, which is responsible for rendering individual story cards.

Location: src/components/storyCard.tsx

Features:

Displays the friend's name and profile picture.
Clicking on the card triggers the onCardClick callback function.
Props:

friend: The friend object containing information such as id, name, profileImage, and stories.
onClick: Callback function to handle the click event on the story card.
2. StoryCardList.tsx
Description: This file defines the StoryCardList component, which is responsible for rendering a list of story cards.

Location: src/components/StoryCardList.tsx

Features:

Maps through the list of friends and renders a StoryCard component for each friend.
Provides a callback function onCardClick to handle clicks on story cards.
Props:

friends: An array of friend objects, each containing information about the friend and their stories.
onCardClick: Callback function to handle clicks on story cards.
3. storyViewer.tsx
Description: This file contains the definition of the StoryViewer component, which is responsible for displaying individual stories in a fullscreen viewer.

Location: src/components/storyViewer.tsx

Features:

Allows users to navigate between stories by swiping or clicking.
Automatically advances to the next story after a certain duration.
Closes the viewer when there are no more stories to display.
Props:

friends: An array of friend objects, each containing information about the friend and their stories.
initialFriendIndex: The index of the initial friend whose story is displayed first.
onClose: Callback function to handle closing the story viewer.
4. page.tsx
Description: This file defines the main page component of the application, where the StoryCardList and StoryViewer components are rendered.

Location: src/pages/page.tsx

Features:

Renders the StoryCardList component to display a list of story cards.
Renders the StoryViewer component to display individual stories in fullscreen mode.

Design Choices
React.js: Chosen for its component-based architecture and declarative syntax, making it well-suited for building interactive user interfaces.
Next.js: Used for server-side rendering (SSR) and routing, providing improved performance and SEO benefits.
Tailwind CSS: Utilized for styling to streamline the development process and ensure consistency in design.
Interval Timer: Implemented to auto-advance to the next story after a certain duration, enhancing user experience.
Performance and Scalability
Optimized Rendering: Utilized React's virtual DOM for efficient rendering, minimizing DOM manipulation and improving performance.
Lazy Loading: Employed lazy loading techniques to load images and components asynchronously, reducing initial page load time.
Server-Side Rendering: Leveraged Next.js for server-side rendering to improve SEO and enable better performance, especially for large-scale applications.
Code Splitting: Implemented code splitting to load only the necessary code chunks, optimizing resource utilization and enhancing scalability.
Assumptions
User Authentication: Assumes users are authenticated and authorized to view stories posted by their friends.
Static Data: Uses static data for demonstration purposes. In a production environment, data would be fetched from a database or API.
Browser Compatibility: Designed and tested primarily on modern web browsers such as Chrome, Firefox, and Safari. Compatibility with older browsers may vary.
Deployment
The application is deployed using Vercel, a cloud platform for static sites and serverless functions. It is automatically deployed upon pushing changes to the main branch.

You can access the deployed application at Instagram Story App.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
