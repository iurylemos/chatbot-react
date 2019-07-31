//Esse index vai ser para configurar a store
//Store é o controle de estado da aplicação.
import {createStore} from 'redux';

import reducers from './reducers';

//o createStore ele espera recebe os reducers
const store = createStore(
    reducers,
    //chamada do plugin
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store