import {useState} from 'react'
import {Form} from "./Components/Form";
import {Display} from "./Components/Display";
import {RealTime} from "./Components/RealTime";


export const Header = () => { 
    
    const [counter, setCounter] = useState(0);
    const [textValue, setTextValue] = useState("");
    const [displayText, setdisplayText] = useState("");



    const handleDecrement = () => {
        setCounter(counter - 1);
    }

    const handleIncrement = () => {
        setCounter(counter + 1);
    }
    const addIncrement = () => {
        setCounter(counter + 2);
    }

    const set0 = () => {
        setCounter(0);
    }

   const handleChange= (event)=> {
    console.log(event);
    setTextValue(event.target.value)

   }
    const onSubmitValue = (event)=>{
    
        event.preventDefault ();
        setdisplayText(textValue);
   }



    return (
        <div>
        <h1>Rambo Counter application</h1>
        <h3>Initial Value:{counter}</h3>


        <button onClick = {handleIncrement}>
       <b>Increment!</b>
       </button>


        <button onClick={handleDecrement}>
       <b>Decrement!</b>
       </button>
       

       <button onClick={addIncrement}>
       <b>AddIncrement</b>
       </button>
      
       <button onClick={set0}>
        
       <b>Reset</b>
       </button>
       
       <hr/>
       <h1>Props and Components</h1>
       
       <Form value={textValue} onSubmitValue={onSubmitValue} handleChange={handleChange}/>
       <RealTime value = {textValue}/>
       <Display value= {displayText}/>
    
        </div>
    )
}