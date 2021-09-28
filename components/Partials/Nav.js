import Container from '@components/Layout/Container';
import React from 'react';
import Link from 'next/link';

const Nav = () =>
{
    return (
        <div>
            <Container addClass="flex justify-center items-center pt-4 font-bold uppercase">
                <Link href="/">
                    <a className="hover:transition hover:duration-150 hover:text-yellow-500">Home</a>
                </Link>
            </Container>
        </div>
    );
};

export default Nav;
