import React from 'react'

class LifecycleScreen extends React.Component{
    state = {
        username: "",
        time: new Date(),
    }

    // urutan life cycle
    // WillMount -> Render -> DidMount
    // DidMount (dijalankan saata setelah render pertma, jika ada sateState maka render 2 kali)
    componentDidMount() {
        this.timer = setInterval(() => this.triggerClock(), 100) 
    }

    triggerClock = () => {
        this.setState({time: new Date()})
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    // sebenarnya tidak boleh digunakan, akan muncul sebelum
    // componentWillMount() {
    //     alert("component Will Mount")
    // }

    //jangan stateState di dalam component did update (program rusak karena looping forever)
    // componentDidUpdate() {
    //     alert("anda mengubah state")
    // }

    render() {
        return (
            <div>
                <h1>LifecycleScreen</h1>
                <h2>{this.state.time.toLocaleTimeString()}</h2>
                {/* <h2>Welcome, {this.state.username}</h2> */}
                <input type="text" onChange={(e) => this.setState({ username: e.target.value})}/>
            </div>
        )
    }
}

export default LifecycleScreen