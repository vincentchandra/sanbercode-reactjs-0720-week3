// const { Component } = require("react");
import React, {Component} from 'react'
class Timer extends Component{
    constructor(props){
        super(props)
        this.state = {
            time:0,
            jam:""

        }
    }
    componentDidMount(){
        if(this.props.start !== undefined){
            let d = new Date();
            let n = d.toLocaleTimeString();
            this.setState({time: this.props.start, jam:n})
        } 
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    tick(){
        var d = new Date();
        var n = d.toLocaleTimeString();
        this.setState({
            time:this.state.time - 1,
            jam: n
        })
    }
    componentDidUpdate(prevProps){
        if(this.props.userID !== prevProps.userID){
            this.fetchData(this.props.userID)
        }
    }
    render(){
        return(
            <>
                {this.state.time>=0 &&(
                    <div style={{margin:"0 auto", width:"600px",fontSize:"10px",overflow:"auto"}}>
                        <h1 style={{float:"left"}}>sekarang jam: {this.state.jam}</h1>
                        <h1 style={{float:"right"}}>hitung mundur: {this.state.time}</h1>
                    </div>
                )  
                }    
            </>
        )
    }
}

export default Timer;