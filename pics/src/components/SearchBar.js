import React, { Component } from 'react'

export default class SearchBar extends Component {
  //on + [name of element] + [event we're watching for]
  state = {
    term: ""
  };
  onFormSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form
          className="ui form"
          //arrow functions automatically binds `this`
          onSubmit={(e) => this.onFormSubmit(e)}
        >
          <div className="field">
            <label>Image Search:</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value })
              }}
            />
          </div>
        </form>
      </div>
    )
  }
}
