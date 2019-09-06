# g2i-triviaGame

### Routing

The app has 3 views that's handled with `react-navigation@4.0.0`, the routes and the views (both has same names) are:

1. Home
2. Quiz
3. Results

### Store

The app has a Store too handled with `react-waterfall@4.0.4` that libraries it's a middleware on that use _CONTEXT API_ release with `React 16` I used this over redux this time because it's really cheap and strong to handle basic apps like this one and it's really simple to use (we used for TBS and TNT for Turner Broadcasting System company and works really well)

There are only 3 actions in the project:

- _getQuestions_:

  - Get the endpoint data
  - Set the first question title and content to show in the `Quiz view`.

- _nextQuestion_:

  - Save the user answer for the current question
  - Set the next current question
  - Has a flag to indicate when the final question was answered

- _restart_:
  - Restart the values in the store as the beginning

### Components

The project has 4 components:

- _ButtonWidthBorder_:
  This is used for all the buttons of the app and it has a flag to disabled. That it's useful on `Quiz view` to avoid the user press the answer before the question are loading (that prevent a bug, of course)

- _Header_:
  This handles all the headers for the `react-navigation` you can pass from props with static text for both lines or trigger dynamic text like the question title in `Quiz` view or the user score in the `Results` view. (this component connect to the store)

- _Questions_:
  Here is the core content for the game, but just the UI not the logic. It shows the question content and the buttons of the game (true/false). (this component connect to the store)

- _Resume_:
  This component is shown on the `Results` screen and shows the right and wrong questions, it has scroll to the user can see all the content. (this component connect to the store)

#### note: All the *text* in the questions content it's handle with `he` library to decode HTML entities in the string so that way we can see the pretty text.

## Install

### IOS

1. `git clone https://github.com/daniel-llach/g2i-triviaGame.git trivia`
2. `cd trivia`
3. `yarn install`
4. `react-native run-ios`
5. Enjoy

### Android

1. step 5 replace for open android folder into android studio
2. install and accept all the stuff up to the griddle build successfully
3. `echo "sdk.dir = /Users/$(whoami)/Library/Android/sdk" > android/local.properties`
4. on android studio run some device on emulator
5. `react-native run-android`

## Previews

| ### IphoneX                   | Android: nexus 5X             |
| ----------------------------- | ----------------------------- |
| ![](readmeAssets/iphoneX.gif) | ![](readmeAssets/nexus5X.gif) |
