# closr

A simple app made in React Native for close friends to keep in touch. Please refer to specifications.md to look at all provided specifications

## Setting up Environment:

1) Use nvm and install Node v10.15.3
2) Install react-native-cli globally by running `npm install -g react-native-cli`
3) Copy `prepare-commit-message` to the project's `.git/hooks/` in order to prepend the feature ID/name to commit message
4) Run `npm install`
5) Run `react-native link`
6) **OPTIONAL** Add `Lottie.framework` to the Embedded Binaries in Xcode if its not present
7) **OPTIONAL**: You might have to open the Xcode project and build the project in order for everything to work
8) Run `react-native run-ios` 

## Frameworks/Tools:

This application uses the following frameworks/tools: 
* [React Navigation](https://reactnavigation.org)
* Typescript
* [Redux Sagas](https://github.com/redux-saga/redux-saga)
* [Lodash](https://lodash.com/)
* [React Native Lottie](https://github.com/react-native-community/lottie-react-native)

## Running on Android

Depending on how your local environment is setup, you might need to modify the Dev Server settings as mentioned [here](https://stackoverflow.com/questions/42064283/react-nativecould-not-connect-to-development-server-on-android)
