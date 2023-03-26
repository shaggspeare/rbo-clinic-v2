import React from 'react';
import TeamDetailsArea from './team-details-area';
import { useRouter } from 'next/router';
import Footer from '@/layout/footer/footer';
import Appointment from '@/components/home/home/appointment';
import Header from '@/layout/header/header';

const TeamDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Header withBg />
      <TeamDetailsArea keyName={slug} />
      <Appointment />
      <Footer />
    </>
  );
};

export default TeamDetails;
