import Link from "next/link";
import React from "react";

const BannerTeamTwo = () => {
  return (
    <div className='team-banner-wrapper'>
      <section
        className="breadcrumb__area team-banner"
        style={{
          backgroundImage: `url(/assets/img/team/crew-together.webp`,
        }}
      >
        <div className="team-banner__container">

            <h1 className="team-banner__heading">Наша команда</h1>
            <Link className="tp-btn team-banner__btn" href="/#appointment-home">
                Записатися на прийом
            </Link>
        </div>
      </section>
    </div>
  );
};

export default BannerTeamTwo;
