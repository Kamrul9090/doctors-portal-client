import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../Layout/AuthProvider';
import toast from 'react-hot-toast';

const BookModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    const { user } = useContext(AuthContext)
    const { name: treatmentName, price, slots } = treatment;
    const date = format(selectedDate, 'PP')

    const bookingModal = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            email,
            phone,
            price
        }

        fetch(`https://doctors-portal-server-sandy-sigma.vercel.app/bookings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Booking Confirmed');
                    setTreatment(null)
                    refetch()
                }
                else {
                    toast.error(data.message)
                }
            })
    }

    return (
        <>

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <form onSubmit={bookingModal} className='grid grid-cols-1 gap-5 mt-5'>
                        <input type="text" value={date} disabled className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option
                                    key={i}
                                    value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name="name" defaultValue={user?.displayName} disabled type="text" placeholder="name" className="input input-bordered w-full" />
                        <input name="email" defaultValue={user?.email} disabled type="email" placeholder="email" className="input input-bordered w-full" />
                        <input name="phone" type="text" placeholder="phone" className="input input-bordered w-full" />
                        <button type='submit' className='btn btn-accent w-full'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookModal;