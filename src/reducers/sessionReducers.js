const {
    ADD_SESSION,
    NEW_SESSION_INFO,
    OPTION_PROJECT_NAME,
}                                   = require('../actions/ACTION_TYPES');
const Immutable                     = require('immutable');


export const sessionReducer = (state=Immutable.fromJS({
    sessions: []
}), action) => {
    switch( action.type ){
        case NEW_SESSION_INFO:
            return state.set('inputSessionInfo', action.inputSessionInfo)

        case OPTION_PROJECT_NAME:
            return state.set('optionProjectName', action.projectName)

        case ADD_SESSION:
            return  state.updateIn(['sessions'], 'not-set-value', (sessions) => {
                return (
                    sessions.push(Immutable.fromJS({
                        projectName: action.optionProjectName,
                        sessionInfo: action.inputSessionInfo,
                    }))
                )
            })
        default:
            return state
    }
}
