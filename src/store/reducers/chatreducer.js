//Para que o state inicialize eu preciso inicializar ele
const INITIAL_STATE = {
    mensagens: []
}


//Reduce recebe a actions e vai ter que devolver um novo estado
//Para colocar na store

export default function chat(state = INITIAL_STATE, action = []) {
    //ele recebe um estado e ação
    //e retorna um novo estado.
    if(action.type === 'ENVIAR_MENSAGEM') {
        return {
            //Estou devolvendo um objeto novo, 
            //que tem uma cópia das mensagens que estão no estado
            //com o ...
            //e adicionando o action.payload com a mensagem atual
            mensagens: [...state.mensagens, action.payload.mensagem]
        }
    }else {
        return state
    }
}