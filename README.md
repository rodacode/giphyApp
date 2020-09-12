Giphy App <br />
Made by Nicolás Hardmeier

This project was created with react and create-react-app. It uses the flux(redux) pattern as a state management. The load of gifs and settings of the filter are all in the redux state.

I also used node-sass for styling and integrated the Material UI library for the input, buttons, and switchs.

The search options are by type ("gifs" or "stickers"), the results can be also sorted by date. For now, just ascending order but this can also be improved adding a sorting order switch.

The grid with the gif list is made with "react-masonry-css" and uses "react-infinite-scroller" to manage the scroll.

When a user clicks on a gif, a modal window is displayed with the selected gif and details as title, user, and rating if are defined. It also has a work in progress functionality of a share on WhatsApp button(only available in phones) as a feature I would personally add to this app as a future improvement.

## Installation

In the project directory,in order to install the dependencies run:

### `yarn` or `npm install`


## Installation

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Test are made with Jest and React Testing Library.

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


