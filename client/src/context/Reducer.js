/* eslint-disable*/ 
const Reducer = (state,action)=> {
    switch(action.type) {
        case "LOGIN_START": 
        return {
            user:null,
            isFatching:false,
            error:false
        };
        case "LOGIN_SUCCESS": 
        return {
            user:action.payload,
            isFatching:false,
            error:false
        };
        case "LOGIN_FAILURE": 
        return {
            user:null,
            isFatching:false,
            error:true
        };
        case "LOGOUT": 
        return {
            user:null,
            isFatching:false,
            error:false
        };
        default:
            return state;
    }
}

export default Reducer;