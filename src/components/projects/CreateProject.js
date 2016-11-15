const React               = require('react');
const { connect }         = require('react-redux');
const {
    addProject,
    inputProjectName,
    resetInputProjectName
}                         = require('../../actions/action_creators');


const Immutable           = require('immutable');
const addNewProject = ({
    newProject,
    dispatch
}) => {
    return (
        <form 
            onSubmit={(e) => {
                e.preventDefault();
                dispatch(addProject(newProject));
                dispatch(resetInputProjectName(''));
            }}
        >
            <input
                type="text"
                onChange={(e) => {
                    e.preventDefault();
                    dispatch(inputProjectName(e.target.value));
                }}
                value={newProject}
                placeholder="Create Project"
            />
            <input
                type="submit"
                value="Create"
            />
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        newProject: state.projectReducers.getIn(['newProject'], '')
    }
}

const AddProject = connect(mapStateToProps)(addNewProject)


export default AddProject
