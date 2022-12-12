import React from 'react';
import image from '../../../assets/images/chair.png';
import bgChair from '../../../assets/images/bg.png';
import PrimaryButton from '../../../components/PrimaryButton';
const Banner = () => {
    return (
        <div>
            <div className="hero" style={{ backgroundImage: `url(${bgChair})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={image} className="w-full lg:w-1/2  rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Getting Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;