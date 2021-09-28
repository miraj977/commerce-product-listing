import React from 'react';
import doAxios from '@lib/doAxios';
import Loading from '@components/Loading';
import Container from '@components/Layout/Container';
import Image from '@components/Image';
import Router from 'next/router';

const Index = ( { product } ) =>
{
    const { productName, price, isSale, index, productImage, type } = product[ 0 ];

    if ( !product ) return <Loading />;

    return (
        <Container addClass="py-8">
            <p className="text-sm underline cursor-pointer" onClick={() => Router.back()}>
                Go back
            </p>

            {productName &&
                <h1 className="pt-3 pb-5 text-2xl font-bold">{productName}</h1>}


            <Image url={productImage} random size="1600x800" alt={productName} addClass="w-full my-4" />

            {price &&
                <p className="text-base font-bold">{price}</p>}

            <p className="my-5 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, a aperiam. Odio ratione beatae recusandae quidem iste tempore, libero, maiores sint quis animi minima sunt dolorum? Nesciunt veritatis hic, dolor voluptatem sint voluptatibus rerum iure tempore, quos suscipit magni odit molestiae vel impedit ad fugit non consequatur? Tempore placeat repellat vitae blanditiis porro rem aliquam magni sit impedit minima tenetur ratione, earum, doloremque sed, in fugit inventore. Nesciunt, illum, aliquid sapiente dolorum ullam est, quos facere consequatur laboriosam ipsa praesentium.
            </p>
        </Container>
    );
};

export default Index;


// Getting the slug specific data and passing as props
export async function getServerSideProps ( context )
{
    const { slug } = context.query;
    const request = await doAxios( `${ process.env.baseUrl }/api/product/${ slug }` );
    const product = await request.data;

    return {
        props: { product }
    };
}
