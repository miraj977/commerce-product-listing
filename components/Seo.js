import React from 'react';
import Head from 'next/head';

const Seo = ( { title, description } ) =>
{
    const defaultTitle = "Lorem Ipsum";
    const defaultDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

    return (
        <Head>
            <title>{title || defaultTitle}</title>
            <meta name="description" content={description || defaultDescription} />
        </Head>
    );
};

export default Seo;
