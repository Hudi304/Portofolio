interface Action {
    type: string
    payload: any
}
const defaultState = {
    moveChatLeft: false
}

export const PortofolioReducer = (state = defaultState, action: Action) => {
    switch (action.type) {
        case 'MOVE_CHAT_LEFT':
            console.log('REDUCER ', action.payload)
            return { ...state, moveChatLeft: action.payload }
        default:
            return state
    }
}
