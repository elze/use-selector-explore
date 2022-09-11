# Getting Started with use-selector-explore

This project was created to investigate how the `useSelector` hook works in React.js.

`useSelector` selects only the part of the application state that a component needs. Especially when used with `shallowEqual`, is supposed to prevent the component from re-rendering if its part of the state hasn't changed.

In this application the components `Apple` and `Mushroom` each select a part of the application's state. If you open this application in Stackblitz (https://use-selector-explore.stackblitz.io/) and open Redux Dev Tools in your browser's Dev Tools, then click on either Apple or Mushroom buttons, you will see which components are being re-rendered. 

(It is best to use Firefox, because in Firefox Redux Dev Tools a component is highlighted when it is being re-rendered. In Chrome, you can still see which components were re-rendered when, in the Profiler tab of Redux Dev Tools, but it is less convenient. Also, a lot of times the Stackblitz URL will hang while loading, so just try to reload it until it loads. It's an unfortunate bug in Stackblitz.)


Currently, if you click Apple or Mushroom, only that component will re-render, and the other will not. But if you change one line in this application, both will re-render. Try editing this appication in Stackblitz

https://stackblitz.com/edit/use-selector-explore

and uncomment line 69 in `App.js`:

```const appState = useSelector((state) => state, shallowEqual);```

After this, both Apple and Mushrooms components will re-render when you click either button. This is despite the fact that the `console.log` in `reducers.js` shows that the `shallowEqual` of the other component's part of the state is true, which is to say that for the other component its previous state is `shallowEqual` to the new state.


Why? That's the mystery I'm trying to figure out.

In this very simple application `appState` is not used, so there is no need to have that line. But there may be use cases where we would need this line, because we need some data bit from `appState` that exists at the application level and can't be farmed out to individual components. In that case I would like components not to re-render unnecessarily.


---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
