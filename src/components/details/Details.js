import React, { useState } from 'react'
import { Button, Card, CardText, CardTitle, Col, FormFeedback, FormGroup, Input, Label, Row } from 'reactstrap'
import validator from 'validator';
const Details = (props) => {
    const {fieldArray, setFieldArray} = props;
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

    
    const formDataOrigin = {
        "Name" : {
            'value': '',
            'invalid': true
        },
        "Email" : {
            'value': '',
            'invalid': true
        },
        "Confirm Email" : {
            'value': '',
            'invalid': true
        },
        "Address" : {
            'value': '',
            'invalid': true
        },
        "Postcode" : {
            'value': '',
            'invalid': true
        },
        "Contact Number" : {
            'value': '',
            'invalid': true
        }
    }
    
    const [formData, setFormData] = useState(formDataOrigin)

    const validEmail = (inputValue) => {
       
        const statusObj = {
            isFilled: inputValue ? true : false,
            isPattern: inputValue ? validator.isEmail(inputValue) : false
        }
        return statusObj.isFilled && statusObj.isPattern;
    
    }

    const validPostcode = (inputNum) => {
        const POST_REG = new RegExp('^\\d{4}$');
        
        const statusObj = {
            isFilled: inputNum ? true : false,
            isPattern: inputNum ? POST_REG.test(inputNum) : false
        }
        return statusObj.isFilled && statusObj.isPattern;
    }

    const validPhone = (inputNum) => {
        // AU phone number
        const PHONE_REG = new RegExp('^(?:\\+?(61))? ?(?:\\((?=.*\\)))?(0?[2-57-8])\\)? ?(\\d\\d(?:[- ](?=\\d{3})|(?!\\d\\d[- ]?\\d[- ]))\\d\\d[- ]?\\d[- ]?\\d{3})$');
        const statusObj = {
            isFilled: inputNum ? true : false,
            isPattern: inputNum ? PHONE_REG.test(inputNum) : false
        }
        return statusObj.isFilled && statusObj.isPattern;
    }
    const validAddress = (inputString) => {
        const ADDRESS_REG = new RegExp('^[0-9]*$');
        const statusObj = {
            isFilled: inputString ? true : false,
            isPattern: inputString ? !ADDRESS_REG.test(inputString) : false
        }
        return statusObj.isFilled && statusObj.isPattern;
    }
    const handleFieldChange = (event, item) => {

        let itemObj = {
           [item.name]: {}
        };
        const value =  event.target.value && event.target.value.trim() ? event.target.value.trim() : '';
        switch (item.name) {
            case 'Email':
                itemObj[item.name] = {
                    'value':  value,
                    'invalid': !validEmail(value)
                }
                break;
            case 'Confirm Email':
                itemObj[item.name] = {
                    'value':  value,
                    'invalid': !(validEmail(value) && formData['Email'].value && (formData['Email'].value === value))
                }
                break;
            case 'Postcode': 
                itemObj[item.name] = {
                    'value':  value,
                    'invalid': !validPostcode(value)
                }
                break;
            case 'Contact Number': 
                itemObj[item.name] = {
                    'value':  value,
                    'invalid': !validPhone(value)
                }
                break;
            case 'Address': 
                itemObj[item.name] = {
                    'value':  value,
                    'invalid': !validAddress(value)
                }
                break;
            default:
                itemObj[item.name] = {
                    'value':  value,
                    'invalid': !value
                }
                break;
        }
        
        setFormData({...formData, [item.name] : itemObj[item.name]})
        const selectedArray = fieldArray.map(element => {
            if (element.name === item.name) {
                element.invalid = itemObj[item.name]['invalid'];
                element.value = value;
            }
            return element;
        })
        setFieldArray(selectedArray)
        
    }



    return (
            <Row style={styles.row}>
           
                <Card body className="border-0">
                    <CardTitle tag="h4" className='p-10'>
                    Enter Your Detail
                    </CardTitle>
                    <Row>
                        {fieldArray.map((item, index) => (
                            <Col md="4" style={styles.col} key={index + item.name}>
                                <FormGroup>
                                    <Label>
                                        {item.name}
                                    </Label>
                                    
                                    <Input
                                        key={index + item.name}
                                        name={item.name}
                                        placeholder={item.placeholder}
                                        type={item.type}
                                        invalid={item.invalid}
                                        onChange={(e)=> handleFieldChange(e, item)}
                                    /> 
                                    <FormFeedback>
                                        Please input valid {item.name}
                                    </FormFeedback>
                                </FormGroup>
                            </Col>
                        ))}
                    </Row>
                </Card>
            </Row>
       
    )
}
export default Details