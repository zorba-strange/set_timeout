const React               = require('react');
const { connect }         = require('react-redux');
const { projectSessions }   = require('../../../actions/action_creators');


const session = ({
    projectName,
    sessions
}) => {
    return(
        <div>
            <h1>
                {projectName}
            </h1>
            <div>
                {sessions.map(session => {
                    if( session.getIn(['projectName']) === projectName ){
                    return (
                        <div>
                            {session.getIn(['sessionInfo'])}
                        </div>
                    )
                    }
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    console.log(state.sessionReducer.getIn(['sessions']))
    return {
        projectName: ownProps.params.projectName,
        sessions: state.sessionReducer.getIn(['sessions'])
    }
}

const Sessions = connect(mapStateToProps)(session);

export default Sessions;
