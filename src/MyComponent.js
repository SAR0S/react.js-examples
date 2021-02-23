import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: 'default name'
    }

    static propTypes = {
        name: PropTypes.string, // name props 타입을 문자열로 설정
        age: PropTypes.number.isRequired // 필수적으로 존재햐아 하며 숫자임.
    }

    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }


    render() {
        return (
            <div>
                <p>My name is {this.props.name}.</p>
                <p>I am {this.props.age} years old</p>
                <p>number: {this.state.number}</p>
                <button onClick={() => {
                        this.setState({
                            number: this.state.number + 1
                        })
                    }
                }>plus</button>
            </div>
        );
    }
}

// MyComponent.defaultProps = {
//     name: 'PropTypes.string' // name props 타입을 문자열로 설정
// }

export default MyComponent;