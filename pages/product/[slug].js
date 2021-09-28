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
        <Container>
            {productName}
            <Image url={productImage} size="1600x800" alt={productName} addClass="w-full my-4" />
        </Container>
    );
};

export default Index;

export async function getStaticPaths ()
{
    const request = await doAxios( `${ baseUrl }/api/products` );
    const products = await request.data;

    const paths = products.map( ( product ) => ( {
        params: { slug: product.index.toString() }
    } ) );

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps ( { params } )
{
    console.log( params );
    const { slug } = params;

    const request = await doAxios( `${ baseUrl }/api/product/${ slug }` );
    const product = await request.data;

    return {
        props: { product }
    };
}
