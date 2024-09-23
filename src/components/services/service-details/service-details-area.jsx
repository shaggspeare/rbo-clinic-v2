import React from 'react';

const ServiceDetailsArea = () => {
  return (
    <>
      <section className="services-details pt-130 pb-120">
        <div className="services-details__container container">
          <div className="row text-center">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="tp-section">
                <span className="tp-section__sub-title left-line right-line mb-20">лікуємо</span>
                <h1 className="tp-section__title mb-70">Наші послуги</h1>
              </div>
            </div>
          </div>

          <table className="services-details__table">
            <tbody>
            <tr>
              <td colSpan={2} className="category">
                Консультації лікарів
              </td>
            </tr>
            <tr>
              <td>Первинна консультація невролога-вертебролога</td>
              <td>700 грн</td>
            </tr>
            <tr>
              <td>Первинна консультація ортопеда-травматолога</td>
              <td>600 грн</td>
            </tr>
            <tr>
              <td>Первинна консультація мануального терапевта, остеопата</td>
              <td>600 грн</td>
            </tr>
            <tr>
              <td>Первинна консультація реабілітолога</td>
              <td>500 грн</td>
            </tr>
            <tr>
              <td>Повторна консультація невролога-вертебролога</td>
              <td>400 грн</td>
            </tr>
            <tr>
              <td>Повторна консультація ортопеда-травматолога</td>
              <td>300 грн</td>
            </tr>
            <tr>
              <td colSpan={2} className="category">
                Ін`єкційні методи лікування
              </td>
            </tr>
            <tr>
              <td>PRP-терапія хребта</td>
              <td>3300 грн</td>
            </tr>
            <tr>
              <td>PRP-терапія суглобів та сухожиль</td>
              <td>3100-3300 грн</td>
            </tr>
            <tr>
              <td>Внутрішньосуглобове введення гіалуронової кислоти (без вартості препарату)</td>
              <td>800 грн</td>
            </tr>
            <tr>
              <td> Ін`єкція колагену (в залежності від відділу)</td>
              <td>700-1200 грн</td>
            </tr>
            <tr>
              <td colSpan={2} className="category">
                Терапія
              </td>
            </tr>
            <tr>
              <td>Мануальна терапія</td>
              <td>1400-1600 грн</td>
            </tr>
            <tr>
              <td>Остеопатія</td>
              <td>1500-2000 грн</td>
            </tr>
            <tr>
              <td> Рефлексотерапія (в залежності від відділу)</td>
              <td>600-1000 грн</td>
            </tr>
            <tr>
              <td colSpan={2} className="category">
                Реабілітація, Кінезіотерапія, Тейпування
              </td>
            </tr>
            <tr>
              <td>Реабілітація (1 заняття)</td>
              <td>700 грн</td>
            </tr>
            <tr>
              <td>Післяопераційна реабілітація (1 заняття)</td>
              <td>700 грн</td>
            </tr>
            <tr>
              <td>Реабілітація після переломів (1 заняття)</td>
              <td>700 грн</td>
            </tr>
            <tr>
              <td>Кінезіотерапія (1 заняття)</td>
              <td>600 грн</td>
            </tr>
            <tr>
              <td>Тейпування ( в залежності від відділу)</td>
              <td>350-450 грн</td>
            </tr>
            <tr>
              <td>ЛФК + петля Глісона</td>
              <td>700 грн</td>
            </tr>
            <tr>
              <td colSpan={2} className="category">
                Фізіотерапевтичні процедури
              </td>
            </tr>
            <tr>
              <td>Електрофорез (1 процедура)</td>
              <td>300 грн</td>
            </tr>
            <tr>
              <td>Магнітотерапія (1 процедура)</td>
              <td>300 грн</td>
            </tr>
            <tr>
              <td> Ультрафонофорез з мазями (1 процедура)</td>
              <td>350 грн</td>
            </tr>
            <tr>
              <td> Витяжіння хребта та суглобів (1 процедура)</td>
              <td>800 грн</td>
            </tr>
            <tr>
              <td> Стимуляція ( 1 процедура)</td>
              <td>350 грн</td>
            </tr>
            <tr>
              <td>Магнітолазер (1 процедура)</td>
              <td>300 грн</td>
            </tr>
            <tr>
              <td colSpan={2} className="category">
                Масаж
              </td>
            </tr>
            <tr>
              <td>Масаж спини (тривалість 40 хв)</td>
              <td>700 грн</td>
            </tr>
            <tr>
              <td>Масаж комірцевої зони (тривалість 25 хв)</td>
              <td>400 грн</td>
            </tr>
            <tr>
              <td>Масаж шийно-грудного відділу хребта (тривалість 30 хв)</td>
              <td>500 грн</td>
            </tr>
            <tr>
              <td>Загальний масаж (тривалість 60 хв)</td>
              <td>від 1000 грн</td>
            </tr>
            <tr>
              <td>Дитячий масаж від 7 років (тривалість 30 хв)</td>
              <td>500-600 грн</td>
            </tr>

            <tr>
              <td>Антицелюлітний масаж (тривалість 40-60 хв)</td>
              <td>від 1000 грн</td>
            </tr>
            <tr>
              <td>Лімфодренажний масаж (тривалість 30-50 хв)</td>
              <td>від 700 грн</td>
            </tr>
            <tr>
              <td>Спортивний масаж (тривалість 40 хв)</td>
              <td>800 грн</td>
            </tr>
            <tr>
              <td>Банки</td>
              <td>200 грн</td>
            </tr>
            <tr>
              <td>Тейпи (одна зона)</td>
              <td>300 грн</td>
            </tr>
            <tr>
              <td colSpan={2} className="category">
                Травматологічні процедури
              </td>
            </tr>
            <tr>
              <td>Пункція суглоба</td>
              <td>600 грн</td>
            </tr>
            <tr>
              <td>Накладання гіпсової пов`язки без репозиції</td>
              <td>600-1000 грн</td>
            </tr>
            <tr>
              <td>Накладання Scotchcast без репозиції</td>
              <td>800-1400 грн</td>
            </tr>
            <tr>
              <td colSpan={2} className="category">
                Комплексне лікування сколіозу
              </td>
            </tr>
            <tr>
              <td>Комплексне лікування сколіозу (лікувальна фізкультура 30-40 хв+ масаж спини 30-40 хв)</td>
              <td>1100 грн</td>
            </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsArea;
