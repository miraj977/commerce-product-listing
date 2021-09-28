import React, { useState, useEffect } from 'react';
import ProductCard from '@components/ProductCard';
import doAxios from '@lib/doAxios';
import Container from '@components/Layout/Container';
import Filter from '@components/Filter';
import Seo from '@components/Seo';
import Loading from '@components/Loading';

export default function Home ()
{
  const [ isLoading, setIsLoading ] = useState( true );
  const [ types, setTypes ] = useState( [] );
  const [ products, setProducts ] = useState( [] );
  const [ filteredProducts, setFilteredProducts ] = useState( [] );

  // FETCH PRODUCTS FROM CUSTOM API AND STORE IN STATE
  const getProducts = async () =>
  {
    const request = await doAxios( `/api/products` );
    const data = await request.data;
    setProducts( data );
    setFilteredProducts( data );
    setTypes( [ ...new Set( data.map( product => product.type ) ) ] );
    setIsLoading( false );
  };

  // FILTER PRODUCTS FUNCTION
  const filterProducts = ( type ) =>
  {
    if ( type.toLowerCase() == 'all' )
      return setFilteredProducts( products );
    else
      setFilteredProducts( () =>
      {
        return products.filter( ( product ) => product.type.toLowerCase() == type.toLowerCase() );
      } );
  };

  //RUN ONCE ON PAGE LOAD
  useEffect( () =>
  {
    getProducts();
  }, [] );

  // IF PAGE IS LOADING
  if ( isLoading ) return <Loading />;

  // IF NO PRODUCT AVAILABLE
  if ( !products || products.length === 0 )
  {
    return <Container addClass="grid place-items-center h-screen">
      No products to display.
    </Container>;
  }

  // IF PRODUCT IS AVAILABLE
  return <>
    <Seo title="Product Home" description="Our range of products is available here" />
    <Container>

      <Filter productTypes={types} filterProducts={filterProducts} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products && filteredProducts.map( ( product, i ) =>
        {
          return <ProductCard key={i} {...product} />;
        } )}
      </div>
    </Container>
  </>;
}