import { useState } from "react";

const KockicaPametna = () => {

  const [counter, setCounter] = useState(0);

  const handleClickUp = ()=>{
    setCounter(counter+1);
  }
  const handleClickDown = ()=>{
    setCounter(counter-1)
  }
  return (
    <div className="kockica" >
      {counter}
      <button type="button" onClick={handleClickUp}>+</button>
      <button type="button" onClick={handleClickDown}>-</button>
      
    </div>
  )
}

export default KockicaPametna;