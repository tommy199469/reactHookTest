import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modali, { useModali } from 'modali';
import './App.css';

const App = () => {

  const [count , setCount] = useState(1)

  const [modalConfig, openModal] = useModali({
    animated: true,
    large: true,
    closeButton: false,
    centered: true
  });

  const handleCount = (num)=> ()=>{
    num >= 1 && num <= 10 && setCount(num)
  }


  return (
    <div className={"App"}>
      <Button onClick={openModal} >Open</Button>
      <Modali.Modal {...modalConfig}>
        <div className="container">
          <div style={{display:'flex' , flexDirection : "row"}}>
            <button className="actionBtn" onClick={handleCount(count-1)}>-</button>
            <div style={{paddingLeft: 20 , paddingRight: 20 , border :'1px solid black' }}>{count}</div>
            <button className="actionBtn" onClick={handleCount(count+1)}>+</button>
          </div>
        </div>
      </Modali.Modal>
    </div>
  );
};


export default App;
