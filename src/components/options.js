import React,{Component} from "react";
import {Option} from "./index"
import "./options.css";
class Options extends Component{




    render() {

        const {correct_answer,incorrect_answers,type,answer,hidden,hide,next}=this.props;
        var option=incorrect_answers;
        var randomNo=0;
        if(type==="multiple"){
            randomNo=Math.floor(Math.random() * 2) + 1;
        }
        else{
            randomNo=Math.floor(Math.random() * 1) + 1;
        }
        if(option.length<4){
            option.splice(randomNo+1,0 ,correct_answer);
        }
        
        return (
            <div className={`options ${hide?null:"hidden"}`}>
                {option.map((op,i)=>{
                    return <Option hidden={hidden} next={next}  key={op+i} answer={answer} op={op}/>
                })}
            </div>
        );
    }
}

export default Options;