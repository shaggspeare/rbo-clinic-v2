import Link from 'next/link';
import React, { useState } from 'react';
import NavMenu from './nav-menu';
import useSticky from 'hooks/use-sticky';
import Sidebar from '@/common/sidebar';
import Image from 'next/image';

const Header = ({withBg= false}) => {
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
                  <img src="/assets/img/logo/logo-1.png" alt="logo" />
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
        <div className={`header__area ${withBg ? 'header__area--with-bg' : ''} tp-home-one ${sticky ? 'header-sticky' : ''}`} id="header-sticky">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xxl-2 col-lg-2">
                <div className="logo">
                  <Link href="/">
                    <Image src="/assets/img/logo/logo-1.png" alt="logo" width={160} height={100} />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-6 col-lg-6">
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <NavMenu />
                  </nav>
                </div>
              </div>
              <div className="col-xxl-4 col-lg-4 d-flex align-items-center justify-content-end">
                <div className="tp-bt-btn-banner">
                  <div className="phone-container">
                    <i className="fa-solid fa-phone phone-container__icon"></i>
                    <div className="phone-container__body">
                      <a className="" href="tel:+380963050004">
                        +38 (096) 305 00 04
                      </a>
                      <br />
                      <a className="" href="tel:+380933050004">
                        +38 (093) 305 00 04
                      </a>
                    </div>
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

export default Header;
