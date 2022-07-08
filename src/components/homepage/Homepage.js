import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Row, Card, CardImg, CardImgOverlay, CardTitle, CardText, Col } from 'reactstrap'
import pizza from "../../assets/images/pizza-2.jpeg";
export default function Homepage(props) {


    return (
        <div>
            <Card inverse>
                <CardImg
                alt="Card image cap"
                src={pizza}
                width="100%"
                style={{ backgroundPosition: "center",
                    
                    height: "100vh",
                    position: "center"}}
                />
                <CardImgOverlay>
                <Row style={{height: "100vh"}} >
                    <Col
                       
                        sm="4"
                        xs="6"
                    >
                    </Col>
                    <Col
                        
                        sm="4"
                        xs="6"
                    >
                    </Col>
                    <Col
                        className='align-self-center mx-auto'
                        sm="4"
                        xs="6"
                    >
                        <CardTitle tag="h3">
                    GET IT WHILE IT'S HOT!
                </CardTitle>
                <CardText>
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </CardText>
                <CardText>
                    <Link to="/menu">
                        <Button  color="warning" outline>ORDER ONLINE</Button>
                    </Link>
                </CardText>
                    </Col>
                </Row>
                
                </CardImgOverlay>
            </Card>
        </div>
    )
}