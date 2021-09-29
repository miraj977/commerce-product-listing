import fetchProducts from '@lib/Products';

describe( "Check if we get all products", () =>
{
    test( "Check if products true", async () =>
    {
        const products = await fetchProducts();
        expect( products.length > 0 ).toBeTruthy();
    } );
} );