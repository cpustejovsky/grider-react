import React, { Component } from 'react'
import VideoItem from './VideoItem';

export default class VideoList extends Component {
    render() {
        return (
            <div>
                <h1>Video List</h1>
                <ul>
                    <li><VideoItem/></li>
                    <li><VideoItem/></li>
                    <li><VideoItem/></li>
                    <li><VideoItem/></li>
                </ul>
            </div>
        )
    }
}
