import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0); 
    const handleClick = () => { 
    setCount(count + 1); 
    }; 
    return <button onClick={handleClick}>{count}</button>; 
}

// Задание: Попробуйте переписать классовый компонент Counter, используя хуки:
// class Counter extends Component {
//   state = {
//     count: 0
//   };
//   handleClick = () => {
//     this.setState(({ count }) => ({
//       count: count + 1
//     }));
//   };
//   render() {
//     return <button onClick={this.handleClick}>{this.state.count}</button>;
//   }
// }