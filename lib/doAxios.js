import React from 'react';
import axios from 'axios';

export default async function doAxios ( url, options = {} )
{
    // THIS IS A RESUABLE FUNCTION WHICH TAKES OPTIONS AS OPTIONAL VALUE AND DETERMINE IF ITS A GET OR POST REQEUST
    const response = await axios( url, {
        ...options
    } );
    return response;
}