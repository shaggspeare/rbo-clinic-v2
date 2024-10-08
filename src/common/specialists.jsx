import Link from "next/link";
import React from "react";


// choose data
const choose = [
  {
    id: 1,
    color: "",
    icon: "flaticon-thinking",
    title: (
      <>
        Професіоналізм
      </>
    ),
    des: (
      <>
        Nam eget dui vel quam sodales <br />
        semper quis porttitor tortor.
      </>
    ),
  },
  {
    id: 2,
    color: "pink-icon",
    icon: "flaticon-user",
    title: (
      <>
        Індивідуальний <br />
        підхід
      </>
    ),
    des: (
      <>
        Nam eget dui vel quam sodales <br />
        semper quis porttitor tortor.
      </>
    ),
  },
  {
    id: 3,
    color: "green-icon",
    icon: "flaticon-target",
    title: (
      <>
        Швидкий <br /> Результат
      </>
    ),
    des: (
      <>
        Nam eget dui vel quam sodales <br />
        semper quis porttitor tortor.
      </>
    ),
  },
  {
    id: 4,
    color: "sky-icon",
    icon: "flaticon-24-hours-1",
    title: (
      <>
       Турбота <br /> про пацієнта
      </>
    ),
    des: (
      <>
        Nam eget dui vel quam sodales <br />
        semper quis porttitor tortor.
      </>
    ),
  },
];


const Specialists = () => {
  return (
    <>
      <section className="choose-area theme-bg pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-section text-center">
                <span className="tp-section__sub-title left-line right-line mb-25">
                  наша спеціалізація
                </span>
                <h3 className="tp-section__title title-white mb-85">
                  Чому обирають нас
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            {choose.map((item) => (
              <div key={item.id} className="col-xl-3 col-md-6">
                <div
                  className="tp-choose__item ml-75 mb-50 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <div className={`tp-choose__icon ${item.color} mb-40`}>
                    <i className={item.icon}></i>
                  </div>
                  <div className="tp-choose__content">
                    <h4 className="tp-choose__title mb-20">{item.title}</h4>
                    {/*<p>{item.des}</p>*/}
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

export default Specialists;
