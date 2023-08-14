import React from 'react'
import { Card, CardTitle, Label, Row } from 'reactstrap'
import IncDecCounter from './IncDecCounter';
const Summary = (props) => {
    const { totalPrice, selectedToppingArray, selectToppingQty } = props;
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
    const setQty = (qtyObj) => {
        selectToppingQty(qtyObj)
    }

    
    return (
        <div>

            <Row style={styles.row}>
           
                <Card body className="border-0">
                    <CardTitle tag="h4" className='p-10'>
                    Order Summary
                    </CardTitle>
                    <Row>
                        <Label>Pizza  {'$9.99'}</Label>
                    </Row>
                    {selectedToppingArray && selectedToppingArray.map((toppingItem, index) => (
                        <Row key={index + 'price'}>      
                        <div className='d-flex justify-content-between'>
                            <div className="d-flex align-items-center justify-content-start flex-wrap">
                                <IncDecCounter
                                    name={toppingItem.name} 
                                    num={toppingItem.qty}
                                    setNum={setQty}
                                /> 
                                <div className='p-2'>{toppingItem.name}</div> 
                            </div>
                            <div>{'$' + toppingItem.groupPrice}</div>
                        </div>
                        
                        </Row>
                    ))}
                    
                    <hr/>
                    <Row>
                        <div className='d-flex justify-content-between'>
                            <div>
                                
                            </div>
                            <div>{'Total: $'} {totalPrice ? totalPrice : 0.00} </div>
                        </div>
                    </Row>
                </Card>
            </Row>
        </div>
    )
}
export default Summary