const dictionary = {
    'en': {
      '_m_home': 'Home',
      '_m_about': 'About',
      '_m_projects': 'Projects',
      '_m_contacts': 'Contacts',
      '_tagline_1': 'we make',
      '_tagline_2': 'intellectual',
      '_tagline_3': 'enterprises',
      '_quote': 'The strategist\'s goal is not to find a niche within the existing industry space but to create new space that is uniquely suited to the companies own strengths, space that is off the map <span>/ Strategic Intent by Gary Hamel</span>',
      '_research': 'We\'re researching machine learning for implementation of AI solutions in real and finance business areas of companies to increase their effectiveness.',
      '_dev': 'We\'re developing applicable solutions based on artificial intelligence and implementing them effectively into business processes of an enterprise.',
      '_reml': 'reML is an open-source software for building reactive ML-systems in the agent-oriented executing environment',
      '_id': 'Intelligent Marketer is a self-learning system, able to analyze contextual advertising indicators and a market environment in real time and to form cost efficient strategies for advertising campaigns through hidden consistent patterns, unavailable for humans.',
      '_p_btn': 'DISCOVER',
      '_c_title': 'Let’s Talk <span class="highlighted-word">Future</span>',
      '_c_btn': 'Send',
      '_c_btnDownload' : 'Download',
      '_f_addr': 'ITN: 7801333780 / St. Petersburg, 17 line of Vasilievsky Island 66, liter B, office: 2/70'
    },
    'ru': {
      '_m_home': 'Главная',
      '_m_about': 'О компании',
      '_m_projects': 'Проекты',
      '_m_contacts': 'Контакты',
      '_tagline_1': 'мы создаем',
      '_tagline_2': 'интеллектуальные',
      '_tagline_3': 'предприятия',
      '_quote': 'Цель стратега заключается не в том, чтобы найти нишу в существующем отраслевом пространстве, а создать новое пространство, которое уникально подходит для собственных сильных сторон компаний, пространство, которое находится за пределами отраслевой карты <span>/ Strategic Intent by Gary Hamel</span>',
      '_research': 'Мы исследуем возможности машинного обучения для внедрения ИИ-решений в предприятия реального и финансового сектора с целью повышения их эффективности.',
      '_dev': 'Мы разрабатываем прикладные решения на базе искусственного интеллекта и реализуем оптимальные пути их внедрения в бизнес-процессы предприятия.',
      '_reml': 'reML - ПО с открытым исходным кодом для создания реактивных ML-систем в агентно-ориентированной среде выполнения.',
      '_id': 'Интеллектуальный директолог - это самообучающаяся система, способная анализировать показатели контекстной рекламы и рыночную конъюнктуру в реальном времени и путем поиска скрытых закономерностей, недоступных человеку, формировать рентабельные стратегии ведения рекламной кампании.',
      '_p_btn': 'Ознакомиться',
      '_c_title': 'Давайте поговорим о <span class="highlighted-word">будущем</span>',
      '_c_btn': 'Отправить',
      '_c_btnDownload': 'Скачать',
      '_f_addr': 'ИНН: 7801333780 / Санкт-Петербург, 17-я линия В.О. 66, литер В, офис: 2/70'
    }
  };
  
  
  function setLang(lang) {
    let currentDir = dictionary[lang];
    if (lang === 'ru') {
      $('.js-toggle-lang[data-lang="en"]').toggleClass('is-hide');
      $('.js-toggle-lang[data-lang="ru"]').removeClass('is-hide');
    }else {
      $('.js-toggle-lang[data-lang="ru"]').toggleClass('is-hide');
      $('.js-toggle-lang[data-lang="en"]').removeClass('is-hide');
    }
  
    $('.js-toggle-lang').text(lang.toUpperCase());
    $('[data-translate]').html(function() {
      var key = $(this).data('translate');
      if (currentDir.hasOwnProperty(key)) {
        return currentDir[key];
      }
    });
  };
  
  
  module.exports = setLang;
  