import React from 'react';
import Link from 'next/link';
import Image from './Image';

const ProductCard = ( { index, isSale, price, productImage, productName, type } ) =>
{
    return (

        <div className="relative w-full overflow-hidden transition border-2 border-gray-900 cursor-pointer hover:bg-yellow-400 hover:duration-150 hover:ease-in" style={{ minHeight: 250 }}>
            <Link href={`/product/${ index }`}>
                <a className="flex flex-col justify-between">
                    {isSale &&
                        <div className="absolute top-0 left-0 z-10 px-3 py-1 text-sm font-semibold tracking-widest text-white capitalize bg-red-500 rounded-br-md">
                            SALE
                        </div>}
                    {/* RESUABLE IMAGE COMPONENT WITH FALLBACK URL */}
                    <Image url={productImage} size="512x512" alt={productName} index={index} addClass="productImage hover:md:scale-110 hover:xl:scale-125 transition hover:ease-in duration-800 p-5 xl:p-12" />

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
