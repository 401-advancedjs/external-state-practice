import React from 'react';

import Form from './Form.js'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      name: '',
    };
  }

  handleSubmit = name => {
    this.setState({ name });
  }

  handleCount = event => {
    event.preventDefault();
    let count = this.state.count + 1;
    this.setState({ count });
  }

  render() {
    return (
      <React.Fragment>
        <Form handleSubmit = { this.handleSubmit } handleCount = { this.handleCount }/>
        <div># of clicks: { this.state.count }</div>
        <div>Your name is: { this.state.name }</div>
      </React.Fragment>
    );
  }
}