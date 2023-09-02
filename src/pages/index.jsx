import React from 'react';
import Layout from '@/layout/layout';
import HomeOne from '@/components/home/home/home';
import SEO from '@/components/seo';
import Wrapper from '@/layout/wrapper';

const index = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle='"Рух Без Обмежень" - Медичний Центр у Вишгороді'
        pageDesc={
          'МЦ "Рух Без Обмежень" у Вишгороді ➡ Невролог, Ортопед, Травматолог, Мануальний Терапевт, Остеопат, Реабілітолог, Фізіотерапевтичні Процедури, Масаж ➡ Телефонуйте ☎️ +38 (096) 305 00 04'
        }
      />
      <Layout>
        <HomeOne />
      </Layout>
    </Wrapper>
  );
};

export default index;
