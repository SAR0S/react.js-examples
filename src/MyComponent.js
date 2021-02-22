import React, { Component } from 'react';

class MyComponent extends Component {
    static defaultProps = {
        name : 'default name'
    }
    render() {
        return (
            <div>
                My name is {this.props.name}.
            </div>
        );
    }
}

// MyComponent.defaultProps = {
//     name: 'default name'
// }

export default MyComponent;