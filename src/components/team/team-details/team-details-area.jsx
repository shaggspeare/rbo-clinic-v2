import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {teamDetailsInfo} from "@/components/team/team-details/team-details-data";


const TeamDetailsArea = ({ keyName }) => {
  const memberInfo = teamDetailsInfo.find(item => item.key === keyName);

  if (!memberInfo) {
    return null;
  }

  return (
    <>
      <section className="team-details-area pt-130 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="tp-team-dtls__thumb mb-50 team-details-area__img-holder">
                <Image
                  width={400}
                  height={400}
                  src={memberInfo.img}
                  alt={`${keyName}'s picture`}
                  className="team-details-area__img"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="tp-team-dtls__content mt-50 mb-50">
                <h1 className="tp-team-dtls__title mb-10">{memberInfo.name}</h1>
                <p className="tp-team-dtls__short-desc mb-35">{memberInfo.title}</p>
                <p className="tp-team-dtls__specialty">{memberInfo.description}</p>
                <div className="tp-team-dtls__info">
                  {memberInfo.socialLinks && (
                    <div className="tp-team-dtls__social mt-45 mb-50">
                      {memberInfo.socialLinks.map((link, i) => (
                        <Link key={i} className={link.color} href={link.link} target={link.target}>
                          <i className={link.icon}></i>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-team-dtls-text mt-40">
                <h4 className="tp-team-dtls-text__title mb-30">{memberInfo.personalExperience.title}</h4>
                {memberInfo.personalExperience.description}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay=".2s">
              <div className="tp-team-dtls-item mb-50 mt-35 wow fadeInUp" data-wow-delay=".2s">
                <h4 className="tp-team-dtls-item__title mb-25">{memberInfo.personalInfo[0].title}</h4>
                <div className="tp-team-dtls-item__list">
                  <ul>
                    {memberInfo.personalInfo[0].list.map((item, i) => (
                      <li key={i}>
                        <i className="fa-solid fa-check"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 wow fadeInRight" data-wow-delay=".2s">
              {memberInfo.personalInfo[1] && (
                <div className="tp-team-dtls-item mb-50 mt-35 ml-40 wow fadeInUp" data-wow-delay=".4s">
                  <h4 className="tp-team-dtls-item__title mb-25">{memberInfo.personalInfo[1].title}</h4>

                  <div className="tp-team-dtls-item__list">
                    <ul>
                      {memberInfo.personalInfo[1].list.map((item, i) => (
                        <li key={i}>
                          <i className="fa-solid fa-check"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamDetailsArea;
