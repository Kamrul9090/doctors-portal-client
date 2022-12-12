import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useNavigation } from 'react-day-picker';
import { useLoaderData } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
    const booking = useLoaderData();
    // const navigation = useNavigation();
    const { price, slot, appointmentDate, treatment } = booking;

    // if (navigation.state === 'loading') {
    //     return <BeatLoader></BeatLoader>
    // }
    return (
        <div>
            <h1 className='text-3xl'>Payment for {treatment}</h1>
            <p className='mt-5'>Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
            <div className='w-96 mt-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;