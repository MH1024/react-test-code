import React from 'react'
import { Button, ButtonGroup, Card, CardText, CardTitle, Col, FormGroup, Input, Label, Row } from 'reactstrap'
const Toppings = () => {
    const styles = {
        
        row: {
            marginLeft: 10,
            marginRight: 10
        },
        col: {
            paddingLeft: 10,
            paddingRight: 10
        }
    };
    const toppingOptions = [
        {
            name: "Anchovy",
            imgSrc: "/"
        },
        {
            name: "Bacon",
            imgSrc: "/"
        },
        {
            name: "Basil",
            imgSrc: "/"
        },
        {
            name: "Chili",
            imgSrc: "/"
        },
        {
            name: "Mozzarella",
            imgSrc: "/"
        },
        {
            name: "Mushroon",
            imgSrc: "/"
        },
        {
            name: "Olive",
            imgSrc: "/"
        },
        {
            name: "Onion",
            imgSrc: "/"
        },
        {
            name: "Pepper",
            imgSrc: "/"
        },
        {
            name: "Pepperoni",
            imgSrc: "/"
        },
        {
            name: "Prawn",
            imgSrc: "/"
        },
        {
            name: "Sweetcorn",
            imgSrc: "/"
        }

    ]
    
    return (
        <div>

            <Row style={styles.row}>
           
                <Card body className="border-0">
                    <CardTitle tag="h4" className='p-10'>
                    Pick Your Toppings
                    </CardTitle>
                    
                        <Row xs="4">
                            {toppingOptions.map((item, index) => (
                                <Col style={styles.col} key={index+1}>
                                    <FormGroup>
                                        
                                        <Input type="checkbox" className="btn-check" id={item.name} />
                                        <Label className="btn col-12 btn-outline-secondary" for={item.name}>{item.name}</Label>
                                    </FormGroup>
                                </Col>
                            ))}
                        </Row>
                        
                    
                    
                </Card>
            </Row>
        </div>
    )
}
export default Toppings