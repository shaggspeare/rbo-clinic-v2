import SEO from '@/components/seo';
import ServiceOne from '@/components/services/service/service-one';
import Wrapper from '@/layout/wrapper';
import React from 'react';

const index = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle='Перелік Послуг у МЦ "Рух Без Обмежень" Вишгород'
        pageDesc={
          'Послуги в у МЦ "Рух Без Обмежень" ➡️ Консультації лікарів ✅ Реабілітація ✅ Кінезіотерапія ✅ Тейпування ✅ Фізіотерапевтичні процедури ✅ Масаж ✅ Оперативне лікування ✅ Травматологічні процедури ✅ Лікування Сколіозу.'
        }
      />
      <ServiceOne />
    </Wrapper>
  );
};

export default index;
