const data = {
  topNews: [
    { id: 1,
      topicName: 'Сейчас в СМИ',
      articles: [
        {
          id: 1,
          icon: '',
          title: 'Губернатор Ярославской области готов к общению с инопланетянами',
        },
        {
          id: 2,
          icon: '',
          title: 'Коварный план не отличить от дури',
        },
        {
          id: 3,
          icon: '',
          title: 'В Удмуртии выбрали самую красивую козу',
        },
        {
          id: 4,
          icon: '',
          title: 'Россияне остались довольны повышением налогов',
        }
      ]
    },
    {
      id: 2,
      topicName: 'В Германии',
      articles: [
        {
          icon: '',
          title: '',
        }
      ]
    },
    {
      id: 3,
      topicName: 'Рекомендуем',
      articles: [
        {
          icon: '',
          title: '',
        }
      ]
    }
  ],
  rates: [
    {
      id: 1,
      name: 'USD EMOEX',
      value: '63.52'
    },
    {
      id: 2,
      name: 'EUR EMOEX',
      value: 70.86,
    },
    {
      id: 3,
      name: 'НЕФТЬ',
      value: 64.90,
    }
  ],
  services: [
    {
      id: 1,
      value: 'Видео',
    },
    {
      id: 2,
      value: 'Картинки',
    },
    {
      id: 3,
      value: 'Новости',
    },
    {
      id: 4,
      value: 'Карты',
    },
    {
      id: 5,
      value: 'Маркет',
    },
    {
      id: 6,
      value: 'Переводчик',
    },
    {
      id: 7,
      value: 'Эфир',
    }
  ],
  searchExemple: 'фаза луны сегодня',
  mainServices: {
    weather: {
      title: 'Погода',
      temperature: '+17',
      morning: '+17',
      afternoon: '+20',
    },
    germanyMap: {
      title: 'Карта Германии',
      content: 'Расписания',
    },
    visited: {
      title: 'Посещаемое',
      items: [
        {
          id: 1,
          title: 'Недвижимость',
          content: 'о сталинках',
        },
        {
          id: 2,
          title: 'Маркет',
          content: 'люстры и светильники',
        },
        {
          id: 3,
          title: 'Авто.ру',
          content: 'привод 4*4 до 500 000',
        }
      ]
    },
    tv: {
      title: 'Телепрограмма',
      titleButton: true,
      items: [
        {
          id: 1,
          time: '02:00',
          content: 'ТНТ.Best',
          chanel: 'THT International',
        },
        {
          id: 2,
          time: '02:15',
          content: 'Джинглики',
          chanel: 'Карусель INT',
        },
        {
          id: 3,
          time: '02:25',
          content: 'Наедине со всеми',
          chanel: 'Первый',
        }
      ]
    },
    broadcast: {
      title: 'Эфир',
      items: [
        {
          id: 1,
          content: 'Управление как искусство',
          chanel: 'Успех',
        },
        {
          id: 2,
          content: 'Ночь. Мир в это время',
          chanel: 'earthTV',
        },
        {
          id: 3,
          content: 'Андрей Возн...',
          chanel: 'Совершенно секретно',
        }
      ]
    }
  }
}

export default data;
