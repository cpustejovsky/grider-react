import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay'

export default class App extends Component {
  render() {
    return (
      <SeasonDisplay></SeasonDisplay>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));