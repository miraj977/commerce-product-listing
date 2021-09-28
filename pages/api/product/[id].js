import data from '@data/data';

export default function handler ( req, res )
{
    const { id } = req.query;
    res.status( 200 ).json( data.filter( product => product.index == id ) );
}