import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ( { type = "bubbles", color = "#ee9400" } ) => (
    <div className="absolute inset-0 top-0 z-50 grid justify-center w-full h-full min-h-screen bg-white overflow-clip"
        style={{ paddingTop: '45vh' }}>
        <ReactLoading type={type} color={color} height={6} width={100} />
    </div>
);

export default Loading;
