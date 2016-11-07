const React               = require('react');
const { connect }         = require('react-redux');
const { projectSessions }   = require('../../../actions/action_creators');


const session = ({
    sessions,
    params,
    dispatch
}) => {
    console.log('params id', dispatch(projectSessions(params.Id)));
    return(
        <div>{dispatch(projectSessions(params.Id))}</div>
    )
}

const mapStateToProps =(state) => {
    console.log(state);
    return {
        sessions: state.sessions
    }
}

const Sessions = connect(mapStateToProps)(session);

export default Sessions;
