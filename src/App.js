import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modali, { useModali } from 'modali';
import { useSelector , useDispatch , shallowEqual } from 'react-redux';

// for css
import './App.css';

const App = () => {
  // init state 
  const [count , setCount] = useState(1)
  const [blockColor , setBlockColor] = useState('yellow')

  const [modalConfig, openModal] = useModali({
    animated: true,
    large: true,
    closeButton: false,
    centered: true
  });

  // init params from redux
  const countRedux = useSelector(state => state.count , shallowEqual);
  const dispatch = useDispatch();


  const handleCount = (num)=> ()=>{
    num >= 1 && num <= 10 && dispatch({
      type: 'UPDATE_COUNT',
      payload: { count : num },
    })
    num <= 5 ? setBlockColor('yellow') : setBlockColor('red')
  }

  return (
    <div className={"App"}>
      <Button onClick={openModal} >Open</Button>
      <Modali.Modal {...modalConfig}>
        <div className="container">
          <div style={{alignSelf:"center" , padding:10 , marginBottom : 10, backgroundColor: blockColor }} />
          <div style={{display:'flex' , flexDirection : "row"}}>
            <button className="actionBtn" onClick={handleCount(countRedux-1)}>-</button>
            <div style={{paddingLeft: 20 , paddingRight: 20 , border :'1px solid black' }}>{countRedux}</div>
            <button className="actionBtn" onClick={handleCount(countRedux+1)}>+</button>
          </div>
        </div>
      </Modali.Modal>
    </div>
  );
};


export default App;
