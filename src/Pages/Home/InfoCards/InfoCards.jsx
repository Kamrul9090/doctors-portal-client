import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';
const InfoCards = () => {

    const cardData = [
        {
            id: 0,
            name: "Opening Hours",
            description: 'Open 9:00 AM to 9:00 PM every Day',
            icon: clock,
            bgClass: 'bg-gradient-to-l from-primary to-secondary'
        },
        {
            id: 1,
            name: "Visit our location",
            description: 'Open 9:00 AM to 9:00 PM every Day',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 2,
            name: "Contact us now",
            description: 'Open 9:00 AM to 9:00 PM every Day',
            icon: phone,
            bgClass: 'bg-gradient-to-l from-primary to-secondary'
        },
    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-36'>
            {
                cardData.map(card => <InfoCard key={card.id} card={card}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;