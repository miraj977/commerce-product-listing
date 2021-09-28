import React from 'react';

const Image = ( { size = "512x512", url, index = 0, alt = "Product Image", addClass } ) =>
{
    const addDefaultSrc = ( e ) =>
    {
        e.target.src = `https://source.unsplash.com/collection/${ index }/${ size }`;
    };
    return (
        <img onError={( e ) => addDefaultSrc( e )} className={`${ addClass }`} src={url} alt={alt} />
    );
};

export default Image;
