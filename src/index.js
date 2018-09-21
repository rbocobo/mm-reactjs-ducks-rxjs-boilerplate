import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { Provider } from 'react-redux';
import rootReducer from './reducers/root';
import { rootEpic } from './epics';

import registerServiceWorker from './registerServiceWorker';

const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

const AppWithProvider = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(AppWithProvider, document.getElementById('root'));
registerServiceWorker();
