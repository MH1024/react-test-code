import React from "react";
const IncDecCounter = (props) => {

    const {name, num, setNum} = props;

  
    let incNum =()=>{
        if(num<9) {
            setNum({name: name, number: Number(num)+1});
        }
    };
    let decNum = () => {
        if(num>0) {
            setNum({name: name, number: num - 1});
        }
    }

   return(
    <>
    <div >
        <div className="input-group">
        <div className="input-group-prepend"> 
            <button className="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
        </div>
        <div style={{padding: "5px 10px", fontSize: "1.25rem"}}>
            <span>{num}</span>
        </div>
        <div className="input-group-prepend">
            <button className="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
        </div>
        </div>
    </div>
   </>
  );
}
export default IncDecCounter;