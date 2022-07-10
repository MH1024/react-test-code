import React from 'react'
import { Button, Card, CardText, CardTitle, Col, FormGroup, Input, Label, Row } from 'reactstrap'
const Details = () => {
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

    const inputConfigs = [
        {
            name: "Name",
            type: "text",
            placeholder: "Plase input your Name"
        },
        {
            name: "Email",
            type: "email",
            placeholder: "Plase input your Email"
        },
        {
            name: "Confirm Email",
            type: "email",
            placeholder: "Plase input your Email"
        },
        {
            name: "Address",
            type: "text",
            placeholder: "Plase input your Address"
        },
        {
            name: "Postcode",
            type: "number",
            placeholder: "Plase input your Post code(4 digit)"
        },
        {
            name: "Contact Number",
            type: "text",
            placeholder: "Plase input your Phone Number"
        }
    ]
    return (
        

            <Row style={styles.row}>
           
                <Card body className="border-0">
                    <CardTitle tag="h4" className='p-10'>
                    Enter Your Detail
                    </CardTitle>
                    <Row>
                        {inputConfigs.map((item, index) => (
                            <Col md="4" style={styles.col} key={index+1}>
                                <FormGroup>
                                    <Label for="examplePassword">
                                        {item.name}
                                    </Label>
                                    <Input
                                    id={index}
                                    name={item.name}
                                    placeholder={item.placeholder}
                                    type={item.type}
                                    />
                                </FormGroup>
                            </Col>
                        ))}
                    </Row>
                </Card>
            </Row>
       
    )
}
export default Details