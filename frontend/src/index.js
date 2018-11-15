import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import Root from './components/Root';
import AccountDragons from './components/AccountDragons';
import { fetchAuthenticated } from './actions/account';
import './index.css';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

store.dispatch(fetchAuthenticated())
    .then(() => {
        render(
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path='/' component={Root} />
                        <Route path='/account-dragons' component={AccoutDragons} />
                    </Switch>
                </Router>
            </Provider>,
            document.getElementById('root')
        );
    });
