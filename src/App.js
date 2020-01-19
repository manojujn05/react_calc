import React, { Component } from 'react'
import ResultComponent from './components/ResultComponent'
import KeypadComponent from './components/KeypadComponent'
import './App.css';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      result: ""
    }
  } 
  onClick = button => {
      if(button === "="){
          this.calculate()
      }
      else if(button === "C"){
          this.reset()
      }
      else if(button === "CE"){
          this.backspace()
      }
      else {
          this.setState({
              result: this.state.result + button
          })
      }
      console.log(this.state.result);
    };


    calculate = () => {
        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

  render() {
     return (
      <div>
        <div className="calculatorbody">
        <h1>React Calculator</h1>
        <ResultComponent result={this.state.result}/>
        <KeypadComponent onClick={this.onClick} />
      </div>
      </div>
    )
  }
}
