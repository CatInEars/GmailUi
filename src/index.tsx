import React from 'react';
import {SafeAreaView} from 'react-native';
import {List} from './components/mail/List';

export const App = () => {
  return (
    <SafeAreaView>
      <List headline="All inboxes" />
    </SafeAreaView>
  );
};
