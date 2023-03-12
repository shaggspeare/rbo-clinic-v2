import React from 'react';

const AppointForm = () => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <div className="row">
        <div className="col-lg-6">
          <div className="visitor-form__input">
            <input type="text" placeholder="Ваше ім'я" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="visitor-form__input">
            <input type="tel" placeholder="Ваш телефон" />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="visitor-form__input">
            <textarea placeholder="Напишіть будь-ласка, що вас турбує" name="message"></textarea>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-12">
          <div className="visit-btn mt-20">
            <button className="tp-btn">Записатись</button>
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-12">
          <div className="visit-serial mt-45">
            <span>
              Або зателефонуйте нам: <br />
              <a href="tel:+380963050004">+38 096 3050004</a>
              &nbsp;&nbsp;та&nbsp;&nbsp;
              <a href="tel:+380933050004">+38 093 3050004</a>
            </span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AppointForm;
