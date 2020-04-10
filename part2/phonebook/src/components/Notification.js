import React from 'react'

const Notification = ({ message, error }) => {
    if(message === null){
        return null
    }
    let style = {
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }
    if(error){
        style['color'] = 'red'
    }
    else{
        style['color'] = 'green'
    }
    return (
        <div style={ style }>
            { message }
        </div>
    )
}
export default Notification