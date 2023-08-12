import SEO from '@/components/seo';
import Wrapper from '@/layout/wrapper';
import React from 'react';
import Results from '@/components/results/results';

const index = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle='Результати Лікування в МЦ "Рух Без Обмежень" - До та Після'
        pageDesc={
          'Результати Лікування Пацієнтів в Медичному Центрі "Рух Без Обмежень" ➡Результати Лікування Гриж, Сколіозів, Переломів ➡ Фото До та Після'
        }
      />
      <Results />
    </Wrapper>
  );
};

export default index;
