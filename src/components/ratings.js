import React from "react";
import "./ratings.css"
function Rating(props){
    const {difficulty}=props
    return(
        <div 
        className={difficulty==="easy" ? difficulty
            : difficulty==="medium"? difficulty
            : difficulty==="hard" ? difficulty
            : null}
        >
            
            <i className="fa fa-star hards mediums easys" aria-hidden="true"></i>
            <i className="fa fa-star hards mediums" aria-hidden="true"></i>
            <i className="fa fa-star hards" aria-hidden="true"></i>
        </div>
    )
}

export default Rating;