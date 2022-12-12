import React from 'react';

const Footer = () => {
    return (
        <div className='mx-5 font-bold font-serif'>
            <footer className="footer p-10">
                <div>
                    <span className="footer-title">services</span>
                    <a className="link link-hover">Emergency Checkup</a>
                    <a className="link link-hover">Monthly Checkup</a>
                    <a className="link link-hover">Weekly Checkup</a>
                    <a className="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span className="footer-title">oral health</span>
                    <a className="link link-hover">Fluoride Treatment</a>
                    <a className="link link-hover">Cavity Filling</a>
                    <a className="link link-hover">Teath Whitening</a>
                </div>
                <div>
                    <span className="footer-title">our address</span>
                    <a className="link link-hover">New York - 101010 Hudson</a>
                </div>
            </footer>
            <div className='text-center font-bold'>
                <span>Copyright 2022 All Rights Reserved</span>

            </div>
        </div>
    );
};

export default Footer;