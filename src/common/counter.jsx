import React from "react";
import Count from "./count";

//  counter_text;
const counter_text = [
  {
    id: 1,
    color: "blue-hard",
    counter: 2018,
    text: "Рік заснування центру",
    andMore: false,
  },
  {
    id: 2,
    color: "pink-hard",
    counter: 2000,
    text: "Проведених PRP-терапій",
    andMore: true,
  },
  {
    id: 3,
    color: "sky-hard",
    counter: 5000,
    text: "Вилікуваних пацієнтів",
    andMore: true,
  },

];

const Counter = ({ cls = "pt-40 pb-100"  }) => {
  return (
    <>
      <section className={`counter-area ${cls}`}>
        <div className="container">
          <div className="row">
            {counter_text.map((item) => (
              <div key={item.id} className="col-xl-4 col-md-6">
                <div
                  className="counter__item blue-border mb-30 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className={`counter__icon ${item.color} mb-15`}>
                    <i></i>
                  </div>
                  <div className="counter__content">
                    <h4 className="counter__title">
                      <span className="counter d-flex">
                        <Count  number={item.counter} />
                        {item.andMore && '+'}
                      </span>
                    </h4>
                    <p>{item.text}</p>
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

export default Counter;
