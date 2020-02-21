import React, { Component } from "react";
import {connect} from "react-redux"
function Result({marks,totalQuestion}){
    return(
        <div>
            {
            marks*100/totalQuestion>60?
            <h1>Congratulation ! You are Passed</h1>:
            <h1>Sorry ! you are failed</h1>
            }
        </div>
    )
}
function mapStateToProps({marks}){
return {marks}
}

export default connect(mapStateToProps)(Result);