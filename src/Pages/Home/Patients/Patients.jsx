import React from 'react';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import PatientsOpinion from './PatientsOpinion';
const Patients = () => {

    const patientsData = [
        {
            id: 0,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people1,
            name: 'Rakibul Islam',
            location: 'California'
        },
        {
            id: 1,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2,
            name: 'Sayra Khatun',
            location: 'New York'
        },
        {
            id: 2,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3,
            name: 'Maria Mamba',
            location: 'Dhaka'
        }
    ]
    return (
        <div className='mt-20'>
            <div className='font-bold'>
                <h5 className='text-secondary text-xl'>Testimonial</h5>
                <h1 className='text-4xl'>What Our Patients Says</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-36'>
                {
                    patientsData.map(patient => <PatientsOpinion key={patient.id} patient={patient}></PatientsOpinion>)
                }
            </div>
        </div>
    );
};

export default Patients;