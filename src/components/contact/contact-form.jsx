import Link from 'next/link';
import React from 'react';
import ContactUs from '../forms/contact-us';

// contact_info
const contact_info = {
  address: (
    <>
      Пр.Шевченка 2Г,
      <br /> Вишгород
    </>
  ),
  phone_1: '+38 (096) 305 00 04',
  phone_2: '+38 (093) 305 00 04',
  open: (
    <>
      Пн-Пт: 9:00 - 19:00
      <br />
      Сб: 9:00 - 15:00
    </>
  ),
};

const { address, phone_1, phone_2, open } = contact_info;
const ContactForm = () => {
  return (
    <>
      <section className="contact-area  pb-115">
        <div className="container">
          <div className="row">
            <div className="tpcontact-wrapper col-12">
              <div className="tpcontact mr-60 mb-60">
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                    <img src="/assets/img/icon/contact-01.svg" alt="adress" />
                  </div>
                  <div className="tpcontact__address">
                    <h4 className="tpcontact__title mb-15">Адреса</h4>
                    <span>{address}</span>
                  </div>
                </div>
              </div>
              <div className="tpcontact mr-60 mb-60">
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                    <img src="/assets/img/icon/contact-02.svg" alt="phone number" />
                  </div>
                  <div className="tpcontact__address">
                    <h4 className="tpcontact__title mb-15">Телефони</h4>
                    <span>
                      <a href={`tel:${phone_1}`}>{phone_1}</a>
                    </span>
                    <span>
                      <a href={`tel:${phone_2}`}>{phone_2}</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="tpcontact mr-60 mb-60">
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                    <img src="/assets/img/icon/contact-03.svg" alt="schedule" />
                  </div>
                  <div className="tpcontact__address">
                    <h4 className="tpcontact__title mb-15">Графік прийому</h4>
                    <span>{open}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="contactform">
                <h4 className="contactform__title mb-35">Як нас знайти :</h4>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="tpcontactmap">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1266.7316784876182!2d30.488086971679145!3d50.581340503078785!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4d3b761b9db67%3A0x8c3e0053ba53fc11!2z0KDRg9GFINCR0LXQtyDQntCx0LzQtdC20LXQvdGM!5e0!3m2!1sru!2sua!4v1679788427814!5m2!1sru!2sua"
                        width="600"
                        height="700"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
