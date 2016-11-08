const React               = require('react');
const { connect }         = require('react-redux');
const { projectSessions }   = require('../../../actions/action_creators');


const session = ({sessions}) => {
    console.log(sessions.map(session => session.map(s => console.log(s.sessionInfo))));
    return(
        <div>{sessions.map(session => session.map(s => {
            return (
                <div key={s.sessionId}>{s.sessionInfo}</div>)}))}
        </div>
    )
}

const mapStateToProps =(state, ownProps) => {
    return {
    sessions: state.getIn(['projects']).map((project) => { 
        console.log(project.id, ownProps.params.id);
        if(project.id === parseInt(ownProps.params.id)){
            return project.sessions;
        } else {
            console.log('not found');
        }})
    }
}

const Sessions = connect(mapStateToProps)(session);

export default Sessions;
