import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

function Tarjeta(props){
    return(
        <Card style={{ width: '18rem', margin: '2rem'}}>
            <Card.Img variant="top" src={props.image} alt={props.name} />
            <h1>{props.name}</h1>
            <h3>{props.universe}</h3>
            <p>{props.description}</p>
            <p>{props.powers}</p>
            <ListGroup>
                {props.stats.map((item, index)=> (
                    <ListGroup.Item key={index}>
                        {item.key}: {item.value}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Card>
    );
}
export default Tarjeta