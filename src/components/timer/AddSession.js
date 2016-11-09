const React             = require('react');
const { connect }       = require('react-redux');
const newSessionInfo    = require('../../actions/action_creators');
const ProjectOptions    = require('./ProjectOptions').default;

console.log(ProjectOptions)

const addSession = ({
    projects,
    dispatch,
    inputSessionInfo
}) => {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                console.log('submited and new session');
            }}
        >
            <ProjectOptions />
            <input
                type="text"
                onChange={(e) => dispatch(newSessionInfo(e.target.value))}
                value={inputSessionInfo}
                placeholder="Session Information"
            />
            <input
                type="submit"
                value="Save Session"
            />
        </form>
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
