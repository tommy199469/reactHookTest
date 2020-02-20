import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modali, { useModali } from 'modali';
import './App.css';

const App = () => {

  const [count , setCount] = useState()
  const [modalConfig, openModal] = useModali({
    animated: true,
    large: true,
    closeButton: false,
    centered: true
  });

  return (
    <div className={"App"}>
      <Button onClick={openModal} >Open</Button>
      <Modali.Modal {...modalConfig}>
        <div className="container">

        </div>
      </Modali.Modal>
    </div>
  );
};


export default App;
