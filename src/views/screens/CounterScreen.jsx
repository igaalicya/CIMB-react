import React from 'react'

// const CounterScreen = () => {
//     return (
//         <div>
//             <h1>Hello World!</h1>
//         </div>
//     )
// }

class CounterScreen extends React.Component{
    
    
    state = {
        counter1: 1,
        counter2: 1,
        counter3: 1,
    }

    render() {
        return (
            <div>
                {/* <h1>{this.props.kota}</h1> */}
                <h1>Hello World</h1>
                <div className="row">
                    <div className="col-md-4">
                        <h1>counter 1 = {this.state.counter1}</h1>
                        <input 
                            className="btn btn-danger" 
                            type="button" 
                            value="-" 
                            onClick={() => this.setState({counter1: this.state.counter1 - 1})}
                        />
                        <input 
                            className="btn btn-primary" 
                            type="button" 
                            value="+" 
                            onClick={() => this.setState({counter1: this.state.counter1 + 1})}
                        />
                    </div>
                    <div className="col-md-4">
                        <h1>counter 2 = {this.state.counter2}</h1>
                        <input 
                            className="btn btn-danger" 
                            type="button" 
                            value="-" 
                            onClick={() => this.setState({counter2: this.state.counter2 - 1})}
                        />
                        <input 
                            className="btn btn-primary" 
                            type="button" 
                            value="+" 
                            onClick={() => this.setState({counter2: this.state.counter2 + 1})}
                        />
                    </div>
                    <div className="col-md-4">
                        <h1>counter 3 = {this.state.counter3}</h1>
                        <input 
                            className="btn btn-danger" 
                            type="button" 
                            value="-" 
                            onClick={() => this.setState({counter3: this.state.counter3 - 1})}
                        />
                        <input 
                            className="btn btn-primary" 
                            type="button" 
                            value="+" 
                            onClick={() => this.setState({counter3: this.state.counter3 + 1})}
                        />
                    </div>
                </div>
                <div>
                    <h2>All State</h2>
                    <input 
                        className="btn btn-danger" 
                        type="button" 
                        value="-" 
                        onClick={() => this.setState({counter1: this.state.counter1 - 1, counter2: this.state.counter2 - 1, counter3: this.state.counter3 - 1})}
                    />
                    <input 
                        className="btn btn-primary" 
                        type="button" 
                        value="+" 
                        onClick={() => this.setState({counter1: this.state.counter1 + 1, counter2: this.state.counter2 + 1, counter3: this.state.counter3 + 1})}
                    />
                    <input 
                        className="btn btn-primary" 
                        type="button" 
                        value="Reset" 
                        // gabisa karena fngsi otomatis ke trigger
                        // onClick={this.setState({counter: 2})}
                        //caranya pake arrow function
                        onClick={() => this.setState({counter1: 0, counter2:0, counter3:0})}
                    />
                </div>
            </div>
        )
    }
}

export default CounterScreen