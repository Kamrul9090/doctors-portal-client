import React from 'react';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Banner from '../Banner/Banner';
import ContactForm from '../ContactForm/ContactForm';
import InfoCards from '../InfoCards/InfoCards';
import Patients from '../Patients/Patients';
import ServiceCard from './ServiceCard/ServiceCard';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <ServiceCard></ServiceCard>
            <MakeAppointment></MakeAppointment>
            <Patients></Patients>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;