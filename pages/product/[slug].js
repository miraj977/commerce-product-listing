import React, { useState, useEffect } from 'react';
import doAxios from '@lib/doAxios';
import Loading from '@components/Loading';
import Container from '@components/Layout/Container';
import Image from '@components/Image';
const Index = ( { product } ) =>
{
    const { productName, price, isSale, index, productImage, type } = product[ 0 ];

    if ( !product ) return <Loading />;

    return (
        <Container addClass="py-8">
            {productName && <h1 className="text-2xl font-bold">{productName}</h1>}
            <Image url={productImage} size="1600x800" alt={productName} addClass="w-full my-4" />
            {price && <p className="text-base font-bold">{price}</p>}
            <p className="my-4 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, a aperiam. Odio ratione beatae recusandae quidem iste tempore, libero, maiores sint quis animi minima sunt dolorum? Nesciunt veritatis hic, dolor voluptatem sint voluptatibus rerum iure tempore, quos suscipit magni odit molestiae vel impedit ad fugit non consequatur? Tempore placeat repellat vitae blanditiis porro rem aliquam magni sit impedit minima tenetur ratione, earum, doloremque sed, in fugit inventore. Nesciunt, illum, aliquid sapiente dolorum ullam est, quos facere consequatur laboriosam ipsa praesentium.</p>
        </Container>
    );
};

export default Index;


// Collecting all the possible paths 
export async function getStaticPaths ()
{
    const request = await doAxios( `${ process.env.baseUrl }/api/products` );
    const products = await request.data;

    const paths = products.map( ( product ) => ( {
        params: { slug: product.index.toString() }
    } ) );

    return {
        paths,
        fallback: false
    };
}

// Getting the slug specific data and passing as props
export async function getStaticProps ( { params } )
{
    const { slug } = params;

    const request = await doAxios( `${ process.env.baseUrl }/api/product/${ slug }` );
    const product = await request.data;

    return {
        props: { product }
    };
}
