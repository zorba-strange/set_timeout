const {
    ADD_PROJECT,
    GET_PROJECT_SESSIONS
}                                       = require('../actions/ACTION_TYPES');
const Immutable                         = require('immutable');


const uid = () => Math.random().toString(34).slice(2);


const projectSeeds = Immutable.fromJS({
    projects: [
        {
            projectName: 'Seed Project',
            // i wanted to use the uid() here but i found that if i make its id match is array index
            // it is really easy to find when i want to pull just that project and its sessions
            id: uid(),
            sessions: [
                {
                    sessionId: 1,
                    sessionInfo: "This some info about this session",
                    sessionTime: 45
                },
                {
                    sessionId: 5,
                    sessionInfo: "Another session description",
                    sessionTime: 45
                }
            ]
        },
        {
            projectName: 'Second Seed Data',
            id: uid(),
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
            /* 
                be careful, you are setting state to undefined here 
                you probably want to return the state like you do 
                in the default state

                return state; 
            */
            return 

        default:
            return state;
    }
}

export default setTimeoutApp;
