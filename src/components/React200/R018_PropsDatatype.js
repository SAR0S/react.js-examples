import React, { Component } from 'react';
import datatype from 'prop-types';

class R018_PropsDatatype extends Component {
    render() {
        let {
            String, Number, Boolean, Array, Object, Json, Function
        } = this.props
        return (
            <div style={{padding: "0px"}}>
                <p>StringProps: {String}</p>
                <p>NumberProps: {Number}</p>
                <span>BooleanProps: {Boolean.toString()}</span>
                <p>ArrayProps: {Array.toString()}</p>
                <p>Object JsonProps: {JSON.stringify(ObjectJson)}</p>
                
            </div>
        );
    }
}

export default R018_PropsDatatype;