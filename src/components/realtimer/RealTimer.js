import React, { Component, useState, useEffect } from "react";

export default class RealTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer_id : null,
            timmer: null,
            cycle_list : [60000, 30000, 10000, 5000],
            cycle : 1000,
            delay_sec : null,
            delay : 0,
        }
        let today = new Date();
        this.state.timmer = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    }

    printTime = () => {
        let new_date = new Date(); 
        let timmer = new_date.getHours() + ":" + new_date.getMinutes() + ":" + new_date.getSeconds(); 

        this.setState({
            timmer: timmer,
        });
    }
    
    startClock = () => {
        this.printTime();
        let interval_id = setInterval(()=>{
            this.printTime();
        },this.state.cycle);
        this.setState({
            timer_id: interval_id
        });
    }

    stopClock = () => {
        if(this.state.timer_id !== null) {
            clearInterval(this.state.timer_id);
        }
        if(this.state.delay_sec !== null) {
            clearInterval(this.state.delay_sec);
        }
    }

    setCycle = (e) => {

        //TODO 指定

        this.setState({
            cycle: e.target.id,
            delay: (e.target.id/1000)
        });

        // 時間の表示 -- リアルタイム
        let interval_sec = setInterval(()=>{
            this.getDelay();
        }, 1000);

        this.setState({
            delay_sec: interval_sec
        });
    }

    getDelay = () => {
        let delay = this.state.delay;
        delay--;

        if (delay <1) {
            this.printTime();
            delay = (this.state.cycle/1000);
        }

        this.setState({
            delay: delay,
        })
        
    }
    
        
    render() {
        return (
            <div>
                <div className="print-time" id="result">{this.state.timmer}</div>

                <button value="start" onClick={this.startClock}>start</button>
                <button value="end" onClick={this.stopClock}>end</button>

                <div class="text">
                    select&nbsp;
                    <span className="update-seconds">更新まで{this.state.delay}秒</span>
                </div> 
                <ul class="option-list"> 
                    <li id={this.state.cycle_list[0]} onClick={this.setCycle}>
                        60秒
                    </li>
                    <li id={this.state.cycle_list[1]} onClick={this.setCycle}>
                        30秒
                    </li> 
                    <li id={this.state.cycle_list[2]} onClick={this.setCycle}>
                        10秒
                    </li> 
                    <li id={this.state.cycle_list[3]} onClick={this.setCycle}>
                        5秒
                    </li>  
                </ul>

            </div>
            
        );
    }
}