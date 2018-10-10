import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../utils/utils';


class Prompt extends React.Component {
  constructor(props) {
    super(props); // initialises 'this'
    autoBind.call(this, Prompt);
  }
  // handleUpdate () {
  //   console.log('ADJ', this.props.adj);
  //   let monster = `${localStorage.getItem('adj')}, ${localStorage.getItem('noun')}, ${localStorage.getItem('verb')}`;
  //   return monster;
  // }
  
  render () {
    const word = this.props.words;
    console.log('props in prompt', this.props.words.done)
    return (
    
      <div>
        <h1>Enter words above</h1>
       <p>Draw a {this.props.words.done ? `${word.adj}, ` :  '. . . ' } 
       {this.props.words.done ? `${word.noun}, ` : ''} 
       {this.props.words.done ? `${word.verb}!` : '' }</p>

       </div>
    )
  }
}
Prompt.propTypes = {
  words: PropTypes.object,
};

export default Prompt;