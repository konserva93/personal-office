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
              title: 'widget1',
              properties: {
                type: 'text',
                url: '',
              },
            },
            {
              type: 'flex',
              direction: 'row',
              items: [
                {
                  title: 'widget2.1',
                  properties: {
                    type: 'textWithButton',
                    url: '',
                    button: {
                      caption: 'test',
                    },
                  },
                },
                {
                  title: 'widget2.2',
                  properties: {
                    type: 'textWithButton',
                    url: '',
                    button: {
                      caption: 'test',
                    },
                  },
                },
              ],
            },
          ],
        },
        {
          title: 'widget3',
          properties: {
            type: 'text',
            url: '',
          },
        },
      ],
    },
  },
  'ffa42e55-bc8d-455f-a8f9-0e1dbff7f690': {
    title: 'Отпуск',
    content: {
      type: 'flex',
      direction: 'row',
      items: [
        {
          title: 'widget1',
          properties: {
            type: 'text',
            url: '',
          },
        },
        {
          title: 'widget2',
          properties: {
            type: 'text',
            url: '',
          },
        },
      ],
    },
  },
  'c6b0cb15-f74a-4a08-94c1-c68cb8c63490': {
    title: 'Бухгалтерия',
    content: {
      type: 'flex',
      direction: 'row',
      items: [
        {
          title: 'widget1',
          properties: {
            type: 'text',
            url: '',
          },
        },
        {
          title: 'widget2',
          properties: {
            type: 'text',
            url: '',
          },
        },
      ],
    },
  },
  '60198a3b-dd97-46ed-9978-1941fb241603': {
    title: 'Заявления',
    content: {
      type: 'flex',
      direction: 'row',
      items: [
        {
          title: 'widget1',
          properties: {
            type: 'text',
            url: '',
          },
        },
        {
          title: 'widget2',
          properties: {
            type: 'text',
            url: '',
          },
        },
      ],
    },
  },
};
