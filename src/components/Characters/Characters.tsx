import React, { useState } from 'react';
import { useGetData } from '../../custom-hooks';
import { Jumbotron, Button, Container, Card, Col, Row} from 'react-bootstrap';
import captain_marvel from '../../assets/img/captain_marvel.png'

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
                    <Jumbotron>
                        <h1>Your Marvel Character Collection!</h1>
                        <p>Here is your current collection of characters!</p>
                        <Button onClick = { () => routeChange('','create')}>Create New Character</Button>
                    </Jumbotron>
                </Col>
            </Row>
                        
                      
            <Row>
                <Col>
                    <div>
                        {characterData.map( (item:any) => (
                            <div key="item.id"> 
                                <Card style={{ width: '18rem'}}>
                                    <Card.Img variant="top" src={captain_marvel} />
                                    <Card.Body>
                                        <Card.Title>
                                            { item.current_alias }
                                        </Card.Title>
                                        <Card.Text>
                                            { item.real_name}
                                        </Card.Text>
                                        <Card.Text>
                                            {item.power}
                                        </Card.Text>
                                        <Card.Text>
                                            {item.origin}
                                        </Card.Text>
                                        <Card.Text>
                                            {item.universe}
                                        </Card.Text>
                                        <Card.Text>
                                            {item.comics_appeared_in}
                                        </Card.Text>
                                           
                                        <Button variant="danger" onClick = { () => handleDeleteCharacter(item.id)}>Delete</Button>
                                        <Button variant="primary" onClick = { () => routeChange(item.id, 'update')}>Update</Button>
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