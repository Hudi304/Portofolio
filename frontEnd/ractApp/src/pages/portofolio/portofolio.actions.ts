export const PORTOFOLIO_ACTIONS = {
    MOVE_CHAT_LEFT: 'MOVE_CHAT_LEFT'
}

export const setMoveChatLeft = () => {
    console.log('ACTION : MOVE_CHAT_LEFT')
    return {
        type: 'MOVE_CHAT_LEFT',
        payload: { moveChatLeft: true }
    }
}
