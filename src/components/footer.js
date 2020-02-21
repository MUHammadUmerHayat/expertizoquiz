import React, { Component } from "react";
import {connect} from "react-redux"
import "./footer.css"

class Footer extends Component{
    render(){
        const {
            marks,
            totalQuestion,
            currentQuestion
        }=this.props;
        const  per=marks*100/totalQuestion;
        
        
        const quesLength=(currentQuestion+1)*100/totalQuestion;
        const remaingQuestion=totalQuestion-(currentQuestion)
        const maxScore=(marks+remaingQuestion)*100/totalQuestion

        return(
            <div>
                <div className="score">
                <div className="scores">
                    {`score: ${per}%`}
                </div>
                <div className="maxscore">
                    {`Maximum Score: ${maxScore}`}
                </div>
                </div>
                <div className="bar">
                    <div style={
                        {
                            height: "40px",
                            width:`${per}%`,
                            backgroundColor:"black",
                        }
                    }>  
                    </div>
                    <div style={
                        {
                            height: "40px",
                            width: `${quesLength}%`,
                            backgroundColor:"grey",
                            position:"absolute",
                            zIndex:-1
                        }
                    }>  
                    </div>
                    </div>
            </div>
        )
    }
}
function mapStateToProps({marks}){
    return {marks}
}
export default connect(mapStateToProps)(Footer);