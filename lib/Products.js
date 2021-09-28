import doAxios from '@lib/doAxios';

const fetchProducts = async () =>
{
    const request = await doAxios( `/api/products` );
    const data = await request.data;
    return data;
};

export default fetchProducts;