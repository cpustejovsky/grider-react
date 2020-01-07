import React, { Component } from 'react'

export default class SearchBar extends Component {
  //on + [name of element] + [event we're watching for]
  onInputChange(event) {
    console.log(event.target.value)
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" >
          <div className="field">
            <label>Image Search</label>
            <input type="text" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    )
  }
}
