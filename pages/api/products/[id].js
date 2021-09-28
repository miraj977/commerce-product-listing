import data from '@data/data';

export default function handler ( req, res )
{
    const { id } = req.query;
    console.log( req );

    res.status( 200 ).json( data.filter( product => product.index == id ) );
}