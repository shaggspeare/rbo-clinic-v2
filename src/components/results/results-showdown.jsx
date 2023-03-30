import React from 'react';
import results from '@/data/results';

const ResultsShowdown = () => {
  return (
    <>
      <section
        className="services-area tp-common-area  pb-130 grey-bg"
        style={{ backgroundImage: `url(/assets/img/shape/shape-bg-01.png)` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 col-12">
              <div className="tp-section tp-section-center">
                <span className="tp-section__sub-title left-line mb-20">реальні кейси</span>
                <h3 className="tp-section__title mb-75">Результати лікування</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {results.map(item => (
              <div key={item.id} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
                <div className={`services-thumb-box ${item.color} mb-30`}>
                  {!!item.img2 && (
                    <div className="services-thumb-box__label">
                      <div className="services-thumb-box__label-item services-thumb-box__label-item--before">До</div>
                      <div className="services-thumb-box__label-item services-thumb-box__label-item--after">Після</div>
                    </div>
                  )}
                  <div className="services-thumb-box__thumb fix">
                    <img src={item.img1} alt="services-thumb" className={item.orientation || 'vertical'} />
                    {!!item.img2 && (
                      <img src={item.img2} alt="services-thumb" className={item.orientation || 'vertical'} />
                    )}
                  </div>

                  <div className="services-thumb-box__text-area d-flex align-items-center">
                    <div className="services-thumb-box__content">
                      <h5 className="services-thumb-box__title">{item.name}</h5>

                      <div className="services-thumb-box__desc">{item.description}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ResultsShowdown;
