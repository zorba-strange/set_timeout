const {
    ADD_PROJECT,
    GET_PROJECT_SESSIONS
}                                       = require('../actions/ACTION_TYPES');
const Immutable                         = require('immutable');


const uid = () => Math.random().toString(34).slice(2);


const projectSeeds = Immutable.Map({
    projects: [
        {
           projectName: 'Seed Project',
            id: 1,
            sessions: [
                {
                    sessionId: uid(),
                    sessionInfo: "This some info about this session",
                    sessionTime: 45
                }
            ]
        }
    ]
});

const setTimeoutApp = (state=projectSeeds, action) => {
    console.log(state);
    switch( action.type ){

        case ADD_PROJECT:
            return console.log('adding a project');

        case GET_PROJECT_SESSIONS:
            console.log('get project sessions');
            return Object.assign({}, state, {
                sessions: state.projects.map(project => {
                    if( project.id == action.id ){
                        console.log('reducer', project.sessions);
                        return Object.assign({}, project, {
                            sessions: project.sessions
                        })
                    }
                    return sessions
                })
            })

        default:
            return state;
    }
}

export default setTimeoutApp;
