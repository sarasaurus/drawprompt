import React from 'react';
import { graphql } from "gatsby";
import PropTypes from 'prop-types';
import autoBind from '../utils/utils';


// const storageKey = 'storedWord';

class Prompt extends React.Component {
  constructor(props) {
    super(props); // initialises 'this'
    console.log('data', this.props.data)
    autoBind.call(this, Prompt);
  }
  // handleUpdate () {
  //   console.log('ADJ', this.props.adj);
  //   let monster = `${localStorage.getItem('adj')}, ${localStorage.getItem('noun')}, ${localStorage.getItem('verb')}`;
  //   return monster;
  // }


  
  render () {
    const word = this.props.words;
    console.log('props in prompt', word.done);
    // console.log('storage key', storageKey);
    // console.log('local storage', localStorage.getItem(storageKey));

    //TODO: modify function to retrieve from local storage

    // const listWordsJSX = (props) => {
    //   const getRandomInt = (max) => {
    //     return Math.floor(Math.random() * Math.floor(max));
    //   }
    //   const getPrompt = (adj, noun, verb) => {
    //     console.log(`ADJ ${adj.length}, NOUN ${noun.length}, VERB ${verb.length}`)
    //     const max = Math.min(adj.length, noun.length, verb.length);
    //     const index = getRandomInt(max);
    //     return `DRAW a ${adj[index]}, ${noun[index]}, ${verb[index]}`;
    //   }
     

    //   // this code is for gettting from the state with array
    //   // if (props.done && props.adj.length > 1) {
    //   //   return <p>{getPrompt(props.adj, props.noun, props.verb)}</p>;
    //   // } else if (props.done && props.adj.length <= 1){
    //   //   return <p>Draw a {this.props.words.done ? `${word.adj}, ` :  '. . . ' } 
    //   //  {this.props.words.done ? `${word.noun}, ` : ''} 
    //   //  {this.props.words.done ? `${word.verb}!` : '' }</p> 
    //   // } return <p>'add words to get started</p>
      
    // }
    return (
    
      <div>
        <h1>Enter words above</h1>
       
       {/* // this code is for retrieving from state, i dont use the function */}
       <p>Draw a {this.props.words.done ? `${word.adj}, ` :  '. . . ' } 
       {this.props.words.done ? `${word.noun}, ` : ''} 
       {this.props.words.done ? `${word.verb}!` : '' }</p>
       {/* {listWordsJSX(word)} */}
  {/* this code is fro getting rom local storage */}
       {/* <p>Draw a {localStorage.getItem(storageKey) ? `${JSON.parse(localStorage.getItem(storageKey)).adj}, ` :  '. . . ' } 
       {localStorage.getItem(storageKey) ? `${JSON.parse(localStorage.getItem(storageKey)).noun}, ` : ''} 
       {localStorage.getItem(storageKey) ? `${JSON.parse(localStorage.getItem(storageKey)).verb}!` : '' }</p>  */}
           {/* <table>
      <thead>
        <tr>
          <th>relativePath</th>
          <th>prettySize</th>
          <th>extension</th>
          <th>birthTime</th>
        </tr>
      </thead>
      <tbody>
        {this.props.data.allFile.edges.map(({ node }, index) => (
          <tr key={index}>
            <td>{node.relativePath}</td>
            <td>{node.prettySize}</td>
            <td>{node.extension}</td>
            <td>{node.birthTime}</td>
          </tr>
        ))}
      </tbody>
    </table> */}

       </div>
    )
  }
}
Prompt.propTypes = {
  words: PropTypes.object,
};
export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`
export default Prompt;