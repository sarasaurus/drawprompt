import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../utils/utils';


class WordForm extends React.Component {
  constructor(props) {
    super(props);
    autoBind.call(this, WordForm);
    console.log('form props', this.props);
  }

  handleChange(event) {
    this.props.onChange(event.target);
  }
  handleSubmit(event) {
    event.preventDefault();
   this.props.onComplete(event.target);
   }

  render() {

    return (
      <div className ='form-container'>
      <form className='word-form' onSubmit={this.handleSubmit}>
      <input
            type='text'
            name='adj'
            // value={this.state.adj}
            placeholder='adjective'
            onChange={this.handleChange}
          />
          <input
          type='text'
            name='noun'
            // value={this.state.noun}
            placeholder='noun'
            onChange={this.handleChange}
          />
             <input
             type='text'
            name='verb'
            // value={this.state.verb}
            placeholder='verb'
            onChange={this.handleChange}
          />
      <button type='submit' value='submit'> submit </button>
      </form>
      </div>
    );
  }
}

WordForm.propTypes = {
  onComplete: PropTypes.func,
  onChange: PropTypes.func
};

export default WordForm;