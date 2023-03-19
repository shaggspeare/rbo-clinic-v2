import DirectContactUs from '@/components/forms/direct-contact-us';

import HeaderTwo from '@/layout/header/header-two';
import React from 'react';
import BannerTeamTwo from './banner-team-two';
import TeamArea from './team-area';
import Footer from '@/layout/footer/footer';
import Appointment from '@/components/home/home/appointment';

const TeamTwo = () => {
  return (
    <>
      <HeaderTwo />
      <BannerTeamTwo />
      <TeamArea />
      <Appointment />
      <Footer />
    </>
  );
};

export default TeamTwo;
