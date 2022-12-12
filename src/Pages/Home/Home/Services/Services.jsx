import React from 'react';
import cavity from '../../../../assets/images/cavity.png';
import fluoride from '../../../../assets/images/fluoride.png';
import whitening from '../../../../assets/images/whitening.png';
import OurServices from './OurServices';
const Services = () => {
    const serviceData = [
        {
            id: 0,
            name: "Fluoride Treatment",
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity
        },
        {
            id: 1,
            name: "Cavity Filling",
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: fluoride
        },
        {
            id: 2,
            name: "Teeth Whitening",
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: whitening
        },
    ]
    return (
        <>
            <div className='mt-60 mb-16 text-center font-bold font-serif'>
                <h5 className='uppercase text-secondary'>Our Services</h5>
                <h1 className='text-3xl'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 p-5 md:grid-cols-2 lg:grid-cols-3 gap-8 shadow-2xl'>
                {
                    serviceData.map(service => <OurServices key={service.id} service={service}></OurServices>)
                }
            </div>
        </>
    );
};

export default Services;