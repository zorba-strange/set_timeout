const {
    ADD_PROJECT,
    INPUT_PROJECT_NAME,
    RESET_INPUT_PROJECT_NAME
}                                       = require('../actions/ACTION_TYPES');

const Immutable                         = require('immutable');

const uid = () => Math.random().toString(34).slice(2);

export const projectReducers = (state=Immutable.fromJS({
    projects: []
}), action) => {
    switch( action.type ){
        case INPUT_PROJECT_NAME:
            return state.set('newProject', action.projectName)

        case ADD_PROJECT:
            return state.updateIn(['projects'], 'not-set-value', (projects) => {
                return (
                    projects.push(Immutable.fromJS({
                        projectName: action.projectName,
                        id: uid(),
                    }))
                )
            })

        case RESET_INPUT_PROJECT_NAME:
            return state.set('newProject', action.projectName)

        default:
            return state

    }
}
