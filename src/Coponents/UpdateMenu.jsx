import React from 'react';

// Shared Tailwind CSS classes
const cardClass =
  'bg-card p-6 rounded-lg container text-left transition-transform transform ';
const accentCardClass =
  'bg-accent p-4 rounded-lg shadow-md transition-transform transform hover:scale-105';
const textClass = ' ';
const accentTextClass = 'text-accent-foreground';
const hoverTextClass = 'hover:text-primary transition-colors';

const UpdateMenu = () => {
  return (
    <div className={cardClass}>
      <h4 className='text-3xl text-center font-extrabold mb-4 border-b-2 border-primary-foreground pb-2'>
        BREAKFAST MENU
      </h4>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-7 font-semibold ${textClass}`}>
        <MenuItem
          title='Poha Varieties'
          items={['Indori Poha', 'Indori Usal-poha', 'Masala-poha']}
        />
        <MenuItem
          title='Samosa & Kachori'
          items={[
            'Samosa (Any one: Kela, Mutter, Aloo)',
            'Kachori (Any one: Dal, Mutter, Aloo, Corn, Onion, Hara Chana, Cheese)',
          ]}
        />
      </div>
    </div>
  );
};

const MenuItem = ({ title, items }) => {
  return (
    <div className={accentCardClass}>
      <h3 className={`text-xl font-bold mb-2 ${accentTextClass}`}>{title}</h3>
      <ul className='list-disc pl-5'>
        {items.map((item, index) => (
          <li key={index} className={hoverTextClass}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpdateMenu;
