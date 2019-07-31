import React from 'react';
import {Alert} from 'reactstrap';

const ChatHeader = props => {
    return (
        <div className='chat-header'>
            <Alert color='dark'>
                <h5>ChatBot</h5>
            </Alert>
        </div>
    )
}

export default ChatHeader