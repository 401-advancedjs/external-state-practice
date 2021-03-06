import React from 'react';

export default class Form extends React.Component{

  handleChange = event => {
    event.preventDefault();
    let name = event.target.value;
    this.props.handleSubmit(name);
  }

  render(){
    return (
      <form>
        <label>
          Name:
        </label>
        <input type="text" onChange={ this.handleChange } className="name"></input>
        <input type="submit" onClick={ this.props.handleCount } className ="submitButton"></input>
      </form>
    );
  }
}
