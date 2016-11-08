const React               = require('react');
const { render }          = require('react-dom');
const { 
    createStore,
    applyMiddleware 
}                         = require('redux');
const thunk               = require('redux-thunk').default;
const { 
    Router,
    Route,
    browserHistory 
}                         = require('react-router');
const { Provider }        = require('react-redux');
const setTimeoutApp       = require('./reducers/project_reducers.js').default;
const App                 = require('./components/App').default;
const ProjectSessions     = require('./components/projects/sessions/ProjectSessions').default;

const store = createStore(
    setTimeoutApp,
    applyMiddleware(thunk)
);

console.log('running');

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} />
            <Route path="/:index/:id" component={ProjectSessions} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
