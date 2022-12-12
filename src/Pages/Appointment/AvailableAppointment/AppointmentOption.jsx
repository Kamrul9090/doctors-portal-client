
const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, price, slots } = appointmentOption;
    return (
        <div>
            <div className="card shadow-2xl">
                <div className="card-body text-center font-semibold">
                    <h2 className="font-bold text-2xl text-secondary">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : "Try another day"}</p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                    <p className="font-bold text-xl text-blue-700">Price: <small>{price}</small></p>
                    <div className="card-actions justify-center">
                        <label
                            disabled={slots.length === 0}
                            onClick={() => setTreatment(appointmentOption)} htmlFor="booking-modal" className="btn text-white">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;