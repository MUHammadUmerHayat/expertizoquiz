import React,{Component} from "react";
import {Rating,Options} from "./index";
import {connect} from "react-redux";
import {addScore} from "../actions";
import "./question.css"
class Question extends Component{

    state={
        mark:0,
        ans:"",
        hidden:true
    }
    answer=(term)=>{
        this.setState({ans:term})
        if(term===this.props.question.correct_answer){
            this.setState({mark:1},()=>{
                this.props.addScore(this.state.mark)
            })
        }else{
            this.setState({mark:-1})
        }
        
        
    }
    hidden=()=>{
        this.setState({hidden:!this.state.hidden})
    }

    render(){
        const {
            question,
            nextQuestion,
            totalQuestion,
            currentQuestion,
            difficulty,
            isNext,
            next,
            type
        }=this.props
        return(
            <div className="questioncontainer">
                <h1>{`Question ${currentQuestion+1} of ${totalQuestion}`}</h1>
                <p>{question.category}</p>
                <Rating 
                difficulty={difficulty}
                />
                <div className="question">{question.question}</div>
                <br/>
                <Options
                 incorrect_answers={question.incorrect_answers} 
                 correct_answer={question.correct_answer}
                 answer={this.answer}
                 hidden={this.hidden}
                 hide={this.state.hidden}
                 next={next}
                 type={type}
                 />
                 <br/>

                 {this.state.mark===1?<h2>Correct!</h2>:this.state.mark===-1?<h1>Sorry!</h1>:null}
                 
                {
                this.state.ans?
                <button 
                 className="btn"
                 onClick={()=>{
                     if(isNext){
                        nextQuestion();
                        this.setState({mark:0})
                        this.hidden();
                        next()
                     }

                 }}
                 >Next</button>:null }
                 
                 
            </div>
        )
    }
}


export default connect(null,{addScore})(Question);