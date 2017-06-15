// Import a library to help create a Component
import React from 'react'
import {Text, AppRegistry} from 'react-native';

// Create a Component

const App = () => (
  <Text>Some text!</Text>
);

// render it

AppRegistry.registerComponent('albums', () => App);
