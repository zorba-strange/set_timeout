const React               = require('react');
const { connect }         = require('react-redux');
const { projectSessions }   = require('../../../actions/action_creators');


const session = ({projectName, projectId, sessionProjectName}) => {
    return(
        <div>
            <h1>
                {projectName}
            </h1>
            <div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    console.log('session state', state)
    return {
        // This is pulling the index of the project object that is
        // passed in the route. Not sure if this is best practice or not.
        projectId: ownProps.params.id,
        projectName: ownProps.params.projectName,
        sessionProjectName: state.sessionReducer.getIn(['projectName'])
    }
}

const Sessions = connect(mapStateToProps)(session);

export default Sessions;
