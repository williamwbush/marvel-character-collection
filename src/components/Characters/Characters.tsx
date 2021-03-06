import React, { useState } from 'react';
import { useGetData } from '../../custom-hooks';
import { Jumbotron, Button, Container, Card, Col, Row} from 'react-bootstrap';
import avengers from '../../assets/img/avengers.png'

import { useHistory } from 'react-router-dom';
import { server_calls } from '../../api';


export const Characters = () => {
    
    const history:any = useHistory();

    const routeChange = (id?:string, path?:string) => {
        history.push({
            pathname: path,
            state: { character_id: id}
        })
    }

    let { characterData, getData } = useGetData();
    console.log(characterData)

    const handleDeleteCharacter = (id:any) => {
        server_calls.delete(id);
        getData()
    }
    
    return (
        <Container>
            <Row>
                <Col>
                        <h1>Your Marvel Character Collection</h1>
                        <div id="here">
                            <Button onClick = { () => routeChange('','create')} id="create-character">Create New Character</Button>
                        </div>
                </Col>
            </Row>
                        
                      
            <Row>
                <Col>
                    <div id="card-div">
                        {characterData.map( (item:any) => (
                            <div key="item.id"> 
                                <Card style={{ width: '18rem'}}>
                                    <Card.Img variant="top" src={avengers} />
                                    <Card.Body>
                                        <Card.Title id="alias">
                                            { item.current_alias }
                                        </Card.Title>
                                        <Card.Text>
                                            real name: { item.real_name}
                                        </Card.Text>
                                        <Card.Text>
                                            power: {item.power}
                                        </Card.Text>
                                        <Card.Text>
                                            origin: {item.origin}
                                        </Card.Text>
                                        <Card.Text>
                                            universe: {item.universe}
                                        </Card.Text>
                                        <Card.Text>
                                            comics appeared in: {item.comics_appeared_in}
                                        </Card.Text>
                                           
                                        <Button variant="danger" onClick = { () => handleDeleteCharacter(item.id)} id="delete-button">Delete</Button>
                                        <Button variant="primary" onClick = { () => routeChange(item.id, 'update')} id="update-button">Update</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>

        </Container>
    )
}