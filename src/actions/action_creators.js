const { 
    ADD_PROJECT
}                                 = require('./ACTION_TYPES');


export const addProject = (projectName) => {
    return {
        type: ADD_PROJECT,
        projectName
    }
}
