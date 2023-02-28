import React from "react";

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
            <input type="email" placeholder="Ваше електронна пошта" />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="visitor-form__input">
            <input type="text" placeholder="Напишіть будь-ласка, що вас турбує" />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="visitor-form__input">
            <textarea placeholder="Додаткові деталі вкажіть тут" name="message"></textarea>
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
              Або зателефонуйте нам :
              <a href="tel:+380963050004">
                +38 096 3050004
                <i className="fa-regular fa-arrow-right"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AppointForm;
