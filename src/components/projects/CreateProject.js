const React               = require('react');
const { connect }         = require('react-redux');
const {
    addProject,
    inputProjectName
}                         = require('../../actions/action_creators');


const addNewProject = ({
    newProject,
    dispatch
}) => {
    return (
        <form 
            onSubmit={(e) => {
                e.preventDefault();
                console.log(newProject);
                dispatch(addProject(newProject));
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
        newProject: state.getIn(['newProject'])
    }
}

const AddProject = connect(mapStateToProps)(addNewProject)


export default AddProject
