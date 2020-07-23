## rn-first-app

A react-native app with multiple micro-apps that I built while learning react native.

Reference: https://www.udemy.com/course/react-native-the-practical-guide

#### Setup

```
$ git clone git@github.com:dhruv-m-patel/rn-first-app.git
$ cd rn-first-app
$ npm install
$ npm install expo -g
$ expo install
$ npm start
```

#### What is included?

- **Goal Tracking App**: A single screen app to track goals

  - Allows adding a goal, delete an individual goal and reset all goals
  - Uses View, Button, Text, TextInput, FlatList, SafeAreaView, and StyleSheet and custom components to layout the application
  - Built using react hooks

- **Guess The Number**: A multi screen app to guess a number and see how many guesses it takes to match it.

  - First screen asks to select a number
  - Second screen is where you try to match selected number with system's guess
  - Once the number is matched, GameOver screen is shown
  - Uses AppHeader for all screens with a consistent feel. Built with hooks and custom components.
