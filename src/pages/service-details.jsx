import SEO from '@/components/seo';
import ServiceDetails from '@/components/services/service-details/service-details';
import Wrapper from '@/layout/wrapper';
import React from 'react';

const index = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle='Вартість Медичних Послуг МЦ "Рух Без Обмежень" у Вишгороді'
        pageDesc={
          'Вигідні Ціни на Весь Спектр Медичних Послуг та Консультацію Лікарів ✅ Детальніше про Вартість послуг можна уточнити за телефоном ☎️ +38 (096) 305 00 04'
        }
      />
      <ServiceDetails />
    </Wrapper>
  );
};

export default index;
