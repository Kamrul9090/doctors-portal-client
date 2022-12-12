import React from 'react';

const PatientsOpinion = ({ patient }) => {
    const { name, location, img, description } = patient;
    return (
        <div>
            <div className="text-center font-semibold p-5 border-2">
                <p>{description}</p>
                <div className='flex items-center justify-center mt-10'>
                    <img src={img} className="w-16" alt="" srcset="" />
                    <div className='ml-2'>
                        <p>{name}</p>
                        <small className='font-bold'>{location}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientsOpinion;