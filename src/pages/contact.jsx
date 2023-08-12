import ContactUs from '@/components/contact/contact';
import SEO from '@/components/seo';
import Wrapper from '@/layout/wrapper';
import React from 'react';

const index = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle={'Контакти ☎️ Медичний Центр "Рух Без Обмежень" у Вишгороді'}
        pageDesc={
          'Контактні дані МЦ "Рух Без Обмежень" ➡ Номери телефонів, Адреса, Графік Роботи ➡ Записуйтесь Онлайн або Телефонуйте ☎️ +38 (096) 305 00 04'
        }
      />
      <ContactUs />
    </Wrapper>
  );
};

export default index;
