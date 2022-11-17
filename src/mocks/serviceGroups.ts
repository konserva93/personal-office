import { ServiceGroup } from '@adapters/serviceGroups/types';

export const serviceGroups: Record<string, Omit<ServiceGroup, 'id'>> = {
  '3cf48725-834d-4845-9f58-9245a316cdb4': {
    title: 'Главная',
    content: {
      type: 'flex',
      direction: 'row',
      items: [
        {
          type: 'flex',
          direction: 'column',
          items: [
            {
              name: 'widget1',
              minWidth: '400px',
            },
            {
              type: 'flex',
              direction: 'row',
              items: [
                {
                  name: 'widget2.1',
                },
                {
                  name: 'widget2.2',
                  minWidth: '250px',
                },
              ],
            },
          ],
        },
        {
          name: 'widget3',
        },
      ],
    },
    widgets: [
      {
        name: 'widget1',
        title: 'widget 1',
        url: '',
        properties: {
          type: 'list',
        },
      },
      {
        name: 'widget2.1',
        title: 'widget 2.1',
        url: '',
        properties: {
          type: 'text',
        },
      },
      {
        name: 'widget2.2',
        title: 'widget 2.2',
        url: '',
        properties: {
          type: 'textWithButton',
          button: {
            caption: 'test',
            // caption: 'testtesttesttesttesttesttesttesttesttesttest',
          },
        },
      },
      {
        name: 'widget3',
        title: 'widget 3',
        url: '',
        properties: {
          type: 'list',
        },
      },
    ],
  },
  'ffa42e55-bc8d-455f-a8f9-0e1dbff7f690': {
    title: 'Отпуск',
    content: {
      type: 'flex',
      direction: 'row',
      items: [],
    },
    widgets: [],
  },
  'c6b0cb15-f74a-4a08-94c1-c68cb8c63490': {
    title: 'Бухгалтерия',
    content: {
      type: 'flex',
      direction: 'row',
      items: [],
    },
    widgets: [],
  },
  '60198a3b-dd97-46ed-9978-1941fb241603': {
    title: 'Заявления',
    content: {
      type: 'flex',
      direction: 'row',
      items: [],
    },
    widgets: [],
  },
};
