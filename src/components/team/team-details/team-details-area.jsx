import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const teamDetailsInfo = [
  {
    id: 1,
    key: 'oleksandr',
    img: '/assets/img/team/sasha.jpeg',
    name: 'Ячник Олександр Сергійович',
    title: 'Лікар ортопед-травматолог, реабілітолог',
    description: (
      <>
        Спеціалізується на консервативному, мініінвазивному та оперативному лікуванні суглобів та всього опорно-рухового
        апaрату, післяопераційній та посттравматичній реабілітації.
      </>
    ),
    socialLinks: [
      {
        link: 'https://www.instagram.com/doctor_vyshhorod',
        target: '_blank',
        icon: 'fab fa-instagram',
        name: 'Instagram',
        color: 'tp-dtls-insta',
      },
      {
        link: 'https://doc.ua/ua/doctor/vyshgorod/aleksandr-yachnik',
        target: '_blank',
        icon: 'fa-solid fa-user-doctor',
        name: 'doc.ua',
        color: 'tp-dtls-tweet',
      },
    ],
    personalExperience: {
      title: 'Професійна діяльність',
      description: (
        <>
          З 2014 року по 2020 рік проходив навчання в Вінницькому національному медичному університеті ім М.І. Пирогова
          за спеціальністю «лікувальна справа».
          <br />
          З 2018 року працював реабілітологом в центрі «Рух без обмежень».
          <br />
          З 2020 року по 2022 рік працював на посаді лікаря-інтерна ортопеда-травматолога в НВМКЦ «Головного військового
          клінічного госпіталя» м.Київ.
          <br />
          З 2021 року консультування та проведення консервативного лікування пацієнтів з захворюванням опорно-рухового
          апарату в центрі «Рух без обмежень»
          <br />З 2022 року по теперішній час працює на посаді лікаря ортопеда-травматолога в ДНУ «Центр іноваційних
          медичних технологій НАН України».
        </>
      ),
    },
    personalInfo: [
      {
        id: 1,
        title: 'Професійні навички',
        list: [
          'Оперативні втручання при захворюваннях та травмах опорно-рухового апарату (артроскопія, ендопротезування, металоостеосинтез та операції на зв’язках та сухожиллях)',
          'Мініінвазивне та консервативне лікування дегенеративно-дистрофічним змін суглобів',
          'Внутрішньомуглобові введення препаратів',
          'PRP-терапія',
          'Кінезіотейпування',
          'Розробка реабілітаційних програм для відновного лікування пацієнтів з захворюваннями опорно-рухового апарату',
        ],
      },
      {
        id: 2,
        title: 'Додатково пройшов навчання',
        list: [
          'Сучасні технології в артроскопічній хірургії, ортопедії та реабілітації',
          'Ультразвукова діагностика опорно-рухового апарату',
          'Больовий синдром верхньої кінцівки : плече, лікоть, кисть',
          'Скелетно-м’язовий біль у осіб літнього віку',
          'Сучасні технології лікування опорно-рухового апарату',
          'Плоска стопа та інші актуальні питання травматології',
        ],
      },
    ],
  },
  {
    id: 2,
    key: 'oksana',
    img: '/assets/img/team/oksana.jpeg',
    name: 'Ячник Оксана Олександрівна',
    title: 'Медична сестра з фізіотерапії, провізор-спеціаліст',
    description: (
      <>
        Cпеціалізується на проведенні фізіотерапевтичних процедур (УЗТ, електротерапія, стимуляційна, магнітолазерна
        терапії). Володіє процедурою тракційного витягнення хребта на сучасному обладнанні.
      </>
    ),
    socialLinks: [],
    personalExperience: {
      title: 'Професійна діяльність',
      description: (
        <>
          З 1990 році по 1992 рік проходила навчання в Першому Київському медичному училищі за спеціальністю
          «сестринська справа»
          <br />
          З 1992 року почала працювати медичною сестрою в ДУ «Інституті травматології та ортопедії» НАМН МОЗ України.
          <br />
          У 2000р. вступила до Національного фармацевтичного університету.Навчаючись в вузі з 2002 року розпочала
          фармацевтичний досвід в мережі аптек «ВВС+».
          <br />
          У 2005р. закінчила НФУ за спеціальністю «Загальна фармація» і вступила до інтернатури, де здобула кваліфікацію
          провізора-спеціаліста.
          <br />
          З 2002 року по 2017 рік працювала провізором-спеціалістом.
          <br />
          У 2017 році при Інституті кваліфікації спеціалістів фармації здобула удосконалення з циклу «Актуальні питання
          раціонального застосування лікарських засобів при найбільш поширених захворюваннях».
          <br />
          З 2017 року по 2020 рік займала посаду завідуючої аптечним пунктом.
          <br />
          У 2018 році здобула підвищення кваліфікації з циклу «Спеціалізація медсестер фізіотерапевтичних відділень та
          кабінетів».
          <br />
          З 2018 року працює на посаді медичної сестри з фізіотерапії в медичному центрі «Рух без обмежень».
          <br />
        </>
      ),
    },
    personalInfo: [
      {
        id: 1,
        title: 'Професійні навички',
        list: [
          'Бере участь у лікувальному процесі, виконуючи фізіотерапевтичні призначення лікарів',
          'Контролює стан пацієнта під час проведення процедур і ефективність лікування від початку до закінчення курсу призначень',
          'Проводить інструктаж і правила поведінки під час проведення процедур і тракції хребта',
        ],
      },
    ],
  },
  {
    id: 3,
    key: 'vladyslav',
    img: '/assets/img/team/vlad.jpeg',
    name: 'Кумечко Владислав Віталійович',
    title: 'Реабілітолог, масажист',
    description: (
      <>
        Спеціалізується на професійному лікуванні сколіозу та сколіотичної постави у дітей та підлітків.
        <br />
        <br />
        Закінчив повний курс навчання по програмі «Оздоровчий масаж з основами анатомії» в навчально-методичному центрі
        МПП «Альтернативна медицина»
      </>
    ),
    socialLinks: [
      {
        link: 'https://www.instagram.com/vladyslav.massage',
        target: '_blank',
        icon: 'fab fa-instagram',
        name: 'Instagram',
        color: 'tp-dtls-insta',
      },
    ],
    personalExperience: {
      title: 'Професійна діяльність',
      description: (
        <>
          Пройшов повний курс навчання в Закладі професійно-технічної освіти «ПП Академія професійної освіти
          спеціалістів «Партнер Плюс» за курсовою програмою «Профі-масажист (експерт рівень)» <br />
          <br />
          Склав заліки з таких дисциплін:.
          <br />
          -Фізична реабілітація
          <br />
          -Класичний масаж
          <br />
          -Лікувальний масаж
          <br />
          -Дитячий масаж
          <br />
          -Лімфодренуючий,Антицелюлітний, Вакуумний масаж
          <br />
          -Основи психології
          <br />
          -Спортивний масаж
          <br />
          -Кінезіотейпування
          <br />
        </>
      ),
    },
    personalInfo: [
      {
        id: 1,
        title: 'Професійні навички',
        list: [
          'Лікування сколіозу,кіфозу',
          'Лікування гриж та протрузій ',
          'Виправлення постави',
          'Лікування плоскостопості у дітей ',
          'Реабілітація після травм хребта',
          'Лікувально-спортивна фізкультура',
          'Лікувальний масаж',
          'Спортивний масаж',
          'Лімфодренажний масаж ',
          'Кінезіотейпування',
        ],
      },
    ],
  },
];
const TeamDetailsArea = ({ keyName }) => {
  const memberInfo = teamDetailsInfo.find(item => item.key === keyName);

  if (!memberInfo) {
    return null;
  }

  return (
    <>
      <section className="team-details-area pt-130 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="tp-team-dtls__thumb mb-50 team-details-area__img-holder">
                <Image width={400} height={600} src={memberInfo.img} alt={`${keyName}'s picture`} className='team-details-area__img'/>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="tp-team-dtls__content mt-50 mb-50">
                <h4 className="tp-team-dtls__title mb-10">{memberInfo.name}</h4>
                <p className="tp-team-dtls__short-desc mb-35">{memberInfo.title}</p>
                <p>{memberInfo.description}</p>
                <div className="tp-team-dtls__info">
                  {memberInfo.socialLinks && (
                    <div className="tp-team-dtls__social mt-45 mb-50">
                      {memberInfo.socialLinks.map((link, i) => (
                        <Link key={i} className={link.color} href={link.link} target={link.target}>
                          <i className={link.icon}></i>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-team-dtls-text mt-40">
                <h4 className="tp-team-dtls-text__title mb-30">{memberInfo.personalExperience.title}</h4>
                {memberInfo.personalExperience.description}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 wow fadeInLeft"  data-wow-delay=".2s">
              <div className="tp-team-dtls-item mb-50 mt-35 wow fadeInUp" data-wow-delay=".2s">
                <h4 className="tp-team-dtls-item__title mb-25">{memberInfo.personalInfo[0].title}</h4>
                <div className="tp-team-dtls-item__list">
                  <ul>
                    {memberInfo.personalInfo[0].list.map((item, i) => (
                      <li key={i}>
                        <i className="fa-solid fa-check"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 wow fadeInRight"  data-wow-delay=".2s">
              {memberInfo.personalInfo[1] && (
                <div className="tp-team-dtls-item mb-50 mt-35 ml-40 wow fadeInUp" data-wow-delay=".4s">
                  <h4 className="tp-team-dtls-item__title mb-25">{memberInfo.personalInfo[1].title}</h4>

                  <div className="tp-team-dtls-item__list">
                    <ul>
                      {memberInfo.personalInfo[1].list.map((item, i) => (
                        <li key={i}>
                          <i className="fa-solid fa-check"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamDetailsArea;
