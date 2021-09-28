import React from 'react';
import ReactLoading from 'react-loading';
import Container from './Layout/Container';

const Loading = ( { type = "bubbles", color = "#00B2EE" } ) => (
    <Container addClass="grid place-items-center h-screen -mt-28">
        <ReactLoading type={type} color={color} height={6} width={80} />
    </Container>
);

export default Loading;
