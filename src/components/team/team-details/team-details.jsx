import HeaderTwo from '@/layout/header/header-two';
import React from 'react';
import TeamDetailsArea from './team-details-area';
import { useRouter } from 'next/router';
import Footer from "@/layout/footer/footer";
import Appointment from "@/components/home/home/appointment";

const TeamDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <HeaderTwo />
      <TeamDetailsArea />
      <Appointment/>
      <Footer />
    </>
  );
};

export default TeamDetails;
