const React               = require('react');
const { connect }         = require('react-redux');
const { projectSessions }    = require('../../../actions/action_creators');


const session = ({
    sessions,
    params
}) => {
    console.log(params);
    console.log('sessions', sessions);
    return(
        <div>This is the Sessions Page</div>
    )
}

const mapStateToProps =(state, params) => {
    console.log('sessions state', state)
    return {
        sessions: projectSessions(params)
    }
}

const Sessions = connect(mapStateToProps)(session);

export default Sessions;
