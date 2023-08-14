import Head from 'next/head';

const SEO = ({ pageTitle, pageDesc }) => (
  <>
    <Head>
      <title>{pageTitle ? `${pageTitle}` : `Рух без обмежень - медична клініка, Вишгород`}</title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="description"
        content={
          pageDesc
            ? pageDesc
            : 'Медична клініка Вишгород, реабілітолог, Реабілітація, Кінезіотерапія, Тейпування, Терапія, Фізіотерапевтичні процедури, масаж, Ін`єкційні методи лікування'
        }
      />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  </>
);

export default SEO;
