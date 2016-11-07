const React               = require('react');
const { render }          = require('react-dom');
const { createStore }     = require('redux');
const { Provider }        = require('react-redux');
const setTimeoutApp       = require('./reducers/project_reducers.js').default;
const App                 = require('./components/App').default;


const store = createStore(setTimeoutApp);
console.log('running');

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
