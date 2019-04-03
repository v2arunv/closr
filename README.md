# closr

A simple app made in React Native for close friends to keep in touch. Please refer to [specifications.md](https://github.com/v2arunv/closr/blob/develop/specifications.md) to look at all provided specifications

## Setting up Environment:

1) Use [nvm](https://github.com/creationix/nvm) and install Node v10.15.3
2) Install react-native-cli globally by running `npm install -g react-native-cli`
3) Copy `prepare-commit-message` to the project's `.git/hooks/` in order to prepend the feature ID/name to commit message
4) Run `npm install`
5) Run `react-native link`
6) **OPTIONAL** Add `Lottie.framework` to the Embedded Binaries in Xcode if its not present
7) **OPTIONAL**: You might have to open the Xcode project and build the project in order for everything to work
8) Run `react-native run-ios` 

You can run `npm test` to trigger the snapshot tests that were written for the shared components

## Features

1) **Feed** 📃: The feed is automatically navigated to after displaying the splash animation.    **NOTE**: The number of posts are limited to 10 by default. This can be increased or decreased by changing the value of `feedPostSize` in `common/config.ts`
2) **User Profile** 👦🏽 👧🏽 : This page can be visited by clicking on the profile picture of a user within the feed page. Please note that the user profile *cannot* be accessed by clicking on the display picture of user comments
3) **Contact** 📞 ✉️ : The email address and phone numbers open the Dialer/Phone and Email application within iOS and Android. **NOTE**: This will not work on an iOS Emulator since you need a real device to use the Phone and Mail app. However, it should work on an Android Emulator
4) **Photo Gallery** 🌅: You can view all the photos uploaded by a user by visiting their user profile and horizontally scrolling through the albums. Clicking on an individual photo will bring up the viewer. The viewer can be dismissed by dragging it down from the top or by clicking on the 'X' icon.

## Frameworks/Tools:

This application uses the following frameworks/tools: 
* [React Navigation](https://reactnavigation.org)
* Typescript
* [Redux Sagas](https://github.com/redux-saga/redux-saga)
* [Lodash](https://lodash.com/)
* [React Native Lottie](https://github.com/react-native-community/lottie-react-native)

## Product Development

You can refer to this [GitHub project board](https://github.com/v2arunv/closr/projects/2) to refer to which features were chosen to develop, in what order and what features were archived/dropped.

The board also helps in outlining the direction that could have been taken in developing new features

## Running on Android

Depending on how your local environment is setup, you might need to modify the Dev Server settings as mentioned [here](https://stackoverflow.com/questions/42064283/react-nativecould-not-connect-to-development-server-on-android)


## Adding a module/alias to the project

You might have noticed that several components import with the refernce of `@models/user`. If you'd like to create a module such as this,
you have to do 2 things:

1. Append the path to `.babelrc.js` within the `alias` object.
2. Append the path to `tsconfig.json` with the `paths` object.

**NOTE**: Please pay attention to the difference in syntax between the 2 config files.
