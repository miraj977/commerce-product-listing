import React from 'react';

const ProductCard = ( { index, isSale, price, productImage, productName, type } ) =>
{
    const addDefaultSrc = ( e ) =>
    {
        e.target.src = `https://source.unsplash.com/collection/${ index }/512x512`;
    };
    return (
        <div className="relative w-full border border-gray-900 ">
            {isSale &&
                <div className="absolute top-0 left-0 px-3 py-1 text-sm font-semibold text-white capitalize bg-red-500">
                    SALE
                </div>}
            <img onError={( e ) => addDefaultSrc( e )} className="p-5 responsive xl:p-12" src={productImage} alt={productName} />
            <div className="flex items-center justify-between gap-4 px-5 pb-5 text-base text-gray-900">
                <div className="">{productName}</div>
                <div className="">{price}</div>
            </div>
        </div>
    );
};

export default ProductCard;
