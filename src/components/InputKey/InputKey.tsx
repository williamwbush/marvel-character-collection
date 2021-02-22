import React from 'react';

import { useForm } from 'react-hook-form';
import { Jumbotron, Container, Col, Row } from 'react-bootstrap';

type Inputs = {
    api_access_key: string
}


export const InputKey = () => {

    const { register, handleSubmit } = useForm<Inputs>();
    
    const onSubmit = (data:any) => {
        console.log(data)
        APIAccessKey = data
        console.log(APIAccessKey)
    }
    
        return (
            <Container>
                <h2>Click <a href="https://marvel-character-api-wb.herokuapp.com/signin">here</a> to get your API access key</h2>
                <h1>Input Your API Access Key</h1>
                <form onSubmit = {handleSubmit(onSubmit)}>
                    <label htmlFor="api_access_key">API Access Key</label>
                    <input type="text" name="api_access_key" id="api_access_key" placeholder="Add API Access Key" ref={ register }/>
    
                    <button type="submit" className="button-styles">Submit Character</button>
                </form>
            </Container>
        )
    }

export let APIAccessKey: any
