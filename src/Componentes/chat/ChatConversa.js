import React, {Component} from 'react';
//Badge que é para dizer quem digitou no momento
import {Alert, Badge} from 'reactstrap';
//Conectando ao redux
import {connect} from 'react-redux';

class ChatConversa extends Component {

    renderMensagem(msg, author) {
        //Ele recebe a mensagem e imprime
        return (
            <div>
                {
                    author == 'user' && <span>
                    <Badge color='primary'>
                        Você disse:
                    </Badge>

                    <Alert color='primary'>
                    {msg}
                    </Alert>
                    </span>
                }

                {
                    author == 'chatbot' && <span>
                        <Badge color='warning'>
                            ChatBot disse:
                        </Badge>

                        <Alert color='warning'>
                        {msg}
                        </Alert>
                    </span>
                }

            </div>
            
        )
    }

    render() {
        return (
            <div className='chat-conversa'>

            {
                this.props.mensagens.map(key => {
                    return this.renderMensagem(key, 'user')
                })
            }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        //Aqui são as props que eu tenho acesso 
        mensagens: state.chat.mensagens
    }
}

//Como estou recebendo vou colocar no primeiro parametro
export default connect(mapStateToProps, null)(ChatConversa)