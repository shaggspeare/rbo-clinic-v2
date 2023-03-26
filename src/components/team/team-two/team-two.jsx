import React from 'react';
import BannerTeamTwo from './banner-team-two';
import TeamArea from './team-area';
import Footer from '@/layout/footer/footer';
import Appointment from '@/components/home/home/appointment';
import Header from '@/layout/header/header';

const TeamTwo = () => {
  return (
    <>
      <Header withBg />
      <BannerTeamTwo />
      <TeamArea />
      <Appointment />
      <Footer />
    </>
  );
};

export default TeamTwo;
