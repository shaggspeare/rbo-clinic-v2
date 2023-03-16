import React, { useState } from 'react';

const AppointForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [buttonText, setButtonText] = useState('Записатись');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    setButtonText('Відправляємо');
    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify({
        name: name,
        phone: phone,
        message: message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      setShowSuccessMessage(false);
      setShowFailureMessage(true);
      setButtonText('Записатись');
      return;
    }
    setShowSuccessMessage(true);
    setShowFailureMessage(false);
    setButtonText('Записатись');
    setButtonDisabled(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-6">
          <div className="visitor-form__input">
            <input
              type="text"
              placeholder="Ваше ім'я"
              value={name}
              onChange={e => {
                setName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="visitor-form__input">
            <input
              type="tel"
              placeholder="Ваш телефон"
              value={phone}
              onChange={e => {
                setPhone(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="visitor-form__input">
            <textarea
              placeholder="Напишіть будь-ласка, що вас турбує"
              name="message"
              value={message}
              onChange={e => {
                setMessage(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-12">
          <div className="visit-btn mt-20">
            <button disabled={buttonDisabled} className="tp-btn">
              {buttonText}
            </button>
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-12">
          <div className="visit-serial mt-45">
            <span>
              Або зателефонуйте нам: <br />
              <a href="tel:+380963050004">+38(096)305 00 04</a>
              &nbsp;&nbsp;та&nbsp;&nbsp;
              <a href="tel:+380933050004">+38(093)305 00 04</a>
            </span>
          </div>
        </div>


        <div className="col-lg-12">
          {showSuccessMessage && (
            <p className="visit-success">Ми отримали Ваш запит, обов&apos;язково зателефонуємо Вам</p>
          )}
          {showFailureMessage && <p className="visit-error">На жаль, сталась помилка</p>}
        </div>
      </div>
    </form>
  );
};

export default AppointForm;
