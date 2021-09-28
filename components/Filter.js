import React from 'react';

const Filter = ( { productTypes, filterProducts, filter } ) =>
{
    // RETURNS UNIQUE VALUES FROM TYPE PROPERTY
    const handleChangeFilter = ( e ) =>
    {
        filterProducts( e.target.value );
    };

    return (
        <div className={`flex items-center gap-5 p-3 my-5 border-2 border-gray-700 rounded-md 
        ${ filter.state ? "justify-between" : "justify-end" }`}>
            {filter.state &&
                <>
                    <p className="hidden md:block">Showing {filter.number} results for {filter.type}</p>
                    <p className="block md:hidden"> {filter.type} ({filter.number})</p>
                </>
            }
            <div className="flex items-center gap-2">
                <p className="text-base whitespace-nowrap">Filter by</p>
                <select name="filter"
                    onChange={( e ) => handleChangeFilter( e )}
                    className="w-full p-2 text-base border-2 border-gray-700 rounded-md cursor-pointer focus:outline-none hover:bg-yellow-400"
                    style={{ maxWidth: 150 }}>
                    <option value="all">All</option>
                    {productTypes.map( ( type, i ) =>
                    {
                        return <option value={type} key={i}>{type}</option>;
                    }
                    )}
                </select>
            </div>
        </div>
    );
};

export default Filter;
