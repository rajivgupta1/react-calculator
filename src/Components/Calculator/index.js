import { useState } from "react";
import {Button} from "./Button";


export const Calculator = () => {
    const operators = ["%","/","*","-","+","."]
    const buttons = [
        {
            className: "ac",
            label: "AC"
        },

        {
            className: "c",
            label: "←"
        },

        {
            className: "perc",
            label: "%"
        },

        {
            className: "divide",
            label: "/"
        },
    
        {
            className: "7",
            label: "7"
        },

        {
            className: "8",
            label: "8"
        },
    
        {
            className: "9",
            label: "9"
        },

        {
            className: "x",
            label: "*"
        },

        {
            className: "4",
            label: "4"
          },
          {
            className: "5",
            label: "5"
          },
          {
            className: "6",
            label: "6"
          },
          {
            className: "minus",
            label: "-"
          },
          {
            className: "1",
            label: "1"
          },

          {
            className: "2",
            label: "2"
          },
          {
            className: "3",
            label: "3"
          },
          {
            className: "plus",
            label: "+"
          },
          {
            className: "0",
            label: "0"
          },
          {
            className: "dot",
            label: "."
          },

          {
            className: "equals",
            label: "="
          }

    ];

    const [strToDisplay, setStrToDisplay] = useState("")
    const [lastOperator, setLastOperator] = useState("")



    const handleButtonClick = (val) => {
        if(val === 'AC'){
          return setStrToDisplay("");
        }

         if(val === '←'){
          return setStrToDisplay(strToDisplay.slice(0, -1));
        }

        if (val === "="){
            const lastChar =strToDisplay.slice(-1);
            let tempStringValue = strToDisplay;

            if(operators.includes(lastChar)){
             tempStringValue = setStrToDisplay(strToDisplay.slice(0, -1));
            }
    
              const total = eval(tempStringValue)
              return setStrToDisplay(total.toString())
        }

         if (operators.includes(val)){
            if(!strToDisplay){
                return
            }
            let tempStringValue = strToDisplay;
            const lastChar = strToDisplay[strToDisplay.length -1];

            if(operators.includes(lastChar)){
                tempStringValue = setStrToDisplay(strToDisplay.slice(0, -1));
            }
            setStrToDisplay(tempStringValue + val);

            setLastOperator(val);
            return;

         }



        setStrToDisplay(setStrToDisplay + val)



    };


    return (
       <>
        <h1>Calculator Code goes here</h1>

    <div className="wrapper">
       <div className="calculator">
        <div className="display">{strToDisplay}</div>
    {
    buttons.map((item, index)  => 
    <Button 
    key= {index} 
    className = {item.className}
     label={item.label}
     handleButtonClick={handleButtonClick}/>)}

        {/* <Button className="ac" label="AC"/>
        <Button className="c" label="←"/> */}


        {/* <div class="btn btn-ac">AC</div> */}

        {/* <div class="btn btn-c">←</div>

        <div class="btn btn-perc">%</div>
        <div class="btn btn-divide">/</div>
        <div class="btn btn-7">7</div>
        <div class="btn btn-8">8</div>
        <div class="btn btn-9">9</div>
        <div class="btn btn-*">*</div>
        <div class="btn btn-4">4</div>
        <div class="btn btn-5">5</div>
        <div class="btn btn-6">6</div>
        <div class="btn btn-minus">-</div>
        <div class="btn btn-1">1</div>
        <div class="btn btn-2">2</div>
        <div class="btn btn-3">3</div>
        <div class="btn btn-plus">+</div>
        <div class="btn btn-0">0</div>
        <div class="btn btn-dot">.</div>
        <div class="btn btn-equals">=</div> */}
    </div>

</div>

</>

    )
}