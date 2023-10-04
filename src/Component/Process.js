import React, { Component} from "react";
import Functional from './Functional';
import ClassCompo  from './ClassCompo';
class Process extends Component {
    constructor(){
        super();
        this.state={
            Card1:false,
            Card2: false
        };
    }
    render() {
        return (
                <div>
                    {this.state.Card2 && <ClassCompo/>}
                    <button class="btn" onClick={() => this.setState({ Card2: !this.state.Card2 })}>To see Styling in Class Component</button>
                    {this.state.Card1 && <Functional/>}
                    <button class="btn1" onClick={() => this.setState({ Card1: !this.state.Card1 })}>To see Styling in Functional ClassComponent</button>
                </div>
        );
    }
}
export default Process ;
 