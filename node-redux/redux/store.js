const {createStore, applyMiddleware} = require('redux');
const {composeWithDevTools} = require('redux-devtools-extension');
const createNodeLogger = require('redux-node-logger');
const {reduxReducers} = require('./reducers');
const store = createStore(reduxReducers, composeWithDevTools(applyMiddleware(createNodeLogger({
    downArrow: '▼',
    rightArrow: '▶',
    messageColor: 'bright-yellow',
    prevColor: 'bright-blue',
    actionColor: 'white',
    nextColor: 'green',
    predicate: ''
}))));

module.exports = {store};