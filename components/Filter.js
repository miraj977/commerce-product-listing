import React from 'react';

const Filter = ( { productTypes, filterProducts } ) =>
{
    // RETURNS UNIQUE VALUES FROM TYPE PROPERTY
    const handleChangeFilter = ( e ) =>
    {
        filterProducts( e.target.value );
    };

    return (
        <div className="flex items-center justify-end gap-5 p-3 my-5 border-2 border-gray-700 rounded-md">

            <p className="text-base">Filter by</p>
            <select name="filter"
                onChange={( e ) => handleChangeFilter( e )}
                className="w-full p-2 text-base border-2 border-gray-700 rounded-md cursor-pointer focus:outline-none"
                style={{ maxWidth: 150 }}>
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
