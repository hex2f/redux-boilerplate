import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <p>The number is currently {this.props.number}</p>
                <Link to="/editor">
                    <button style={{ marginTop: '12px' }}>Open Editor</button>
                </Link>
            </div>
        )
    }
}
