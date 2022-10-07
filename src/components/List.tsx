import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Mail} from '../common/types/Mail';
import {Typography} from '../common/ui/Typography';
import {DARK_GRAY} from '../constants/colors';
import {Card} from './Card';
import {nanoid} from 'nanoid/non-secure';

interface IProps {
  headline: string;
}

export const List = ({headline}: IProps) => {
  return (
    <>
      <FlatList
        data={cards}
        scrollEnabled
        renderItem={({item}) => <Card {...item} />}
        keyExtractor={({id}) => id}
        contentContainerStyle={styles.container}
        ListHeaderComponent={() => (
          <Typography
            size={14}
            weight="500"
            color={DARK_GRAY}
            style={styles.headline}>
            {headline}
          </Typography>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
  },
  headline: {
    paddingHorizontal: 10,
    marginBottom: 8,
  },
});

const cards: Mail[] = [
  {
    id: nanoid(),
    authorName: 'hh.ru',
    message: 'Здравствуйте, Павел! Вы искали вакансию',
    time: '10:36',
    title: 'Павел, новые вакансии (1) по вашему запросу',
  },
  {
    id: nanoid(),
    authorName: 'hh.ru',
    message: 'Здравствуйте, Павел! Вы искали вакансию',
    time: '09:12',
    title: 'Павел, новые вакансии (1) по вашему запросу',
  },
  {
    id: nanoid(),
    authorName: 'Team Spark',
    message: 'Do you love your inbox?',
    time: '04:54',
    title: 'How inbox become a hub connected to your',
  },
  {
    id: nanoid(),
    authorName: 'assaasasasasasasasasasasasasas',
    message: 'Здравствуйте, Павел! Вы искали вакансию',
    time: 'Oct 6',
    title: 'Павел, новые вакансии (1) по вашему запросу',
  },
  {
    id: nanoid(),
    authorName: 'SuperShop 228',
    message: 'Павел, вы посещали наш магазин 2 октября, и нас',
    time: 'Oct 6',
    title: 'Уникальные условия акции для старых клиентов',
  },
  {
    id: nanoid(),
    authorName: 'hh.ru',
    message: 'Здравствуйте, Павел! Вы искали вакансию',
    time: 'Oct 6',
    title: 'Павел, новые вакансии (1) по вашему запросу',
  },
  {
    id: nanoid(),
    authorName: 'hh.ru',
    message: 'Здравствуйте, Павел! Вы искали вакансию',
    time: 'Oct 4',
    title: 'Павел, новые вакансии (1) по вашему запросу',
  },
  {
    id: nanoid(),
    authorName: 'hh.ru',
    message: 'Здравствуйте, Павел! Вы искали вакансию',
    time: 'Oct 3',
    title: 'Павел, новые вакансии (1) по вашему запросу',
  },
  {
    id: nanoid(),
    authorName: 'Максим',
    message: 'Дружище, ты видел новое выступление директора?',
    time: 'Oct 3',
    title: 'Очень срочное обращение',
  },
  {
    id: nanoid(),
    authorName: 'hh.ru',
    message: 'Здравствуйте, Павел! Вы искали вакансию',
    time: 'Oct 2',
    title: 'Павел, новые вакансии (1) по вашему запросу',
  },
];
