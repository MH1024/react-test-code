import React , {Suspense, useRef, useState, useEffect }from 'react'
import { Button, ButtonGroup, Card, CardText, CardTitle, Col, FormGroup, Input, Label, Row } from 'reactstrap'


const Toppings = (props) => {
    const { toppingArray, selectToppingItem, handleSelectAllAction, isSelectAll } = props;

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
    
    const [imgMap, setImgMap] = useState({});
    
    
    useEffect(() => {
        const reqSvgs = require.context('../../assets/images', true, /\.svg$/ );
        const svgs = reqSvgs
        .keys ()
        .reduce ( ( images, path ) => {
          images[path] = reqSvgs ( path )
          return images
        }, {} )
        setImgMap(svgs)
    }, [])

    const selectTopping = (event, item) => {
        
        
        selectToppingItem(item);
    }
    const getIconComponent = (name) => {
        const iconName = name.toLowerCase();
        return <img src={imgMap['./' + iconName + '.svg']}  style={{width:'40px', height:"40px" }} alt="pic"/>
    }
    const selectAllTopping = () => {
        const selectStatus = !isSelectAll;
        handleSelectAllAction(selectStatus);
    }
    
    return (
        <div>

            <Row style={styles.row}>
           
                <Card body className="border-0">
                    <CardTitle tag="h4" className='p-10'>
                    Pick Your Toppings
                    </CardTitle>
                        <Row>
                            <Col md="3" style={styles.col}>
                                    <FormGroup>
                                        
                                        <Button className="col-12" onClick={selectAllTopping} style={isSelectAll ? {backgroundColor: "#d9a620",border: "none"} : {backgroundColor: "#f2f2f2",border: "none"}}>
                                            <div className="d-flex align-items-center justify-content-center flex-wrap">
                                                
                                                    <span style={ {color: isSelectAll ? 'white': 'black'}}>{isSelectAll ? 'Unselect All': 'Select All'}</span>
                                                
                                            </div>
                                            
                                        </Button>
                                    </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            {toppingArray && toppingArray.map((item, index) => (                                
                                <Col md="3" style={styles.col} key={index+1}>
                                    <FormGroup>
                                        
                                        <Input type="checkbox" className="btn-check" id={item.name} onChange={(event) => selectTopping(event, item)}/>
                                        <Label className="col-12" for={item.name} style={ {backgroundColor: item.checked ? "#d9a620" : "#f2f2f2" ,border: "none", cursor: "pointer"}}>
                                            <div className="d-flex align-items-center justify-content-start flex-wrap">
                                                <div style={{backgroundColor: "#e7e7e7", padding: "9px"}}>
                                                    {getIconComponent(item.name)}
                                                </div>
                                                <div style={{paddingLeft: "16px"}}>
                                                    <span style={ {color: item.checked ? 'white': 'black'}}>{item.name} </span>
                                                </div>
                                            </div>
                                            
                                        </Label>
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