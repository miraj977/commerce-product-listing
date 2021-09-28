import React, { useState, useEffect } from 'react';
import ProductCard from '@components/ProductCard';
import Container from '@components/Layout/Container';
import Filter from '@components/Filter';
import Seo from '@components/Seo';
import Loading from '@components/Loading';
import fetchProducts from '@lib/Products';

export default function Home ()
{
  const [ isLoading, setIsLoading ] = useState( true );
  const [ types, setTypes ] = useState( [] );
  const [ products, setProducts ] = useState( [] );
  const [ filteredProducts, setFilteredProducts ] = useState( [] );
  const [ filter, setFilter ] = useState( {
    state: false,
    number: 0,
    type: ''
  } );

  // FILTER PRODUCTS FUNCTION
  const filterProducts = ( type ) =>
  {
    if ( type.toLowerCase() == 'all' )
    {
      setFilter( {
        state: false
      } );
      return setFilteredProducts( products );
    }
    else
    {
      setFilteredProducts( () =>
      {
        return products.filter( ( product ) => product.type.toLowerCase() == type.toLowerCase() );
      } );
      setFilter( ( filteredProducts ) =>
      {
        return {
          state: true,
          number: filteredProducts.length,
          type: type
        };
      } );
    }
  };

  // GET PRODUCTS AND STORE IT
  const getProducts = async () =>
  {
    const data = await fetchProducts();
    setProducts( data );
    setFilteredProducts( data );
    setTypes( [ ...new Set( data.map( product => product.type ) ) ] );
    setIsLoading( false );
  };

  //RUN ONCE ON PAGE LOAD
  useEffect( () =>
  {
    getProducts();
  }, [] );


  //FUNCTION TO GET TOTAL COUNT OF FILTERED PRODUCTS
  const handleLength = ( length ) =>
  {
    setFilter( { ...filter, number: length } );
  };

  // RUN EVERYTIME FILTERED PRODUCT UPDATES AND GET ITS COUNT
  useEffect( () =>
  {
    handleLength( filteredProducts.length );
  }, [ filteredProducts ] );


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
      <Filter productTypes={types} filterProducts={filterProducts} filter={filter} />
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products && filteredProducts.map( ( product, i ) =>
        {
          return <ProductCard key={i} {...product} onClick={() => setIsLoading( true )} />;
        } )}
      </div>
    </Container>
  </>;
}
