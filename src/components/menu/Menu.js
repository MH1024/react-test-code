import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardText, CardTitle, Col, FormGroup, Input, Label, Row } from 'reactstrap'
import Details from '../details'
import Summary from '../summary'
import Toppings from '../toppings'
const Menu = () => {
    

    
    return (
        <div>
            <Details />
            <Toppings />
            <Summary />
            
           
            <Card className="border-0">
                <Row>
                    <Col>
                        <Link to="/homepage" style={{width:'100%'}}>
                            <Button className='col-12'
                                color="danger"
                            >
                                Give Up
                            </Button>
                        </Link>
                    </Col>
                    <Col>
                        <Button
                        className='col-12'
                            color="warning"
                        >
                            Place Order
                        </Button>
                    </Col>   
                 
                    
                    
                </Row>
                
            </Card>
                
                
            
        </div>
    )
}
export default Menu