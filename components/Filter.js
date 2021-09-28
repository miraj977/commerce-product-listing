import React, { useRef } from 'react';

const Filter = ( { productTypes, filterProducts, filter } ) =>
{

    const selectRef = useRef( null );

    // RETURNS UNIQUE VALUES FROM TYPE PROPERTY
    const handleChangeFilter = ( e ) =>
    {
        filterProducts( e.target?.value ?? 'all' );
    };

    return (
        <div className={`flex items-center gap-5 p-3 my-5 border-2 border-gray-700 rounded-md 
        ${ filter.state ? "justify-between" : "justify-end" }`}>
            {filter.state &&
                <>
                    <p className="hidden md:block">Showing <b>{filter.number}</b>  {filter.number > 1
                        ? "results" : "result"} for "{filter.type}"
                        <span className="pb-0.5 mx-2 text-sm border-b border-gray-900 cursor-pointer hover:border-red-600 hover:text-red-600"
                            onClick={() =>
                            {
                                handleChangeFilter( 'all' );
                                //SETS DROPDOWN VALUES TO DEFAULT 0 INDEX
                                selectRef.current.options.selectedIndex = 0;
                            }}>
                            clear x
                        </span>
                    </p>
                    <p className="block md:hidden"> {filter.type} ({filter.number})
                        <span className="pb-0.5 mx-2 text-sm border-b border-gray-900 cursor-pointer hover:border-red-600 hover:text-red-600"
                            onClick={() =>
                            {
                                handleChangeFilter( 'all' );
                                //SETS DROPDOWN VALUES TO DEFAULT 0 INDEX
                                selectRef.current.options.selectedIndex = 0;
                            }}>
                            clear x
                        </span>
                    </p>
                </>
            }
            <div className="flex items-center gap-2">
                <p className="text-base whitespace-nowrap">Filter by</p>
                <select
                    ref={selectRef}
                    name="filter"
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
