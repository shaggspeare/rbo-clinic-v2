import SEO from '@/components/seo';
import TeamTwo from '@/components/team/team-two/team-two';
import Wrapper from '@/layout/wrapper';
import React from 'react';

const index = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle='Команда Спеціалістів у МЦ "Рух Без Обмежень"'
        pageDesc={
          'Спеціалісти Медичного Центра "Рух Без Обмежень" ➡️ Кращі Фахівці у Вишгороді ➡️ Сучасні Методи Лікування ➡️ Записатися ☎️ +38 (096) 305 00 04'
        }
      />
      <TeamTwo />
    </Wrapper>
  );
};

export default index;
