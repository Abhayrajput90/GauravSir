import React, { useState, useEffect } from 'react';
import menuData from './Home/Main.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const UpdateMenu = () => {
  const [activeMainCategory, setActiveMainCategory] = useState('');
  const [activeCategory, setActiveCategory] = useState('');
  const [visibleItemsCount, setVisibleItemsCount] = useState(2);
  const [selectedItems, setSelectedItems] = useState([]); 

  useEffect(() => {
    if (menuData.menu.length > 0) {
      const defaultMainCategory = menuData.menu[0].MainCategory;
      setActiveMainCategory(defaultMainCategory);
      setActiveCategory('');
    }
  }, []);

  const handleMainCategoryClick = (mainCategory) => {
    setActiveMainCategory(mainCategory);
    setActiveCategory('');
    setVisibleItemsCount(6);
  };

  const handleLoadMore = () => {
    setVisibleItemsCount(prevCount => prevCount + 6);
  };

  const handleSelection = (item) => {
    setSelectedItems(prevItems => {
      if (prevItems.includes(item)) {
        return prevItems.filter(i => i !== item); 
      } else {
        return [...prevItems, item]; 
      }
    });
  };

  const handleSubmit = () => {
    if (selectedItems.length === 0) {
      alert("Please select at least one or more item.");
      return;
    }

    const message = `Here are my selected items for order:\n\n${selectedItems.join(',\n')}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/9926777991?text=${encodedMessage}`, '_blank');
  };

  const filteredMenus = activeMainCategory
    ? menuData.menu.filter(menu => menu.MainCategory === activeMainCategory)
    : menuData.menu;

  const visibleMenus = filteredMenus
    .filter(menu => !activeCategory || menu.category === activeCategory)
    .slice(0, visibleItemsCount);

  return (
    <>
      <div className="container-fluid menu bg-light py-6 my-20" >
        <div className="container">
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

          <div className=' p-6 rounded-lg container text-left transition-transform transform '>
            {activeMainCategory && (
              <div className='mb-4 shadow-sm rounded-full wow bounceInUp'  data-wow-delay="0.1s">
                <select
                  className='form-select'
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                >
                  <option value="">All Categories</option>
                  {filteredMenus.map((menu, index) => (
                    <option key={index} value={menu.category}>
                      {menu.category}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className='grid grid-cols-1 gap-7 font-semibold'>
              {visibleMenus.map((menu, index) => (
                <MenuItem
                  key={index}
                  title={menu.category}
                  items={menu.items}
                  selectedItems={selectedItems}
                  handleSelection={handleSelection}
                />
              ))}
            </div>

            {visibleMenus.length < filteredMenus.length && (
              <div className="text-center mt-4 wow bounceInUp"  data-wow-delay="0.1s">
                <button
                  className="btn col-4 me-3 btnbolder"
                  onClick={handleLoadMore}
                >
                 Load More <span></span>
                 <i class="fa fa-spinner" aria-hidden="true"></i>

                </button>
                <button
                className="btn col-7 btnbolder"
                onClick={handleSubmit}
              >
               <i class="fa fa-truck" aria-hidden="true"></i>  Submit Items For Order  <i class="fa fa-truck" aria-hidden="true"></i>
              </button>
              </div>
            )}

            
          </div>
        </div>
      </div>
    </>
  );
};

const MenuItem = ({ title, items, selectedItems, handleSelection }) => {
  return (
    <div className='bg-accent p-4 rounded-lg shadow-md transition-transform transform wow bounceInUp'  data-wow-delay="0.1s">
      <h4 className='text-xl font-bolder mb-2 py-2 text-accent-foreground text-center border'>{title}</h4>
      <ul className='pl-5 my-4 d-flex flex-wrap'>
        {items?.map((item, index) => (
          <li
            key={index}
            className='flex items-center space-x-2 col-md-6 col-12 cursor-pointer hover:text-primary transition-colors my-2 hover:font-bold'
            onClick={() => handleSelection(item)}
          >
            <div
              className={`h-6 w-6 border-2 rounded-sm flex items-center justify-center ${selectedItems.includes(item) ? 'border-[#D4A762] bg-[#D4A762]' : 'border-gray-400'}`}
            >
              {selectedItems.includes(item) && (
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
