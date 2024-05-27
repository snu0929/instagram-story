1. Clone the repository: Use Git to clone the repository to your local machine:

2. git clone https://github.com/snu0929/instagram-story.git

3. Navigate to the project directory: Change your current directory to the project directory: cd instagram-story

Install dependencies: Install the required dependencies using npm (Node Package Manager):
npm install or yarn install

4 Run the application in development mode: Start the development server by running the following command:

 npm run dev

 5 Access the application: Open a web browser and navigate to http://localhost:3000 to access the locally running instance of the application.

## Design Choices
React.js: Chosen for its component-based architecture and declarative syntax, making it well-suited for building interactive user interfaces.
Next.js: Used for server-side rendering (SSR) and routing, providing improved performance and SEO benefits.
Tailwind CSS: Utilized for styling to streamline the development process and ensure consistency in design.
Interval Timer: Implemented to auto-advance to the next story after a certain duration, enhancing user experience.

## erformance and Scalability
Optimized Rendering: Utilized React's virtual DOM for efficient rendering, minimizing DOM manipulation and improving performance.
Lazy Loading: Employed lazy loading techniques to load images and components asynchronously, reducing initial page load time.
Server-Side Rendering: Leveraged Next.js for server-side rendering to improve SEO and enable better performance, especially for large-scale applications.
Code Splitting: Implemented code splitting to load only the necessary code chunks, optimizing resource utilization and enhancing scalability.

## Assumptions
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
