import React from 'react';

const Image = ( { size = "270x270", url, index = 0, alt = "Product Image", addClass, random } ) =>
{
    const randomUrl = `https://source.unsplash.com/collection/${ index }/${ size }`;
    const addDefaultSrc = ( e ) =>
    {
        e.target.src = randomUrl;
    };
    return (
        <img onError={ ( e ) => addDefaultSrc( e ) } className={ `${ addClass }` } src={ random ? randomUrl : url } alt={ alt } style={ { maxHeight: 600 } } />
    );
};

export default Image;
