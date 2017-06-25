// Import a library to help create a Component
import React from 'react'
import {Text, AppRegistry} from 'react-native';
import Header from './src/components/header';

// Create a Component

const App = () => (
  <Header headerText={'Albums'} />
);

// render it

AppRegistry.registerComponent('albums', () => App);
