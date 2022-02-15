import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import reducer from '../reducers';
import { initialState } from '../reducers';

import { addOne, applyNumber, changeOperator, clearDisplay, saveMemory, applyMemory, clearMemory } from '../actions';

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState)

  // console.log(state.operation)
  // console.log(state.memory)
  // console.log(state.total)

  // const addOneClick = evt => {
  //   evt.preventDefault();

  //   dispatch(addOne())
  // }

  const clickApplyNumber = number => evt => {
    evt.preventDefault();

    dispatch(applyNumber(number));
  }

  const clickApplyMemory = memory => evt => {
    evt.preventDefault();

    dispatch(applyMemory(memory));
  }

  const clickChangeOperator = operator => evt => {
    evt.preventDefault();

    dispatch(changeOperator(operator))
  }

  const clickSaveMemory = memory => evt => {
    evt.preventDefault();

    dispatch(saveMemory(memory))
  }

  const clickClearDisplay = evt => {
    evt.preventDefault();

    dispatch(clearDisplay())
  }

  const clickClearMemory = evt => {
    evt.preventDefault();

    dispatch(clearMemory())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={clickSaveMemory(state.total)} value={"M+"}/>
              <CalcButton onClick={clickApplyMemory(state.memory)} value={"MR"}/>
              <CalcButton onClick={clickClearMemory} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={clickApplyNumber(1)} value={1}/>
              <CalcButton onClick={clickApplyNumber(2)} value={2}/>
              <CalcButton onClick={clickApplyNumber(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={clickApplyNumber(4)} value={4}/>
              <CalcButton onClick={clickApplyNumber(5)} value={5}/>
              <CalcButton onClick={clickApplyNumber(6)} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={clickApplyNumber(7)} value={7}/>
              <CalcButton onClick={clickApplyNumber(8)} value={8}/>
              <CalcButton onClick={clickApplyNumber(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={clickChangeOperator("+")} value={"+"}/>
              <CalcButton onClick={clickChangeOperator("*")} value={"*"}/>
              <CalcButton onClick={clickChangeOperator("-")} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={clickClearDisplay} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
