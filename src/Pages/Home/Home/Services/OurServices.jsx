import React from 'react';

const OurServices = ({ service }) => {
    const { name, description, icon } = service;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={icon} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-secondary font-bold">{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default OurServices;