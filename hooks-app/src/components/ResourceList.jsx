import React, { Component } from 'react'
import axios from 'axios';

export default class ResourceList extends Component {
    state = {
        resources: []
    }
    async componentDidMount(){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
        this.setState({ resources: response.data })
    }
    async componentDidUpdate(){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
        this.setState({ resources: response.data })
    }
    render() {
        console.log(this.state.resources)
        return (
            <div>
                {this.props.resource}
                {this.state.resources.length}
            </div>
        )
    }
}
