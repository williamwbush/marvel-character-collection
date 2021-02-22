import React from 'react';

import { useForm } from 'react-hook-form';
import {server_calls } from '../../api';
import { Jumbotron, Container, Col, Row } from 'react-bootstrap';

type Inputs = {
    current_alias: string,
    real_name: string,
    power: string,
    origin: string,
    universe: string,
    comics_appeared_in: number
}

export const CreateCharacter = () => {

const { register, handleSubmit } = useForm<Inputs>();

const onSubmit = (data:any) => {
    console.log(data)
    server_calls.create(data)
}

    return (
        <Container>
            <h1>Create A New Marvel Character</h1>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <label htmlFor="name">Current Alias</label>
                <input type="text" name="current_alias" id="current_alias" placeholder="Add Current Alias" ref={ register }/>

                <label htmlFor="model">Real Name</label>
                <input type="text" name="real_name" id="real_name" placeholder="Add Real Name" ref={ register }/>
                
                <label htmlFor="price">Powers</label>
                <input type="text" name="power" id="power" placeholder="Add Powers" ref={ register }/>
                
                <label htmlFor="price">Origin</label>
                <input type="text" name="origin" id="origin" placeholder="Add Origin" ref={ register }/>
                
                <label htmlFor="price">Universe</label>
                <input type="text" name="universe" id="universe" placeholder="Add Universe" ref={ register }/>
                
                <label htmlFor="price">Number of Comics Appeared In</label>
                <input type="text" name="comics_appeared_in" id="comics_appeared_in" placeholder="Add Number of Comics Appeared In" ref={ register }/>

                <button type="submit" className="button-styles">Submit Character</button>
            </form>
        </Container>
    )
}