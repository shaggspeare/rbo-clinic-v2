import Count from '@/common/count';
import Link from 'next/link';
import React from 'react';

// content
const content = {
  left_img: 'assets/img/background/sasha-pose-short.jpg',
  experience_count: 5,
  experience_count_text: (
    <>
      Років <br />у Вишгороді
    </>
  ),
  title: 'Про нас',
  section_title: (
    <>
      Медичний центр <br />
      &quot;Рух без обмежень&quot;
    </>
  ),
  section_sub_title:
    '- це сучасний заклад, в якому поєднуються\n' +
    'досвід вузьких спеціалістів та індивідуальний кваліфікований підхід до кожного пацієнта з приводу\n' +
    'консультації, обʼєктивних обетежень та \n' +
    'новітніх методів лікування.',
  section_des: (
    <>
      Наші пацієнти звертаються до нас:
      <br />
      - з проблемами гострих і хронічних захворювань хребта та суглобів;
      <br />
      - операційної, післяопераційної та реабілітаційної допомоги;
      <br />
      - профілактики та підтримки опорно - рухового апарату;
      <br />
      <br />
      Базуємо нашу допомогу на таких принципах:
    </>
  ),
  about_info_list: [
    {
      text: 'Рух без болю',
    },
    {
      text: 'Рух без обмежень',
    },
    {
      text: 'Турбота про пацієнта',
    },
    {
      text: 'Швидкий результат',
    },
    {
      text: 'Індивідуальний підхід',
    },
  ],
};

const {
  left_img,
  experience_count,
  experience_count_text,
  title,
  section_title,
  section_sub_title,
  section_des,
  about_info_list,
} = content;

const About = () => {
  return (
    <>
      <section id="tp-about-scroll" className="about-area pb-70">
        <div className="container" id="about">
          <div className="row">
            <div className="col-xl-6 col-lg-12">
              <div className="about__thumb mb-60 wow fadeInLeft" data-wow-delay=".4s">
                <div className="about__img">
                  <img src={left_img} alt="about-bg-img" />
                  <div className="about__exprience">
                    <h3 className="counter">
                      <Count add_style={true} number={experience_count} />
                    </h3>
                    <i>{experience_count_text}</i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="tp-about__content pt-125 ml-60 mb-50 wow fadeInRight" data-wow-delay=".4s">
                <div className="tp-section">
                  <span className="tp-section__sub-title left-line mb-25">{title}</span>
                  <h3 className="tp-section__title tp-ab-sm-title mb-45">{section_title}</h3>
                  <i>{section_sub_title}</i>
                  <p className=" mr-20 mb-25">{section_des}</p>
                </div>
                <div className="tp-about__info-list mb-55">
                  <ul>
                    {about_info_list.map((list, i) => (
                      <li key={i}>
                        <i className="fa-solid fa-check"></i> {list.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
