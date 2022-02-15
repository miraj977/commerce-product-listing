import React from 'react';

export default function Button ( { text, color, bg, size } )
{
    return (
        <div className="list-item">
            <button className={ `${ color } ${ size } ${ bg }` }>{ text }</button>
        </div>
    );
}