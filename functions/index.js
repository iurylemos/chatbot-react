const functions = require('firebase-functions');
const AssistantV1 = require('watson-developer-cloud/assistant/v1');
//arquivo dotenv
require('dotenv').config()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//expondo um endpoint helloworld, e quando eu chama-lo
//em um request get ou post, ele recebe o request e devolve o response
/*que é uma mensagem.
 exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Olá chatBot");
 }); */

 const chatbot = new AssistantV1({
    version: '2018-07-10'
  });

 var workspace = process.env.WORKSPACE_ID;

 //EXPOR A URL PARA SER CHAMADA

 exports.conversa = functions.https.onRequest((req, res) => {
    //utilizando o watson aqui dentro, pelo payload.
    //para ter o controle das coisas
    var payload = {
        workspace_id: workspace,
        context: req.body.context || {},
        input: req.body.input || {}
    };

    //passando o payload para dentro do watson
    chatbot.message(payload, function (erro, data) {
        if(erro) {
            return res.status(erro.status || 500).json(erro);
        }
        //assim que eu tiver a resposta do watson
        //eu passo o payload original
        //e qual foi a resposta para a função trataResposta

        return res.json(trataResposta(payload, data));
    });
 });

 function trataResposta(input ,resposta) {
    var responseText = null;
    //posso pegar a inteção
    console.log('watson disse: ', resposta);
    if (!resposta.output) {
        resposta.output = {};
    } else {
        return resposta;
    }
    resposta.output.text = responseText;
    return resposta;
 }
