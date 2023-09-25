
import './App.css';
import { Button } from 'reactstrap';
import {  useState } from 'react';

function App() {

  let[count,secount]=useState(0);

  const countplush = () => {
   
    if(count>=50){
      secount(50);
    }else{
      secount(count+1);
    }
    
  }

  const countminus = () => {
   
    if(count<=0){
      secount(0);
    }else{
      secount(count-1);
    }

  }
  
  return (
    <>
    
    <div className="container">

     <div className="frame">

            <h1 className='my-1'>Count 1 to 50</h1>

      <div className="frameinside">

      <h1 id='count'>{count}</h1>


      <br/>
      <Button color="dark mx-3"  onClick={countminus}>count-</Button>
      <Button color="dark"  onClick={countplush}>count+</Button>

      </div>

    </div>
    </div>

    </>
  );
}

export default App;
