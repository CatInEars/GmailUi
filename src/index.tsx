import React from 'react';
import {SafeAreaView} from 'react-native';
import {List} from './components/List';

export const App = () => {
  return (
    <SafeAreaView>
      <List headline="All inboxes" />
    </SafeAreaView>
  );
};
