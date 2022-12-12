import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import bgAppointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton';
const MakeAppointment = () => {
    return (
        <div className="hero mt-44" style={{ backgroundImage: `url(${bgAppointment})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="hero-content flex-col md:flex-row lg:flex-row">
                <img src={doctor} alt="" className="max-w-sm -mt-20 hidden md:block lg:block rounded-lg shadow-2xl " />
                <div className='lg:ml-24 text-white'>
                    <h5 className="font-bold text-secondary">Appointment</h5>
                    <h1 className="text-3xl font-bold">Make an appointment Today</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Appointment</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;