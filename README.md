# To-Do Task Manager

A React + Vite web application for managing to-do tasks. The app uses Redux to store and update tasks. Users can add new tasks, mark them as completed, edit tasks, and delete tasks. The app is designed using CSS for a clean and responsive interface.

## Features
- **Add new tasks**: Easily add tasks to keep track of your to-dos.
- **Mark tasks as completed**: Keep track of completed tasks with a simple toggle.
- **Edit existing tasks**: Edit your tasks at any time to make necessary changes.
- **Delete tasks**: Remove tasks once they are no longer needed.
- **Responsive design**: The app is built with CSS for a clean and responsive user interface, ensuring it works well on any device.

### New Feature:
- **Installable as a PWA**: The app is a Progressive Web App (PWA), meaning it can be installed on your device and used offline, providing a native-like experience on both mobile and desktop.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sagnik-Coder24/To-do-app-Redux.git
   cd To-do-app-Redux
   ```

2. Install dependencies:

   ```bash
   yarn install
   # or
   npm install
   ```

### Running the App

1. Start the development server:

   ```bash
   yarn dev
   # or
   npm run dev
   ```

2. Open your browser and go to `http://localhost:5173` to see the app in action.

### Deployment

1. Build the app for production:

   ```bash
   yarn build
   # or
   npm run build
   ```

2. Deploy to Netlify:

   - Push your code to a GitHub repository.
   - Go to [Netlify](https://www.netlify.com/) and log in.
   - Click on "New site from Git" and connect your GitHub account.
   - Select your repository and configure the build settings:
     - Build command: `yarn build` or `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site".

Netlify will automatically build and deploy your site. You can find your live site URL in the Netlify dashboard.

## Usage

1. Add new tasks using the input field.
2. Mark tasks as completed by clicking the checkbox.
3. Edit tasks by clicking on the task itself.
4. Delete tasks by clicking the delete button.

## Notes
- For the PWA feature to work, ensure that your device is connected to the internet at least once so it can download and cache the necessary assets.
- After installation, the app can be launched from your home screen (on mobile) or from the desktop (on supported browsers).

## Built With

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Netlify](https://www.netlify.com/)

## Contributions

We welcome contributions from the community! Feel free to open issues and pull requests to suggest improvements, add new features, or fix bugs. Here’s how you can contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Open a pull request

## Suggestions & Feedback

If you have suggestions or feedback on how to improve this project, feel free to post them on our [GitHub Issues](https://github.com/Sagnik-Coder24/To-do-app-Redux/issues) page. We love hearing your ideas and collaborating with the community!
