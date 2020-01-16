import React from 'react';
import { StatusBar, View } from 'react-native';

import Routes from './src/routes';


export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
      <Routes />
    </>
  );
}

