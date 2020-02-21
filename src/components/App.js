import React,{Component} from 'react';
import {connect} from "react-redux";
import {
  Question,
  Header,
  Footer,
  Result
} from "./index"
class App extends Component{



  state={
    questionNo:0,
    isNext:false
  }
  next=()=>{
    this.setState({isNext:!this.state.isNext})
  }
  nextQuestion=()=>{
    this.setState({questionNo:1+this.state.questionNo})
  }

  render(){
    const {questions}=this.props;
    if(this.state.questionNo<questions.length){

      return(
        <div>
          <Header
          totalQuestion={questions.length}
          currentQuestion={this.state.questionNo}
          />
          <Question 
          nextQuestion={this.nextQuestion} 
          question={questions[this.state.questionNo]}
          currentQuestion={this.state.questionNo}
          totalQuestion={questions.length}
          difficulty={questions[this.state.questionNo].difficulty}
          next={this.next}
          isNext={this.state.isNext}
          type={questions[this.state.questionNo].type}
          />
          <Footer 
          totalQuestion={questions.length}
          currentQuestion={this.state.questionNo}
          />
          
  
        </div>
      )

    }
    else{
      return <Result
      totalQuestion={questions.length}
      />
    }
    
  }
}

function mapStateToProps({questions}){
  return{
    questions
  }
}

export default connect(mapStateToProps)(App)