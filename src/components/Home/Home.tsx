import React from 'react';

interface Props{
    title: string;
}

export const Home = (props:Props) => {
    return (
        <div>
            <h1>Welcome to Marvel Character API!</h1>
            <h4> { props.title }</h4>
        </div>
    )
}