import React from 'react'
export default class Test extends  React.Component{
  constructor(props){
    super(props);
    this.state = {react: false, redux: false, mobox: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event){
    this.setState({[event.target.name]:event.target.checked})

  }
  handleSubmit(event){

    alert("You pick");
    event.preventDefault();

  }
  render(){
    return(
      <form onSubmit = {this.handleSubmit}>
        <label>
          React
          <input
            type="checkbox"
            name="react"
            value="react"
            checked={this.state.react}
            onChange={this.handleChange}
          />
          Redux
          <input
            type="checkbox"
            name="redux"
            value="redux"
            checked={this.state.redux}
            onChange={this.handleChange}
          />
          Mobox
          <input
            type="checkbox"
            name="mobox"
            value="mobox"
            checked={this.state.mobox}
            onChange={this.handleChange}
          />
        </label>
        <input type = "submit" value="Submit"/>
      </form>

    )
  }
}
