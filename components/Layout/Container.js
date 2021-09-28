import React from 'react';

const Container = ( { children, addClass } ) =>
{
    return (
        <div className={`container mx-auto ${ addClass }`}>
            {children}
        </div>
    );
};

export default Container;
