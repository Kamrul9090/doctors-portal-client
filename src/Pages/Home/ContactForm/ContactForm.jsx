import React from 'react';
import BgAppointment from '../../../assets/images/appointment.png';
const ContactForm = () => {
    return (
        <section className='mt-36' style={{ background: `url(${BgAppointment})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className='font-bold text-center pt-16 pb-14'>
                <h5 className='text-secondary'>Contact Us</h5>
                <h2 className='text-3xl text-white'>Stay connected with us</h2>
            </div>
            <div className='text-center'>
                <form className='space-y-5 pb-40'>
                    <input type="email" placeholder="Email address" className="input input-bordered w-full max-w-xs" /> <br />
                    <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs" /><br />
                    <textarea className="textarea w-80 h-36" placeholder="Your message"></textarea>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;