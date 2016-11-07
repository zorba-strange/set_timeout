const {
    ADD_PROJECT
}                                       = require('../actions/ACTION_TYPES');
const Immutable                         = require('immutable');


const uid = () => Math.random().toString(34).slice(2);


const projectSeeds = Immutable.Map({
    projects: [
        {
           projectName: 'Seed Project',
            id: uid(),
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
        default:
            return state;
    }
}

export default setTimeoutApp;
