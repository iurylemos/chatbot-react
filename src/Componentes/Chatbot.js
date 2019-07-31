import React, {Component} from 'react';
import './chat/chatbot.css';
import ChatConversa from './chat/ChatConversa';
import ChatHeader from './chat/ChatHeader';
import ChatMensagem from './chat/ChatMensagem';

class Chatbot extends Component {
    render(){
        return (
            <div className='chatbot'>
                <div className='chat-conteudo'>
                    <ChatHeader></ChatHeader>
                    <ChatConversa></ChatConversa>
                    <ChatMensagem></ChatMensagem>
                </div>
            </div>
        )
    }
}

export default Chatbot