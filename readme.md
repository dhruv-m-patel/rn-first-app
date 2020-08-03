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

- **The Meals App**: A complex multi-screen app to showcase stack/drawer navigation coupled with state management with redux

  - Displays different meal categories to choose from and then displays different meals in the selected category with final screen displaying recipe for the meal
  - Filters allow to see items from selected filters: gluten-free, vegan, vegetarian or lectose-free
  - Recipes can be marked as favorites and displayed separately on My Favorites tab

- **The Shopping App**: A complex multi-screen app to showcase e-commerce functionality with multiple reducers.

  - Stack, Drawer and Tab Navigation
  - Multiple screens
  - Multiple reducers and actions
  - List products
  - Add products to cart, show them on cart screen where they can be removed or order can be created
  - Orders can be viewed from drawer or right after order creation with ability to cancel an existing order
  - Allow adding or removing products on product catalog
