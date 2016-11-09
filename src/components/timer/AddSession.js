const React             = require('react');
const { connect }       = require('react-redux');
const { 
    newSessionInfo,
    addSessionInfo
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
        projects: state.getIn(['projects']),
        inputSessionInfo: state.getIn(['inputSessionInfo'])
    }
}

const AddSession = connect(mapStateToProps)(addSession)


export default AddSession;
