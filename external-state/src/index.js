import React from 'react';
import ReactDOM from 'react-dom';


class Form extends React.Component{

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
        <input type="text" onChange={ this.handleChange }></input>
        <input type="submit" onClick={ this.props.handleCount }></input>
      </form>
    );
  }
}


class App extends React.Component {
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

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
