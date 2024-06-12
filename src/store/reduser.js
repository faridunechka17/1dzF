const initialState = {
    round: 0
}

export default function reduser (state = initialState, action){
    if (action.type === 'START'){
        return{...state, round: state.round + 1}
    }else if (action.type === 'SET'){
        return{...state, round: state.round + 10}
    }else if (action.type === 'RESET'){
        return{...state,round: 0}
    }else if (action.type === 'RUN'){
        return{...state, round: Math.max(state.round -1, 0)}
    }else if (action.type === 'OPEN'){
        return{...state, round: Math.max(state.round -10, 0)}
    }
    return state
}