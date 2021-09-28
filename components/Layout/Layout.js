import React from 'react';
import Nav from '@components/Partials/Nav';
import Footer from '@components/Partials/Footer';

const Layout = ( { children } ) =>
{
    return (
        <>
            <Nav />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
