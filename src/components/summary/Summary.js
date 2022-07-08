import React from 'react'
import { Button, Card, CardText, CardTitle, Col, FormGroup, Input, Label, Row } from 'reactstrap'
const Summary = () => {
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

    
    return (
        <div>

            <Row style={styles.row}>
           
                <Card body className="border-0">
                    <CardTitle tag="h4" className='p-10'>
                    Order Summary
                    </CardTitle>
                    <Row xs="4">
                    <li>
                            Pizza
                            <ul>
                            <li>
                                Mushroom
                            </li>
                            
                            </ul>
                        </li>
                    </Row>
                    
                </Card>
            </Row>
        </div>
    )
}
export default Summary