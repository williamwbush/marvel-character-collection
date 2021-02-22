import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { server_calls } from '../../api';
import { Container } from 'react-bootstrap';
import '../../styles.css';

type Inputs = {
    current_alias: string,
    real_name: string,
    power: string,
    origin: string,
    universe: string,
    comics_appeared_in: number
}

export const UpdateCharacter = () => {

    const location:any = useLocation();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data:any) => {
        console.log(data, location)
        server_calls.update(location.state.character_id, data)
    }
    return (
        <Container>
            <h1 id="update">Update Your Character</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" name="current_alias" id="current_alias" placeholder="Add Current Alias" ref={ register }/>

            <input type="text" name="real_name" id="real_name" placeholder="Add Real Name" ref={ register }/>

            <input type="text" name="power" id="power" placeholder="Add Powers" ref={ register }/>

            <input type="text" name="origin" id="origin" placeholder="Add Origin" ref={ register }/>

            <input type="text" name="universe" id="universe" placeholder="Add Universe" ref={ register }/>

            <input type="text" name="comics_appeared_in" id="comics_appeared_in" placeholder="Add Number of Comics Appeared In" ref={ register }/>

            <div id="update-char-div">
                <button type="submit" className="button-styles" id="update-character">Update Character</button>
            </div>
            </form>
        </Container>
    )
}