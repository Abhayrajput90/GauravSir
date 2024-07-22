import React, { useState, useEffect } from 'react';
import menuData from './Main.json';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuPage = () => {
    const [data, setData] = useState([]);
    const [activeTab, setActiveTab] = useState('Slection');
    const [activeSubTab, setActiveSubTab] = useState('');
    const [itemsToShow, setItemsToShow] = useState(20); // Initially show 20 items

    useEffect(() => {
        // Load data from the JSON file
        setData(menuData.menu);
    }, []);

    const handleTabClick = (category) => {
        setActiveTab(category);
        setActiveSubTab('');
        setItemsToShow(20); // Reset items to show when tab changes
    };

    const handleSubTabClick = (event) => {
        setActiveSubTab(event.target.value);
        setItemsToShow(20); // Reset items to show when sub-tab changes
    };

    const handleLoadMore = () => {
        setItemsToShow(prev => prev + 15); // Increase the number of items to show by 20
    };

    const filteredData = data.filter(item => item.category === activeTab && (!activeSubTab || item.subCategory === activeSubTab));

    const visibleData = filteredData.slice(0, itemsToShow); // Get only the items to show

    const subCategories = [...new Set(data.filter(item => item.category === activeTab).map(item => item.subCategory))];

    return (
        <>
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
                    <div className="row g-5 mt-3 eventborder pb-4">
                        {visibleData.map((item, index) => (
                            <div key={index} className="col-lg-3 col-md-6 wow bounceInUp">
                                <div className="menu-item d-flex align-items-center">
                                    <img className="flex-shrink-0 imgSize rounded-circle" src="/public/img/check-mark.png" alt={item.name} />
                                    <div className="w-100 d-flex flex-column text-start ps-4">
                                        <div className="d-flex borderBottom">
                                            <h5>{item.name}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    {itemsToShow < filteredData.length && (
                        <div className="text-center mt-4">
                            <button className="btn btn-primary" onClick={handleLoadMore}>Load More</button>
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MenuPage;
