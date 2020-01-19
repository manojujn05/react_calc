import React, { Component } from 'react'

export default class ResultComponent extends Component {
    render() {
        let result = this.props.result;
        return (
        <div className="result">
            <p>{result}</p>
        </div>
        )
    }
}
