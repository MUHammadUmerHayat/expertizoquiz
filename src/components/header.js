import React, { Component } from "react";

class Header extends Component{
    render(){
        const {currentQuestion,totalQuestion}=this.props;
        const width=(currentQuestion+1)*100/totalQuestion;
        return(
            <div>
                <div style={{
                    height:'40px',
                    backgroundColor:"darkgrey",
                    width:width+"%"
                }}
                >   
                </div>
            </div>
        )
    }
}

export default Header;