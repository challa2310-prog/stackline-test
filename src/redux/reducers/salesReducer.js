const salesReducer = (state=[],action)=>{
    switch(action.type){
        case "LOAD_SALES_SUCCESS": return action.payload;
        default : return state;
    }
}

export default salesReducer;