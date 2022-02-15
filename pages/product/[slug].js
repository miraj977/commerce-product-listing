import React from 'react';
import doAxios from '@lib/doAxios';
import Loading from '@components/Loading';
import Container from '@components/Layout/Container';
import Image from '@components/Image';
import Router from 'next/router';
import Seo from '@components/Seo';

const Index = ( { product } ) =>
{
    const { productName, price, isSale, index, productImage, type } = product[ 0 ];

    if ( !product ) return <Loading />;

    return (
        <Container addClass="py-8">
            <Seo title={ productName } />
            <p className="text-sm cursor-pointer" onClick={ () => Router.back() }>
                ⟵ <span className="hover:font-semibold">Go back</span>
            </p>

            { productName &&
                <h1 className="py-3 text-2xl font-bold">{ productName } <span className="px-2 py-0.5 mx-1 text-base bg-yellow-400 rounded-md">{ type ?? '' }</span></h1> }


            <Image url={ productImage } random size="800x600" alt={ productName } addClass="w-full my-4 aspect-video" />

            { price &&
                <span className="text-base font-bold">{ price } </span> }
            { isSale &&
                <span className="px-3 py-1 text-base font-bold text-white bg-red-500">SALE</span> }

            <p className="my-2 text-base sm:my-5">
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
    const request = await doAxios( `${ process.env.NEXT_PUBLIC_BASE_URL }/api/product/${ slug }` );
    const product = await request.data;

    return {
        props: { product }
    };
}
