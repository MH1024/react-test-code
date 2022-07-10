import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Row, Card, CardImg, CardImgOverlay, CardTitle, CardText, Col } from 'reactstrap'
import pizza from "../../assets/images/pizza-2.jpeg";
export default function Homepage(props) {
    const styles = {
        
        title: {
            fontFamily: "Microsoft Sans Serif", 
            textAlign: 'center', 
            fontSize: "50px", 
            fontWeight: "bold"
        },
        subTitle: {
            color: '#fd7e4e', 
            textAlign: 'center', 
            fontFamily: "Times New Roman, Times, serif", 
            fontSize: "30px", 
            fontWeight: "bold"
        },
        link: {
            textAlign: 'center'
        },
        button: {
            color: "#fd7e4e",
            borderColor: "#fd7e4e"
        }
    };

    return (
        <div>
            <Card inverse>
                <CardImg
                alt="Card image cap"
                src={pizza}
                width="100%"
                height="100%"
                
                />
                <CardImgOverlay>
                <Row style={{height: "100vh"}} >
                    <Col
                       
                        sm="6"
                        xs="6"
                        className="d-none d-sm-block"
                    >
                    </Col>
                    <Col
                        className='align-self-center mx-auto'
                        sm="6"
                        xs="6"
                    >
                        <CardTitle style={styles.title}>
                    GET IT WHILE IT'S HOT!
                </CardTitle>
                <CardText style={styles.subTitle}>
                    <span >We create customized pizzas with quality ingredients in only five minutes</span>
                </CardText>
                <CardText style={styles.link}>
                    <Link to="/ordering">
                        <Button outline style={styles.button}>ORDER ONLINE</Button>
                    </Link>
                </CardText>
                    </Col>
                </Row>
                
                </CardImgOverlay>
            </Card>
        </div>
    )
}