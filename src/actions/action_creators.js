const { 
    ADD_PROJECT,
    GET_PROJECT_SESSIONS
}                                 = require('./ACTION_TYPES');


export const addProject = (projectName) => {
    return {
        type: ADD_PROJECT,
        projectName
    }
}

export const projectSessions = (id) => {
    return {
        type: GET_PROJECT_SESSIONS,
        id
    }
}
