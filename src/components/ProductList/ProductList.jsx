import React from 'react';

const ProductList = ({ currentItems }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {currentItems.map((item) => (
        <div key={item.id}>
          <img
            className="block mx-auto border-2 border-blue-500 p-4 rounded object-cover"
            src={item.thumbnail}
            alt={item.title}
          />
          <p className="text-center">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
