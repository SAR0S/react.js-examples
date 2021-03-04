import React, { Component } from 'react';

// function Hello() {
//     return (
//         <div>Hello {props.name}</div>
//     )
// }

const Hello = ({name}) => {
    return (
        <div>Hello {name}</div>
    )
}

// 또는 이런 식으로 {}를 생략할 수도 있다라띠리빰
// const Hello = ({name}) => {
//     <div>Hello {name}</div>
// }


export default Hello;