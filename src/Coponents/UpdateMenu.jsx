import React, { useState, useEffect } from 'react';
import menuData from './Home/Main.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const UpdateMenu = () => {
  const [activeMainCategory, setActiveMainCategory] = useState('');
  const [activeCategory, setActiveCategory] = useState('');

  // Initialize default main category and category
  useEffect(() => {
    if (menuData.menu.length > 0) {
      const defaultMainCategory = menuData.menu[0].MainCategory;
      setActiveMainCategory(defaultMainCategory);
      const defaultCategory = menuData.menu.find(menu => menu.MainCategory === defaultMainCategory)?.category || '';
      setActiveCategory(defaultCategory);
    }
  }, []);

  // Handle click for MainCategory tabs
  const handleMainCategoryClick = (mainCategory) => {
    setActiveMainCategory(mainCategory);
    const defaultCategory = menuData.menu.find(menu => menu.MainCategory === mainCategory)?.category || '';
    setActiveCategory(defaultCategory); // Set default category when switching main categories
  };

  // Filter categories and items based on selected main category or show all by default
  const filteredMenus = activeMainCategory
    ? menuData.menu.filter(menu => menu.MainCategory === activeMainCategory)
    : menuData.menu; // Show all if no main category is selected

  return (
    <>
      <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light eventborder rounded-pill px-4 py-1 mb-3">Our Menu</small>
        <h1 className="display-5 mb-5">Most Popular Food in the World</h1>
      </div>
      {/* Main Category Tabs */}
      <div className="tab-className text-center">
        <ul className="nav nav-pills d-inline-flex justify-content-center mb-4 flex-wrap wow bounceInUp text-center" data-wow-delay="0.1s">
          {[...new Set(menuData.menu.map(item => item.MainCategory))].map((mainCategory, index) => (
            <li key={index} className="nav-item p-2 col-6 col-md-auto">
              <a
                className={`d-flex text-decoration-none py-2 mx-2 eventborder bg-white rounded-pill ${activeMainCategory === mainCategory ? 'active' : ''}`}
                onClick={() => handleMainCategoryClick(mainCategory)}
                href="#!"
              >
                <span className="text-dark" style={{ width: '150px' }}>{mainCategory}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Category Dropdown based on Active MainCategory */}
      <div className='bg-card p-6 rounded-lg container text-left transition-transform transform'>
        {activeMainCategory && (
          <div className='mb-4'>
            <select
              className='form-select'
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              {filteredMenus.map((menu, index) => (
                <option key={index} value={menu.category}>
                  {menu.category}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Display Items based on Active Category or Show All Items */}
        <div className='grid grid-cols-1 gap-7 font-semibold'>
          {filteredMenus
            .filter(menu => !activeCategory || menu.category === activeCategory)
            .map((menu, index) => (
              <MenuItem key={index} title={menu.category} items={menu.items} />
            ))}
        </div>
      </div>
    </>
  );
};

// Reusable MenuItem component
const MenuItem = ({ title, items }) => {
  const [selectedItems, setSelectedItems] = useState(Array(items.length).fill(false));

  const handleSelection = (index, item) => {
    const updatedSelection = [...selectedItems];
    updatedSelection[index] = !updatedSelection[index];
    setSelectedItems(updatedSelection);

    if (updatedSelection[index]) {
      console.log(`Selected: ${item}`);
    } else {
      console.log(`Deselected: ${item}`);
    }
  };

  return (
    <div className='bg-accent p-4 rounded-lg shadow-md transition-transform transform'>
      <h4 className='text-xl font-bolder mb-2 text-accent-foreground text-center border'>{title}</h4>
      <ul className='pl-5 my-4 d-flex flex-wrap'>
        {items?.map((item, index) => (
          <li
            key={index}
            className='flex items-center space-x-2 col-md-6 col-12 cursor-pointer hover:text-primary transition-colors my-2 hover:font-bold'
            onClick={() => handleSelection(index, item)}
          >
            <div
              className={`h-6 w-6 border-2 rounded-sm flex items-center justify-center ${selectedItems[index] ? 'border-green-500 bg-green-500' : 'border-gray-400'}`}
            >
              {selectedItems[index] && (
                <FontAwesomeIcon icon={faCheck} className='text-white' />
              )}
            </div>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpdateMenu;
