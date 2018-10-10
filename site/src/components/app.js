import React from 'react';
import autoBind from '../utils/utils';
import WordForm from './form';
import Prompt from './prompt';
//import Prompt from'./prompt';
// import PropTypes from 'prop-types';

let emptyState = {
  adj: [],
  noun: [],
  verb: [],
  done: false
};

class App extends React.Component {
  constructor(props) {
    super(props); // initialises 'this'
    this.state = emptyState;// initializing state, must be done first
    autoBind.call(this, App); 
  }
  handleChangeWord (target) {
    console.log('APP TARGET', target);
    const { name, value } = target;
    this.setState({
      [name]: value
    }, ()=>{
      console.log('app handle change', this.state);
    })
  }
  handleAddWord (target) {
    console.log('WORD OBJECT', target);
    const { name, value } = target;
    console.log('object destructure', target.adj);
    console.log('APP NAME VALUE', { name, value })
    // const { newAdj, newNoun, newVerb } = event; // destructuring word obj
    // this.setState({
    //   [name]: value
    // }, ()=>{
    //   this.setState({done: true })
    //   console.log('app state', this.state);
    // })
    this.setState((prevState, { [name]: value })=> ({
      adj: [value, ...prevState.adj ],
      noun: [value, ...prevState.noun],
      verb: [value, ...prevState.verb]
    }), ()=>{
      this.setState({done: true})
      console.log('app state', this.state);
    })
    ;
    
  }

  render() {
    return (
      <div className='main-container'>
      <WordForm onChange = {this.handleChangeWord} onComplete={this.handleAddWord}/>
      <Prompt words={ this.state } />
      </div>
    )
  }
 
}
export default App;