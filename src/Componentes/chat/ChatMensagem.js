import React, {Component} from 'react';
//utilizando o reactstrap
import {InputGroup, Input, InputGroupAddon, Button} from 'reactstrap';
//Importando conexão do ChatMensagem no Redux
//E para utilizar o connect basta eu utilizar ele no export
import {connect} from 'react-redux';

import {enviarMensagem} from './../../store/actions/chat';

class ChatMensagem extends Component {
    constructor(props) {
        super(props)

        //Com isso da função vou poder ter acesso ao botão e viceversa
        this.inputEnviaTexto = this.inputEnviaTexto.bind(this)
    }

    //Metodo que envia o texto
    //Ou seja ele pega o texto que é colocado no campo
    //Acessa aqui e cria um evento para saber onde está digitando
    //Vou imprimir com o target que vai tipo dizer quem é o evento
    //que no caso foi o Input de texto
    //E colocando o value eu pego o valor
    inputEnviaTexto(e) {
        //Verificar se ele clicou o enter
        if(e.keyCode === 13) {
            console.log(e.target.value) 
            this.props.enviaTexto(e.target.value)
            e.target.value = '';
        }
    }
        

    render() {
        return (
            <div className='chat-mensagem'>
                <hr/>
                <InputGroup>
                    <Input onKeyDown={this.inputEnviaTexto} placeholder='Digite sua mensagem:'/>
                    <InputGroupAddon addonType='append'>
                        <Button color='success'>Enviar</Button>
                    </InputGroupAddon>
                </InputGroup>
            </div>
        )
    }
}

//Primeiro parâmetro é map state to props
//Ele pega tudo que está no estado da aplicação
//E coloca dentro do props desse componente que é botão enviar

//Crio a constante que vai ter o dispatch, ele retorna um objeto.
//Nesse objeto eu vou ter o enviaTexto, que vai precisar da mensagem
//e ele vai chamar o dispatch que vai chamar uma ação
//Que é a ação enviaMensagem
const mapDispatchToProps = (dispatch) => {
    //Com isso eu posso acessar o envia texto com o props
    //e passo a mensagem para o enviar mensagem.
    return {
        enviaTexto: (msg) => dispatch(enviarMensagem(msg))
    }
}

//Como estou enviando coloco no segundo paramêtro
export default connect(null, mapDispatchToProps)(ChatMensagem)