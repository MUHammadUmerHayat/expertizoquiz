import React, { Component } from "react";
import "./options.css";
class Option extends Component{

    state={
        seleted:false,
    }


    selete=()=>{
        this.setState({seleted:!this.state.seleted})
    }

    render() {
        const {op,answer,hidden,next}=this.props
        return (
            <div>
                    <div 
                    className="option"
                    id={this.state.seleted? "selected":null}
                    onClick={()=>{
                        this.selete();
                        answer(op);
                        hidden();
                        next();
                    }} 
                   >{op}
                    </div>
            </div>
        );
    }
}

export default Option