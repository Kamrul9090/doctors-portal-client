import React from 'react';
import chair from '../../../assets/images/chair.png';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import img from '../../../assets/images/bg.png'
const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <header className='my-32' style={{ background: `url(${img})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="lg:max-w-md rounded-lg shadow-2xl lg:ml-20" alt='' />
                    <div>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={(selectedDate) => {
                                if (selectedDate) {
                                    setSelectedDate(selectedDate)
                                }
                            }}
                        ></DayPicker>
                        <p>You have Selected data: {format(selectedDate, 'PP')}</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;