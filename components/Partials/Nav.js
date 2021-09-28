import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Container from '@components/Layout/Container';
import fetchProducts from '@lib/Products';

const Nav = () =>
{
    const [ products, setProducts ] = useState( [] );
    const [ filteredProducts, setFilteredProducts ] = useState( [] );
    const [ keyword, setKeyword ] = useState( '' );
    const inputRef = useRef( null );
    let searchBarWidth;
    searchBarWidth = inputRef.current != null ? inputRef.current.offsetWidth : 240;

    const handleSearch = ( e ) =>
    {
        setKeyword( e.target.value );
        const filterProducts = products.filter( product =>
            product.productName.toLocaleLowerCase()
                .includes( keyword.toLocaleLowerCase() ) );
        setFilteredProducts( filterProducts );
    };

    const getProducts = async () =>
    {
        const data = await fetchProducts();
        setProducts( data );
        setFilteredProducts( data );
    };

    //RUN ONCE ON PAGE LOAD
    useEffect( () =>
    {
        getProducts();
    }, [] );

    return (
        <div>
            <Container addClass="flex justify-start sm:justify-center items-center pt-4 font-bold uppercase relative">
                <Link href="/">
                    <a className="transition hover:duration-150 hover:text-yellow-500">Home</a>
                </Link>

                {/* SEARCH BAR */}
                <input
                    type="text"
                    className="absolute right-0 px-4 py-1 mr-4 border-2 border-gray-700 rounded-lg 2xl:mr-24 sm:mr-8 lg:mr-16 xl:mr-20 focus:outline-none"
                    placeholder="Search"
                    value={keyword}
                    onChange={( e ) => { handleSearch( e ); }}
                    ref={inputRef} />
                {keyword &&
                    <div
                        className="absolute right-0 z-50 flex flex-col mr-4 text-sm bg-white shadow-xl 2xl:mr-24 sm:mr-8 lg:mr-16 xl:mr-20 top-12"
                        style={{ width: searchBarWidth }}
                        onClick={() =>
                        {
                            setFilteredProducts( [] );
                            setKeyword( '' );
                        }}>
                        {filteredProducts.map( ( product, i ) => (
                            <Link href={`/product/${ product.index }`} key={i}>
                                <a className={`px-3 hover:bg-yellow-400 block py-2 
                                ${ i != filteredProducts.length - 1 ? 'border-b border-gray-300' : '' }`}>{product.productName}</a>
                            </Link> ) )}
                    </div>
                }

            </Container>
        </div>
    );
};

export default Nav;
