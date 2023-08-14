import React, { useState } from 'react'
import { Button, Card, Col, Row } from 'reactstrap'
import Details from '../details'
import Summary from '../summary'
import Toppings from '../toppings'
const Ordering = () => {
    const inputConfigs = [
        {
            name: "Name",
            type: "text",
            placeholder: "Please input your Name"
        },
        {
            name: "Email",
            type: "email",
            placeholder: "Please input your Email"
        },
        {
            name: "Confirm Email",
            type: "email",
            placeholder: "Please input your Confirm Email"
        },
        {
            name: "Address",
            type: "text",
            placeholder: "Please input your Address"
        },
        {
            name: "Postcode",
            type: "number",
            placeholder: "Please input your Post code(4 digit)"
        },
        {
            name: "Contact Number",
            type: "text",
            placeholder: "Please input your AU Phone Number"
        }
    ]

    const toppingOptions = [
        {
            name: "Anchovy",
            price: 0.69,
            qty: 0
        },
        {
            name: "Bacon",
            price: 0.69,
            qty: 0
        },
        {
            name: "Basil",
            price: 0.69,
            qty: 0,
        },
        {
            name: "Chili",
            price: 0.69,
            qty: 0,
        },
        {
            name: "Mozzarella",
            price: 0.69,
            qty: 0
        },
        {
            name: "Mushroom",
            price: 0.69,
            qty: 0
        },
        {
            name: "Olive",
            price: 0.69,
            qty: 0
        },
        {
            name: "Onion",
            price: 0.69,
            qty: 0
        },
        {
            name: "Pepper",
            price: 0.69,
            qty: 0
        },
        {
            name: "Pepperoni",
            price: 0.69,
            qty: 0
        },
        {
            name: "Prawn",
            price: 0.69,
            qty: 0
        },
        {
            name: "Sweetcorn",
            price: 0.69,
            qty: 0
        }

    ]
    const [toppingArray, setToppingArray] = useState(toppingOptions);
    const [selectedToppingArray, setSelectedToppingArray] = useState([]);
    const [totalPrice, setTotalPrice] = useState(9.99)
    const [isSelectAll, setIsSelectAll] = useState(false);
    const [fieldArray, setFieldArray] = useState(inputConfigs);
    const countTotalPrice = (validArray) => {
        const groupPriceArray = validArray.map(item => item.groupPrice );
        const countToppingPrice = groupPriceArray && groupPriceArray.length ? groupPriceArray.reduce(function(acr, cur){
            return Number(acr) + Number(cur);
        }): 0;
        return  (Number(countToppingPrice) + Number(9.99)).toFixed(2)
    }
    const addToppingToOrder = (inputArray) => {
        
        const validToppingArray = inputArray.filter(
            item => item.checked && item.qty > 0
        )
        const summaryToppingArray = validToppingArray.map(
            item => {
                item.groupPrice = Number(item.qty * item.price).toFixed(2);
                return item;
            }
        )
        const sumPrice = countTotalPrice(summaryToppingArray);
        setTotalPrice(sumPrice);
        setSelectedToppingArray(summaryToppingArray);
        
    }
    const selectToppingItem = (selectedItem) => {
        const selectedArray = toppingArray.map(top => {
            const checkStatus = top.name === selectedItem.name ? !top.checked : top.checked
            const qtyNum = (top.name === selectedItem.name) && checkStatus ? 1 : top.qty
            top.checked = checkStatus;
            top.qty = qtyNum;
            return top;
        })
        addToppingToOrder(selectedArray)
        setToppingArray(selectedArray)
    }
    const selectToppingQty = (selectedItem) => {
        const selectedArray = toppingArray.map(top => {
            const qtyNum = (top.name === selectedItem.name) && top.checked ? selectedItem.number : top.qty 
            top.qty = qtyNum;
            if (qtyNum === 0 ) {
                top.checked = false;
            }
            return top;
        })
        addToppingToOrder(selectedArray)
        setToppingArray(selectedArray)
    }
    const handleSelectAllAction = (selectAllStatus) => {
        setIsSelectAll(selectAllStatus);
        if (selectAllStatus) {
            const selectedArray = toppingArray.map(top => {
                const checkStatus = top.checked;
                const qtyNum = !checkStatus ? 1 : top.qty
                top.checked = true;
                top.qty = qtyNum;
                return top;
            })
            addToppingToOrder(selectedArray)
            setToppingArray(selectedArray)
        } else {
            
            addToppingToOrder(toppingOptions)
            setToppingArray(toppingOptions)
        }
    }
    const placeOrder = () => {
        let invalid = false; 
        for (const item of fieldArray) {
            if (item && (!item.value || item.invalid)) {
                invalid = true;
            }
        }
        if (invalid) {
            alert('Please fill the Detail Form before place order.')
            return
        }
        const detailObj = fieldArray.reduce((acc, cur ) => {
            acc[cur.name] = cur.value 
            return acc
        }, {});

        const orderSummary = {
            detail:detailObj,
            selectedTopping: selectedToppingArray,
            totalPrice: totalPrice
        }
        console.log(orderSummary)
        alert('Order successfully created.')
    }
    
    return (
        <div>
            <Details
                fieldArray={fieldArray}
                setFieldArray={setFieldArray} 
            />
            <Toppings
                handleSelectAllAction={handleSelectAllAction}
                isSelectAll={isSelectAll}
                selectToppingItem={selectToppingItem}
                toppingArray={toppingArray}
            />
            <Summary 
                selectedToppingArray={selectedToppingArray}
                selectToppingQty={selectToppingQty}
                totalPrice={totalPrice}
            />
            
           
            <Card className="border-0">
                <Row>
                    
                    <Col>
                    <div className='p-3'>
                        <Button
                            className='col-12'
                            color="warning"
                            onClick={placeOrder}
                        >
                            Place Order
                        </Button>
                    </div>
                        
                    </Col>   
                 
                    
                    
                </Row>
                
            </Card>
                
                
            
        </div>
    )
}
export default Ordering