import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Mail} from '../../common/types/Mail';
import {Typography} from '../../common/ui/Typography';
import {Card} from './Card/Card';

interface IProps {
  headline: string;
}

export const List = ({headline}: IProps) => {
  return (
    <ScrollView style={styles.container}>
      <>
        <Typography size={14} weight="500" color="#151515">
          {headline}
        </Typography>
        {mocks.cards.map((mail, index) => (
          <Card {...mail} key={index} />
        ))}
      </>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
});

const mocks: {
  cards: Mail[];
} = {
  cards: [
    {
      authorName: 'hh.ru',
      message: 'Здравствуйте, Павел! Вы искали вакансию',
      time: '10:36',
      title: 'Павел, новые вакансии (1) по вашему запросу',
    },
    {
      authorName: 'hh.ru',
      message: 'Здравствуйте, Павел! Вы искали вакансию',
      time: '09:12',
      title: 'Павел, новые вакансии (1) по вашему запросу',
    },
    {
      authorName: 'Team Spark',
      message: 'Do you love your inbox?',
      time: '04:54',
      title: 'How inbox become a hub connected to',
    },
    {
      authorName: 'assaasasasasasasasasasasasasas',
      message: 'Здравствуйте, Павел! Вы искали вакансию',
      time: 'Oct 6',
      title: 'Павел, новые вакансии (1) по вашему запросу',
    },
    {
      authorName: 'SuperShop 228',
      message: 'Павел, вы посещали наш магазин 2 октября, и нас',
      time: 'Oct 6',
      title: 'Уникальные условия акции для старых клиентов',
    },
    {
      authorName: 'hh.ru',
      message: 'Здравствуйте, Павел! Вы искали вакансию',
      time: 'Oct 6',
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
      authorName: 'Максим',
      message: 'Дружище, ты видел новое выступление директора?',
      time: 'Oct 3',
      title: 'Очень срочное обращение',
    },
    {
      authorName: 'hh.ru',
      message: 'Здравствуйте, Павел! Вы искали вакансию',
      time: 'Oct 2',
      title: 'Павел, новые вакансии (1) по вашему запросу',
    },
  ],
};
