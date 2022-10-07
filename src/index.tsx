import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Mail} from './common/types/Mail';
import {Card} from './components/mail/Card';

export const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {mocks.cards.map((mail, index) => (
          <Card {...mail} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const mocks: {
  cards: Mail[];
} = {
  cards: [
    {
      authorName: 'hh.ru',
      message: 'Здравствуйте, Павел! Вы искали вакансию',
      time: '14:36',
      title: 'Павел, новые вакансии (1) по вашему запросу',
    },
    {
      authorName: 'hh.ru',
      message: 'Здравствуйте, Павел! Вы искали вакансию',
      time: '14:36',
      title: 'Павел, новые вакансии (1) по вашему запросу',
    },
    {
      authorName: 'hh.ru',
      message: 'Здравствуйте, Павел! Вы искали вакансию',
      time: '14:36',
      title: 'Павел, новые вакансии (1) по вашему запросу',
    },
    {
      authorName: 'assaasasasasasasasasasasasasas',
      message: 'Здравствуйте, Павел! Вы искали вакансию',
      time: 'Oct 5',
      title: 'Павел, новые вакансии (1) по вашему запросу',
    },
    {
      authorName: 'hh.ru',
      message: 'Здравствуйте, Павел! Вы искали вакансию',
      time: 'Oct 4',
      title: 'Павел, новые вакансии (1) по вашему запросу',
    },
    {
      authorName: 'hh.ru',
      message: 'Здравствуйте, Павел! Вы искали вакансию',
      time: 'Oct 3',
      title: 'Павел, новые вакансии (1) по вашему запросу',
    },
    {
      authorName: 'hh.ru',
      message: 'Здравствуйте, Павел! Вы искали вакансию',
      time: 'Oct 4',
      title: 'Павел, новые вакансии (1) по вашему запросу',
    },
    {
      authorName: 'hh.ru',
      message: 'Здравствуйте, Павел! Вы искали вакансию',
      time: 'Oct 3',
      title: 'Павел, новые вакансии (1) по вашему запросу',
    },
    {
      authorName: 'hh.ru',
      message: 'Здравствуйте, Павел! Вы искали вакансию',
      time: 'Oct 4',
      title: 'Павел, новые вакансии (1) по вашему запросу',
    },
    {
      authorName: 'hh.ru',
      message: 'Здравствуйте, Павел! Вы искали вакансию',
      time: 'Oct 3',
      title: 'Павел, новые вакансии (1) по вашему запросу',
    },
  ],
};
