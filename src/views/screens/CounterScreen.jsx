import React from 'react'

// const CounterScreen = () => {
//     return (
//         <div>
//             <h1>Hello World!</h1>
//         </div>
//     )
// }

class CounterScreen extends React.Component{
    render() {
        return (
            <div>
                <h1>{this.props.kota}</h1>
            </div>
        )
    }
}

export default CounterScreen