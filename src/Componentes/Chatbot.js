import React, {Component} from 'react';
import ChatConversa from './chat/ChatConversa';
import ChatHeader from './chat/ChatHeader';
import ChatMensagem from './chat/ChatMensagem';

class Chatbot extends Component {
    render(){
        return (
            <div className='chatbot'>
                <ChatHeader></ChatHeader>
                <ChatConversa></ChatConversa>
                <ChatMensagem></ChatMensagem>
            </div>
        )
    }
}

export default Chatbot