# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to use this repo

To view the submission, you will need to run this repo locally by following these steps.

1. Clone or download the repo to your local device.
2. In the root directory of this repo, run `npm i`.
3. After the previous action is completed, run `npm start`. And you should be able to view the project at [http://localhost:3000](http://localhost:3000) in your browser.

This repo has made a presentation for the desired component in order to showcase its performance in different situations, especially the situations that have been noted in the provided documentation.

All covered situations are listed below:

- When the SelectComponent is at the middle of the screen.
- When the SelectComponent is at the top of the screen.
- When the SelectComponent is at the bottom of the screen.
- When the SelectComponent is at the corners of the screen.
- When the label of the options in SelectComponent is too long.
- When the SelectComponent is flexed inside a column.

The following feature requirements are included in this submission:

- Used React + TypeScript.
- Design is custom and visually appealing. It is made as close to the Figma design as possible.
- It is built to be responsive and maintain its aesthetics across different screen sizes and resolutions. The smaller tested screen width is 320px, which is the smallest default screen width provided by Chrome.
- The component is fully accessible, adhering to WCAG 2.1 AA guidelines.
- Users can use keyboard (Tab, Enter, Arrow keys) to choose and change selected options.
- Users can use screen readers (e.g. Apple Voiceover).
- ARIA attributes are used to enhance accessibility.
- Single selection only.
- Has prop to set a default selected value.
  - This is included in the prop value "options", which each of the option has a "default" value to decide if it is the default value or not.
  - If multiple default value exists, the SelectComponent will use the first default element in the array.
- User can provide a callback function to the SelectComponent to handle the onChange event, which is triggered whenever the selectedOption is changed.

Notable usage:

- It is suggested to provide a width to the SelectComponent. Otherwise, the width of the element could be changed when the length of the selected option's label changes.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
