import HeaderTwo from '@/layout/header/header-two';
import React from 'react';
import Banner from './banner';
import ContactForm from './contact-form';
import Footer from '@/layout/footer/footer';
import Header from '@/layout/header/header';
import Appointment from '@/components/home/home/appointment';

const ContactUs = () => {
  return (
    <>
      <Header withBg />
        <ContactForm />
        <Appointment />
      <Footer />
    </>
  );
};

export default ContactUs;
