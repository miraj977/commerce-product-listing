import Container from '@components/Layout/Container';
import React from 'react';
import Link from 'next/link';

const Nav = () =>
{
    return (
        <div>
            <Container addClass="flex justify-center items-center">
                <Link href="/">
                    <a>Home</a>
                </Link>
            </Container>
        </div>
    );
};

export default Nav;
