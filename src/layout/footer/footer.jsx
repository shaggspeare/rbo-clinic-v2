import SocialLinks from '@/common/social-links';
import Link from 'next/link';
import React from 'react';

const footer_content = {
  footer_info: [
    {
      id: 1,
      title: 'Мапа сайту',
      cls: 'footer-col-2',
      links: [
        { name: 'Контакти', link: '/contact-us' },
        { name: 'Про нас', link: '/about' },
        { name: 'Команда', link: '/team' },
        { name: 'Послуги', link: '/service' },
      ],
    },
    {
      id: 2,
      title: 'Швидкі контакти',
      cls: 'footer-col-3',
      links: [
        { name: 'Пр.Шевченка 2Г, Вишгород' },
        { name: '+38 (096) 305 00 04' },
        { name: '+38 (093) 305 00 04' },
        { name: '---------------------------------------' },
        { name: 'Часи прийому:' },
        { name: 'Пн-Пт: 9:00 - 19:00' },
        { name: 'Сб: 9:00 - 15:00' },
      ],
    },
  ],
  contact_info: [],
  copy_right_text: (
    <>
      © Copyright © {new Date().getFullYear()}
      <Link href="/"> Рух без обмежень</Link>.<i> All Rights Reserved Copyright</i>
    </>
  ),
};

const { footer_info, copy_right_text } = footer_content;
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-area theme-bg pt-100 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="footer-widget footer-col-1 mb-50 wow fadeInUp" data-wow-delay=".2s">
                  <h4 className="footer-widget__title mb-30">
                    Медичний центр
                    <br /> &#34;Рух без обмежень&#34;
                  </h4>
                  <p>
                    Звертайтесь до нас:
                    <br />
                    - з проблемами гострих і хронічних захворювань хребта та суглобів;
                    <br />
                    - у разі необхідності операційної, післяопераційної та реабілітаційної допомоги;
                    <br />
                    - заради профілактики та підтримки опорно - рухового апарату;
                    <br />
                  </p>
                </div>
              </div>
              {footer_info.map(item => (
                <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
                  <div className={`footer-widget ${item.cls} mb-50 wow fadeInUp`} data-wow-delay=".4s">
                    <h4 className="footer-widget__title mb-20">{item.title}</h4>
                    <div className="footer-widget__links">
                      <ul>
                        {item.links.map((link, i) => (
                          <li key={i}>
                            <Link href={`${link?.link ? link.link : '/'}`}>{link.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-area-bottom theme-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                <div className="footer-widget__copyright">
                  <span>{copy_right_text}</span>
                </div>
              </div>
              {/*<div className="col-xl-6 col-lg-6 col-md-12 col-12">*/}
              {/*  <div className="footer-widget__copyright-info info-direction">*/}
              {/*    <ul className="d-flex align-items-center">*/}
              {/*      <li>*/}
              {/*        <a href="#">Terms and conditions</a>*/}
              {/*      </li>*/}
              {/*      <li>*/}
              {/*        <a href="#">Privacy policy</a>*/}
              {/*      </li>*/}
              {/*    </ul>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
