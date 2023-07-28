import { useReducer } from "react";
import "./style.css"

const ACTION = {
  ADD_DIGIT : 'add-digit',
  CHOOSE_OPERATION : 'choose-operation',
  CLEAR : 'clear',
  DELETE_DIGIT : 'delete-digit',
  EVALUATE : 'evaluate'
}

function reducer(state, {type, payload}){
  switch (type) {
    case ACTION.ADD_DIGIT: 
    return {
      ...state,
      currentOperand: `${currentOperand || ""}${payload.digit}`
  }
}

function App() {
  const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {})
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{previousOperand} {operation}</div>   {/*(displays previous input*/}
        <div className="current-operand">{currentOperand}</div>    {/* displays current input */}
      </div>
      <button className="span-two">AC</button>  {/*takes two column space*/}
      <button>DEL</button>
      <button>/</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button> 
      <button>6</button>     
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="span-two">=</button>  {/*takes two column space*/}
    </div>
  );
}

export default App;