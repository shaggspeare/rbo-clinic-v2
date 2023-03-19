import Sidebar from '@/common/sidebar';
import useSticky from 'hooks/use-sticky';
import Link from 'next/link';
import React, { useState } from 'react';
import NavMenu from './nav-menu';
import Image from 'next/image';

const HeaderTwo = () => {
  const { sticky } = useSticky();
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        id="header-mob-sticky"
        className={`tp-mobile-header-area pt-15 pb-15 d-xl-none ${sticky ? 'header-sticky' : ''} `}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 col-10">
              <div className="tp-mob-logo">
                <Link href="/">
                  <Image src="/assets/img/logo/logo-1.png" alt="logo" width={160} height={100} />
                </Link>
              </div>
            </div>
            <div className="col-md-8 col-2">
              <div className="tp-mobile-bar d-flex align-items-center justify-content-end">
                <div className="tp-bt-btn-banner d-none d-md-block d-xl-none mr-30">
                  <a className="tp-bt-btn" href="tel:+380963050004">
                    <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="2" cy="2" r="2" fill="#0E63FF" />
                      <circle cx="7" cy="2" r="2" fill="#0E63FF" />
                      <circle cx="12" cy="2" r="2" fill="#0E63FF" />
                      <circle cx="12" cy="7" r="2" fill="#0E63FF" />
                      <circle cx="12" cy="12" r="2" fill="#0E63FF" />
                      <circle cx="7" cy="7" r="2" fill="#0E63FF" />
                      <circle cx="7" cy="12" r="2" fill="#0E63FF" />
                      <circle cx="7" cy="17" r="2" fill="#0E63FF" />
                      <circle cx="2" cy="7" r="2" fill="#0E63FF" />
                      <circle cx="2" cy="12" r="2" fill="#0E63FF" />
                    </svg>
                    <span>Телефон :&nbsp;</span>+38 (096) 305 00 04, +38 (093) 305 00 04
                  </a>
                </div>
                <button onClick={() => setIsActive(true)} className="tp-menu-toggle">
                  <i className="far fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="d-none d-xl-block">
        <div className={`header-custom ${sticky ? 'header-sticky' : ''}`} id="header-sticky">
          <div className="header-logo-box">
            <Link href="/">
              <Image src="/assets/img/logo/logo-1.png" alt="logo" width={160} height={100} />
            </Link>
          </div>
          <div className="header-menu-box">
            <div className="header-menu-top">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <div className="header-top-mob">
                    <div className="header-top-mob__label">
                      <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="2" r="2" fill="#0E63FF" />
                        <circle cx="7" cy="2" r="2" fill="#0E63FF" />
                        <circle cx="12" cy="2" r="2" fill="#0E63FF" />
                        <circle cx="12" cy="7" r="2" fill="#0E63FF" />
                        <circle cx="12" cy="12" r="2" fill="#0E63FF" />
                        <circle cx="7" cy="7" r="2" fill="#0E63FF" />
                        <circle cx="7" cy="12" r="2" fill="#0E63FF" />
                        <circle cx="7" cy="17" r="2" fill="#0E63FF" />
                        <circle cx="2" cy="7" r="2" fill="#0E63FF" />
                        <circle cx="2" cy="12" r="2" fill="#0E63FF" />
                      </svg>
                      <span>Телефон:&nbsp;</span>
                    </div>
                    <div className="header-top-mob__value">
                      <a href="tel:380963050004">+38 (096) 305 00 04</a>
                      <a href="tel:380933050004"> +38 (093) 305 00 04 </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="header-time">
                    <span>
                      <i className="fa-light fa-clock-ten"></i>
                      <span> Пн - Пт: 09:00 - 11:00</span>
                      <span>, &nbsp;</span>
                      <span> Сб: 09:00 - 15:00</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-menu-bottom">
              <div className="row">
                <div className="col-lg-7">
                  <div className="main-menu main-menu-second">
                    <nav id="mobile-menu">
                      <NavMenu />
                    </nav>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="header-cart-order d-flex align-items-center justify-content-end">
                    <Link className="header-bottom-btn" href="/about">
                      записатися
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* side bar start */}
      <Sidebar isActive={isActive} setIsActive={setIsActive} />
      {/* side bar end */}
    </>
  );
};

export default HeaderTwo;
