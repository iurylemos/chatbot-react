//Ação de enviar a mensagem
//Ação que é uma função
export const enviarMensagem = (mensagem) => {
   return {
        //Para que seja uma função no redux eu preciso de um type
        //o type tem que ter o mesmo nome da função.. Geralmente
        //Typo é como ela é tratada
        type: 'ENVIAR_MENSAGEM',
        //payload é por que vou trafegar dados com a mensagem recebida
        payload: {mensagem}
    }
}