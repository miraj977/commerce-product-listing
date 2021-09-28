import React from 'react';
import Link from 'next/link';
import Image from './Image';

const ProductCard = ( { index, isSale, price, productImage, productName, type } ) =>
{
    return (

        <div className="relative w-full border-2 border-gray-900 cursor-pointer hover:bg-yellow-400 hover:transition hover:duration-400 hover:ease-in">
            <Link href={`/product/${ index }`}>
                <a>
                    {isSale &&
                        <div className="absolute top-0 left-0 px-3 py-1 text-sm font-semibold tracking-widest text-white capitalize bg-red-500 rounded-br-md">
                            Sale
                        </div>}
                    {/* RESUABLE IMAGE COMPONENT WITH FALLBACK URL */}
                    <Image url={productImage} size="512x512" alt={productName} index={index} addClass="p-5 xl:p-12" />

                    <div className="flex items-center justify-between gap-4 px-5 pb-5 text-base text-gray-900">
                        <span>{productName}</span>
                        <span>{price}</span>
                    </div>
                </a>
            </Link>
        </div>
    );
};

export default ProductCard;
