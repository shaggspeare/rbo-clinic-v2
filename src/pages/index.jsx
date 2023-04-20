import React from 'react';
import Layout from '@/layout/layout';
import HomeOne from '@/components/home/home/home';
import SEO from '@/components/seo';
import Wrapper from '@/layout/wrapper';

const index = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle="Головна"
        pageDesc={
          'Медична клініка Вишгород, реабілітолог, Реабілітація, Кінезіотерапія, Тейпування, Терапія, Фізіотерапевтичні процедури, масаж, Ін`єкційні методи лікування'
        }
      />
      <Layout>
        <HomeOne />
      </Layout>
    </Wrapper>
  );
};

export default index;
