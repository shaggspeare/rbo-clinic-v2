// external
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
// internal
import VideoPopup from '@/modals/video-popup';

// content
const content = {
  sub_title: 'Ласкаво просимо',
  title: (
    <>
      Допоможемо Вам рухатись <br />
      без болю та обмежень
    </>
  ),
  des: (
    <>
      Лікарі з провідних клінік Києва, що надають широкий спектр професійної медичної допомоги
      та застосовують новітні технології, щоб ви були здорові та раділи кожному дню.
    </>
  ),
  btn_text1: 'Запис на прийом',
  btn_text2: 'про нас',
};
const { sub_title, title, des, btn_text1, btn_text2 } = content;

// hero_box
const hero_box = [
  {
    id: 1,
    icon: 'fa-brands fa-facebook',
    des: 'Ми у Facebook',
    color: '',
    link: 'https://www.facebook.com/ruhbezobmezhen/',
  },
  {
    id: 2,
    icon: 'fa-brands fa-instagram',
    des: 'Ми в Instagram',
    color: 'pink-icon',
    border: 'pink-border',
    link: 'https://www.instagram.com/doctor_vyshhorod/',
  },
  {
    id: 3,
    icon: 'fa-light fa-location-dot',
    des: 'пр.Шевченка, 2Г, Вишгород',
    color: 'green-icon',
    border: 'green-border',
    link: '/contact',
  },
];

const HeroBanner = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="banner-area p-relative pt-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="banner__content pt-145 mb-135">
                <span className="banner__sub-title mb-20">{sub_title}</span>
                <h2 className="banner__title mb-30">{title}</h2>
                <p>{des}</p>
                <div className="banner__btn">
                  <Link className="tp-btn" href="#appointment-home">
                    {btn_text1}
                  </Link>
                  <Link className="tp-btn-second ml-25" href="/about">
                    {btn_text2}
                  </Link>
                </div>
              </div>
              <div className="banner__box-item">
                <div className="row">
                  {hero_box.map(item => (
                    <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
                      <Link href={item.link}>
                        <div
                          className={`banner__item d-flex ${item.border} align-items-center mb-30 wow fadeInUp`}
                          data-wow-delay=".2s"
                        >
                          <div className={`banner__item-icon ${item.color}`}>
                            <i className={item.icon}></i>
                          </div>
                          <div className="banner__item-content">
                            <span>{item.des}</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bannerscroll d-none d-xl-block">
          <div className="banner-scroll-btn">
            <a className="bannerscroll-icon" href="#tp-about-scroll">
              <i className="fa-light fa-computer-mouse"></i>
              <span>Крути вниз</span>
            </a>
          </div>
        </div>
        <div className="banner__shape d-none d-lg-block">
          <Image src="/assets/img/background/serhii-pose-narrow.jpg" alt="banner-img" width={800} height={500} />

          {/*<div className="banner__video-btn">*/}
          {/*  <button onClick={() => setIsVideoOpen(true)} className="banner__video-icon popup-video">*/}
          {/*    <i className="fa-solid fa-play"></i>*/}
          {/*  </button>*/}
          {/*</div>*/}
        </div>
      </section>
      {/* video modal start */}
      {/*<VideoPopup isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={'d8w5SICzzxc'} />*/}
      {/* video modal end */}
    </>
  );
};

export default HeroBanner;
