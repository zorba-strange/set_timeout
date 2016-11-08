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
                    sessionId: 1,
                    sessionInfo: "This some info about this session",
                    sessionTime: 45
                }
            ]
        },
        {
            projectName: 'Second Seed Data',
            id: 2,
            sessions: [
                {
                    sessionId: 2,
                    sessionInfo: "Here is another piece of data",
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
            return Object.assign({}, state, {
                projects: Immutable.fromJS(state).get('projects').map(project => {
                    console.log('sessions firing', project.id, action.id);
                    if( project.id == action.id ){
                        console.log('reducer', project.sessions);
                        return Object.assign({}, project, {
                            sessions: project.sessions
                        })
                    }
                })
            })

        default:
            return state;
    }
}

export default setTimeoutApp;
