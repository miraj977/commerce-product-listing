import React from 'react';

const Filter = ( { productTypes, filterProducts } ) =>
{
    // RETURNS UNIQUE VALUES FROM TYPE PROPERTY
    const handleChangeFilter = ( e ) =>
    {
        filterProducts( e.target.value );
    };

    return (
        <div className="flex justify-end">
            <select name="filter" onChange={( e ) => handleChangeFilter( e )}>
                <option value="all">All</option>
                {productTypes.map( ( type, i ) =>
                {
                    return <option value={type} key={i}>{type}</option>;
                }
                )}
            </select>
        </div>
    );
};

export default Filter;
