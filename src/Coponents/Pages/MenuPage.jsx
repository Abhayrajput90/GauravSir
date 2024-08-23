import React from 'react';
import CtaSection from '../CtaSection';
import UpdateMenu from '../UpdateMenu';

const MenuPage = () => {

    return (
        <>
            <div className="about-bg">
                <div className="about-text-overlay text-center">
                    <h1 className="about-title">Our Menu</h1>
                    <p className="about-subtitle">Popular Food</p>
                </div>
            </div>
            <UpdateMenu/>
            <CtaSection />
        </>
    );
};

export default MenuPage;
