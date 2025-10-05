
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AppointForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      phone: '',
      message: '',
    },
  });

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [buttonText, setButtonText] = useState('Записатись');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const onSubmit = async e => {

    setButtonText('Відправляємо');
    const res = await fetch('/api/telegram', {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-lg-6">
          <div className="visitor-form__input">
            <input
              type="text"
              placeholder="Ваше ім'я"
              {...register('name', {
                required: true,
                onChange: e => {
                  setName(e.target.value);
                },
              })}
            />
            {errors.name?.type === 'required' && (
              <p className="visitor-form__error" role="alert">
                Необхідно вказати ім&apos;я
              </p>
            )}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="visitor-form__input">
            <input
              type="tel"
              placeholder="Ваш телефон"
              {...register('phone', {
                required: true,
                minLength: 10,
                onChange: e => {
                  setPhone(e.target.value);
                },
              })}
            />
            {errors.phone?.type === 'required' && (
              <p className="visitor-form__error" role="alert">
                Необхідно вказати моб. телефон
              </p>
            )}
            {errors.phone?.type === 'minLength' && (
                <p className="visitor-form__error" role="alert">
                  Вкажіть дійсний номер
                </p>
            )}
          </div>
        </div>
        <div className="col-lg-12">
          <div className="visitor-form__input">
            <textarea
              placeholder="Напишіть будь-ласка, що вас турбує"
              {...register('message', {
                onChange: e => {
                  setMessage(e.target.value);
                },
              })}
            ></textarea>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-12">
          <div className="visit-btn mt-20">
            <button type={'submit'} disabled={buttonDisabled} className="tp-btn">
              {buttonText}
            </button>
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-12">
          <div className="visit-serial">
            <span>
              Або зателефонуйте нам: <br />
              <a href="tel:+380963050004">+38(096)305 00 04</a>
              <br />
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
