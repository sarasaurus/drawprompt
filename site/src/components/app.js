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

// TODO: maybe I actually need a database model!
const storageKey = 'data';

class App extends React.Component {
  constructor(props) {
    super(props); // initialises 'this'
    this.state = emptyState;// initializing state, must be done first
    autoBind.call(this, App); 
    
  }
  
  handleChangeWord (target) {
    console.log('APP TARGET', target);
    const { name, value } = target;
    return this.setState({
      [name]: [value]
    }, ()=>{
      console.log('app handle change', this.state);
    })
  }
  // handleSubmitWord (target) {
  //   console.log('WORD OBJECT', target);
  //   const { name, value } = target;
  //   console.log('object destructure', target.adj);
  //   console.log('APP NAME VALUE', { name, value })
  //   // const { newAdj, newNoun, newVerb } = event; // destructuring word obj

  //   // this code is for a string in state
  //   // TODO: switch this to local storage, so an array is stored in the broswer but state stays singurlar
  //   this.setState({
  //     [name]: value
  //   }, ()=>{
  //     this.setState({done: true })
  //     if (localStorage.getItem(storageKey) !== null) {
  //       const storage = JSON.parse(localStorage.getItem('data'));
  //       console.log('storage?', storage);
  //       const { newAdj, newVerb, newNoun } = this.state;
  //       storage.adj.push(newAdj);
  //       storage.noun.push(newNoun);
  //       storage.verb.push(newVerb);
  //       console.log('pushed stroage', JSON.stringify(storage));
  //       localStorage.setItem(`${storageKey}`, JSON.stringify(storage)); 
  //       this.setState(emptyState);
  //       console.log('app state emptied', this.state);
  //     }
  //     const storage = {
  //       adj: [],
  //       noun: [],
  //       verb: []
  //     };
  //     const {adj, noun, verb } = this.state;
  //     storage.adj.push(adj);
  //     storage.noun.push(noun);
  //     storage.verb.push(verb);
  //     console.log('app state', storage);
  //     localStorage.setItem(`${storageKey}`, JSON.stringify(storage))
  //     console.log('app state', this.state);
  //     this.setState(emptyState);
  //     console.log('app state emptied', this.state);
  //   })
    
    // this code is for an array in state
    // this.setState((prevState, { [name]: value })=> ({
    //   adj: [value, ...prevState.adj ],
    //   noun: [value, ...prevState.noun],
    //   verb: [value, ...prevState.verb]
    // }), ()=>{
    //   this.setState({done: true})
    //   console.log('app state', this.state);
    // });
    
  //}
  handleSubmitWord (target) {
    console.log('target', target);
    const { adj, verb, noun } = target;
    console.log(`adj: ${adj.value}, verb: ${verb.value}, noun: ${noun.value}`);
    return this.setState((previousState) => {
      return {
        adj: [...previousState.adj, adj.value ],
        noun: [...previousState.noun, noun.value ],
        verb: [...previousState.verb, verb.value ],
        done: true,
      };
    }, ()=>{
      console.log('state after submit:', this.state)
    });
  }
  



  render() {
    return (
      <div className='main-container'>
      <WordForm onChange = {this.handleChangeWord} onComplete={this.handleSubmitWord}/>
      <Prompt words={ this.state } />
      </div>
    )
  }
 
}
export default App;