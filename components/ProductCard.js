import React from 'react';

const ProductCard = ( { index, isSale, price, productImage, productName, type } ) =>
{
    return (
        <div className="w-full">
            {productName}
        </div>
    );
};

export default ProductCard;
