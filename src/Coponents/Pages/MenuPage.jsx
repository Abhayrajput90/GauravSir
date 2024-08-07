import React, { useState, useEffect } from 'react';
import menuData from '../Home/Main.json';
import CtaSection from '../CtaSection';

const MenuPage = () => {
    const [data, setData] = useState([]);
    const [activeTab, setActiveTab] = useState('Slection');
    const [activeSubTab, setActiveSubTab] = useState('');
    const [itemsToShow, setItemsToShow] = useState(2);

    useEffect(() => {

        setData(menuData.menu);
    }, []);

    const handleTabClick = (category) => {
        setActiveTab(category);
        setActiveSubTab('');
        setItemsToShow(20);
    };

    const handleSubTabClick = (event) => {
        setActiveSubTab(event.target.value);
        setItemsToShow(20);
    };

    const handleLoadMore = () => {
        setItemsToShow(prev => prev + 3);
    };
    const filteredData = data.filter(item =>
        item.category.includes(activeTab) &&
        (!activeSubTab || item.subCategory.includes(activeSubTab))
    );


    const visibleData = filteredData.slice(0, itemsToShow);

    const subCategories = [
        ...new Set(
            data
                .filter(item => item.category.includes(activeTab))
                .flatMap(item => item.subCategory)
        ),
    ];

    return (
        <>
            <div className="about-bg">
                <div className="about-text-overlay text-center">
                    <h1 className="about-title">Our Menu</h1>
                    <p className="about-subtitle">Popular Food</p>
                </div>
            </div>
            <div className="container-fluid menu bg-light py-6">
                <div className="container">
                    <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light eventborder rounded-pill px-4 py-1 mb-3">Our Menu</small>
                        <h1 className="display-5 mb-5">Most Popular Food in the World</h1>
                    </div>
                    <div className="tab-className text-center">
                        <ul className="nav nav-pills d-inline-flex justify-content-center mb-4 flex-wrap wow bounceInUp text-center" data-wow-delay="0.1s">
                            {['Slection', 'Pakages'].map((category, index) => (
                                <li key={index} className="nav-item p-2 col-6 col-md-auto">
                                    <a
                                        className={`d-flex text-decoration-none py-2 mx-2 eventborder bg-white rounded-pill ${activeTab === category ? 'active' : ''}`}
                                        onClick={() => handleTabClick(category)}
                                        href="#!"
                                    >
                                        <span className="text-dark" style={{ 'width': '150px' }}>{category}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {subCategories.length > 0 && (
                        <div className="subcategories-dropdown-container mt-2 col-md-2 col-4 ps-0 shadow-sm ">
                            <select
                                className="form-select"
                                value={activeSubTab}
                                onChange={handleSubTabClick}
                            >
                                <option value="">All Category</option>
                                {subCategories.map((subCategory, index) => (
                                    <option key={index} value={subCategory}>{subCategory}</option>
                                ))}
                            </select>
                        </div>
                    )}
                    <div className="row mt-3 eventborder pb-4">
                        {visibleData.map((item, index) => (
                            <div key={index} className="col-12  wow bounceInUp" >
                                <img className=" imgSize myimages" src={item.img} />

                            </div>
                        ))}
                        {itemsToShow < filteredData.length && (
                            <div className="text-center mt-2">
                                <button className="btn " onClick={handleLoadMore}>Load More</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <CtaSection />
        </>
    );
};

export default MenuPage;
