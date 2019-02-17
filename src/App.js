import React, { Component } from 'react';
import './App.css';
import {TitleBar} from './titleBar';
import {Question} from './question';
import {buildQuestionDataArray} from './numberFunctions'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      numberOfQuestions: 10,
      operatorOptions: [
        {
          operator: 'add',
          active: true,
          symbol: String.fromCharCode(43),
          options: {
            includeWhole1: true,
            includeFraction1: true,
            includeWhole2: true,
            includeFraction2: true,
          },
        },
        {
          operator: 'subtract',
          active: false,
          symbol: String.fromCharCode(8722),
          options: {
            borrowing: false,
            includeWhole: true
          }
        },
        {
          operator: 'multiply',
          active: false,
          symbol: String.fromCharCode(215),
          options: {
            includeWhole1: true,
            includeFraction1: true,
            includeWhole2: true,
            includeFraction2: true,
          },
        },
        {
          operator: 'divide',
          active: false,
          symbol: String.fromCharCode(247),
          options: {
            includeWhole: false,
          },
        }
      ],
      questionData: [],
    }
    // make sure 'this' is defined in onclick callbacks
    this.generateQuestionData = this.generateQuestionData.bind(this)
    this.toggleOperators = this.toggleOperators.bind(this)
  }

  componentDidMount(){
    this.generateQuestionData()
  }

  // populates array of question data
  generateQuestionData(){
    const len = this.state.numberOfQuestions
    const operatorOptions = this.state.operatorOptions.slice()
    const newQuestionData = buildQuestionDataArray(len, operatorOptions)
    this.setState({questionData: newQuestionData})
  }

  // function called by titlebar buttons to turn on or off different operators
  toggleOperators(operator){
    const ops = this.state.operatorOptions.slice()
    for(let i = 0; i < ops.length; i++){
      if(ops[i].operator === operator) {
        ops[i].active = !ops[i].active
        break
      }
    }
    this.setState({
      operatorOptions: ops
    })
    this.generateQuestionData()
  }

  // build ordered list of question components
  questionList(){
    // check if the question is null (i.e. no operators are selected)
    const qdata = this.state.questionData.filter(q => q)
    if(qdata.length > 0){
      const qs = qdata.map((q, i) => <Question key={i} data={q} />)
      return(
        <ol>
          {qs}
        </ol>
      )
    }
    return <div>Select some options to make some questions!</div>
  }

  render() {
    return (
      <div className="App">
        <TitleBar 
          title={"Fractions"}
          operatorOptions={this.state.operatorOptions}
          generate={this.generateQuestionData} 
          toggleOperators={this.toggleOperators}
        />
        {this.questionList()}
      </div>
    );
  }
}

export default App;
