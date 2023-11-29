# Project Overview: React App with Vite and Custom SelectComponent

## Repository Usage Guidelines

To review the submission, please follow the steps below to run the repository locally:

1. Clone or download the repository to your local device.
2. Navigate to the root directory and execute the command `npm i` to install the required dependencies.
3. After the installation is complete, run `npm start`. The project will be accessible at [http://localhost:5173](http://localhost:5173) in your web browser.

This repository includes a presentation of a customized SelectComponent designed to demonstrate its performance under various scenarios, particularly those outlined in the provided documentation.

Key Scenarios Covered:

- Display of the SelectComponent in the middle, edges, and corners of the screen.
- Handling long labels for options in the SelectComponent.
- Flexibility of the SelectComponent within a column layout.

Feature Requirements Addressed:

- Developed using React + TypeScript.
- Custom and visually appealing design aligned with the provided Figma design.
- Responsive design ensuring aesthetic consistency across different screen sizes and resolutions (tested down to a width of 320px).
- Full accessibility compliance with WCAG 2.1 AA guidelines.
- Keyboard navigation support for users (Tab, Enter, Arrow keys).
- Compatibility with screen readers (e.g., Apple Voiceover).
- Utilization of ARIA attributes to enhance accessibility.
- Single selection capability.
- Provision for a default selected value through the "options" prop, with each option having a "default" attribute to indicate its default status.
- Option for users to provide a callback function to handle the onChange event when the selected option changes.

Best Practices and Recommendations:

- It is advisable to specify a width for the SelectComponent to maintain consistent rendering, especially when the length of the selected option's label varies.

## Usage Instructions

### Available Scripts

In the project directory, the following npm scripts are available:

#### `npm start`

Launches the app in development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload upon making edits, and lint errors will be displayed in the console.

#### `npm run build`

Builds the app for production in the `dist` folder.\
Optimizes the build for performance, including minification and file hashing.

The application is now ready for deployment.

#### `npm run serve`

If the project has been built, this command serves the bundled application.\
The page is accessible at [http://localhost:4173](http://localhost:4173).