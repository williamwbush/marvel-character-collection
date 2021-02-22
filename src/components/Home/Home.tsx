import React from 'react';

interface Props{
    title: string;
    title2: string;
}

export const Home = (props:Props) => {
    return (
        <div>
            <h1 id="main-title">Marvel Character API</h1>
            <div id="main-titles">
                <h4> { props.title }</h4>
                <h4 id="title-2"> { props.title2 }</h4>
            </div>
            
        </div>
    )
}