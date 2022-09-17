import doAxios from '@lib/doAxios';

const fetchProducts = async () =>
{
    const request = await doAxios( `${ process.env.NEXT_PUBLIC_BASE_URL }/api/products` );
    const data = await request.data;
    return data;
};

export default fetchProducts;