import MobileMenus from '@/layout/header/mobile-menus';
import ImagePopup from '@/modals/ImagePopup';
import Link from 'next/link';
import React, { useState } from 'react';

const images = [
  {
    img: '/assets/img/blog/blog-in-01.jpg',
  },
  {
    img: '/assets/img/blog/blog-in-02.jpg',
  },
  {
    img: '/assets/img/blog/blog-in-03.jpg',
  },
];

const Sidebar = ({ isActive, setIsActive }) => {
  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [isOpen, setIsOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = i => {
    setPhotoIndex(i);
    setIsOpen(true);
  };
  //  images
  const img = images.map(item => item.img);

  return (
    <>
      <div className={`tpsideinfo tp-side-info-area ${isActive ? 'tp-sidebar-opened' : ''}`}>
        <button onClick={() => setIsActive(false)} className="tpsideinfo__close">
          <i className="fal fa-times"></i>
        </button>

        <div className="mobile-menu mean-container d-block d-lg-none">
          <div className="mean-bar">
            <MobileMenus />
          </div>
        </div>

        <div className="tpsideinfo__content mb-60">
          <span>Звертайтесь</span>
          <a href="https://www.google.com/maps/place/%D0%A0%D1%83%D1%85+%D0%91%D0%B5%D0%B7+%D0%9E%D0%B1%D0%BC%D0%B5%D0%B6%D0%B5%D0%BD%D1%8C/@50.5814259,30.4880277,15z/data=!4m6!3m5!1s0x40d4d3b761b9db67:0x8c3e0053ba53fc11!8m2!3d50.5814259!4d30.4880277!16s%2Fg%2F11q25cb_xd?entry=ttu">
            <i className="fa-solid fa-star"></i>Пр.Шевченка 2Г, Вишгород
          </a>
          <a href="tel:+380963050004">
            <i className="fa-solid fa-star"></i>+38 (096) 305 00 04
          </a>
          <a href="tel:+380933050004">
            <i className="fa-solid fa-star"></i>+38 (093) 305 00 04
          </a>
        </div>
        <div className="tpsideinfo__content-inputarea mb-60 d-none d-xl-block">
          <span>Get Update</span>
          <div className="tpsideinfo__content-inputarea-input">
            <form action="#">
              <input type="email" placeholder="Enter Mail" />
              <button className="tpsideinfo__content-inputarea-input-btn">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="tpsideinfo__gallery mb-35 d-none d-xl-block">
          <span>Cheack Instagram Post</span>
          <div className="tpsideinfo__gallery-item">
            {images.map((item, i) => (
              <a key={i} style={{ cursor: 'pointer' }} onClick={() => handleImagePopup(i)} className="popup-image">
                <img src={item.img} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div onClick={() => setIsActive(false)} className={`body-overlay ${isActive ? 'opened' : ''}`}></div>

      {/* image light box start */}
      {isOpen && (
        <ImagePopup images={img} setIsOpen={setIsOpen} photoIndex={photoIndex} setPhotoIndex={setPhotoIndex} />
      )}
      {/* image light box end */}
    </>
  );
};

export default Sidebar;
