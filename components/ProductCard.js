import React from 'react';

const ProductCard = ( { index, isSale, price, productImage, productName, type } ) =>
{
    const addDefaultSrc = ( e ) =>
    {
        e.target.src = `https://source.unsplash.com/collection/${ index }/512x512`;
    };
    return (
        <div className="w-full">
            <img onError={( e ) => addDefaultSrc( e )} className="responsive" src={productImage} alt={productName} />
            <div className="flex items-center justify-between gap-4">
                <div className="text-base text-gray-900">{productName}</div>
                <div className="text-base text-gray-900">{price}</div>
            </div>
        </div>
    );
};

export default ProductCard;
