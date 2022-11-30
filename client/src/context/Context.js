import {createContext,useEffect,useReducer} from 'react'; 
// import Reducer from './Reducer';
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

const INITIAL_STATE = {
    user:JSON.parse(localStorage.getItem('user')) || null,
    isFetching:false,
    error:false
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({children})=> {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
    useEffect(()=> {
        localStorage.setItem("user", JSON.stringify(state.user));
    },[state.user]);
    return(
        <Context.Provider value={
            {
                user:state.user,
                isFetching:state.isFatching,
                error:state.error,
                dispatch
            }
        }>
            {children}
        </Context.Provider>
    )
};
