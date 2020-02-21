
export default function marksReducer(state=0,action){
    
    switch(action.type){
        case "ADD_SCORE":
            return action.payload+state;
        default :
            return state

    }

}