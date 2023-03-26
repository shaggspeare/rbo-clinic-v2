import React from 'react';
import Footer from '@/layout/footer/footer';
import ServiceDetailsArea from './service-details-area';
import Header from '@/layout/header/header';
import Appointment from '@/components/home/home/appointment';

const ServiceDetails = () => {
  return (
    <>
      <Header withBg />
      <ServiceDetailsArea />
      <Appointment />
      <Footer />
    </>
  );
};

export default ServiceDetails;
