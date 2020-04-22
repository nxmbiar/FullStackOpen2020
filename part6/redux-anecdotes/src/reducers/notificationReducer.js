export const setMessage = (message, timeout) => {
    return async dispatch => {
        dispatch({
            type: 'SET_NOTIF',
            message
        })
        setTimeout(() => {
            dispatch({
                type: 'REMOVE_NOTIF'
            })
        }, timeout*1000)
    }
}

export const removeMessage = () => {
    return {
        type: 'REMOVE_NOTIF'
    }
}

const notificationReducer = (state=null, action) => {
    switch(action.type){
        case 'SET_NOTIF':
            return action.message
        case 'REMOVE_NOTIF':
            return null
        default:
            return state
    }
}

export default notificationReducer