import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Viewer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: 1,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({amount: parseInt(event.target.value)});
    }
    
    render() {
        return (
            <div>
                <p>The number is currently {this.props.number}</p>
                <input type="number" value={this.state.amount} onChange={this.handleChange}/>
                <button onClick={()=>this.props.plus(this.state.amount)}>+</button>
                <button onClick={()=>this.props.minus(this.state.amount)}>-</button>
                <button onClick={()=>this.props.set(this.state.amount)}>=</button>
                <br />
                <Link to="/">
                    <button style={{ marginTop: '12px' }}>Close Editor</button>
                </Link>
            </div>
        )
    }
}
