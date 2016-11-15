const React             = require('react');
const { connect }       = require('react-redux');
const { 
    newSessionInfo,
    addSessionInfo,
    resetSessionInfo,
}                       = require('../../actions/action_creators');
const ProjectOptions    = require('./ProjectOptions').default;

console.log(ProjectOptions)

const addSession = ({
    projects,
    dispatch,
    inputSessionInfo
}) => {
    return (
            <ProjectOptions />
    )
}

const mapStateToProps = (state) => {
    return {
        projects: state.projectReducers.getIn(['projects']),
    }
}

const AddSession = connect(mapStateToProps)(addSession)


export default AddSession;
