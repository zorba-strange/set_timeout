const React             = require('react');
const { connect }       = require('react-redux');
const {
    addSessionInfo,
    newSessionInfo,
    selectProjectName
}                       = require('../../actions/action_creators');
const projectOptions = ({
    projects,
    inputSessionInfo,
    dispatch,
    optionProjectName,
    timeInput
}) => {
    console.log(inputSessionInfo);
    return (
        <div>
            <select
                onChange={(e) => {
                    dispatch(selectProjectName(e.target.value));
                }}
            >
                <option 
                    value=""
                    disabled
                    selected
                >Please select a project
                </option>
                {
                    projects.map(project => {
                        return (
                            <option
                                key={project.getIn(['id'])}
                                value={project.getIn(['projectName'])}
                            >
                                {project.getIn(['projectName'])}
                            </option>
                        )
                    })
                }
            </select>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(addSessionInfo(optionProjectName, timeInput, inputSessionInfo));
                    newSessionInfo({inputSessionInfo})
                    console.log('submited and new session');
                }}
            >
                <input
                    type="text"
                    onChange={(e) => {
                        console.log(e.target.value)
                        dispatch(newSessionInfo(e.target.value))
                    }}
                    value={inputSessionInfo}
                    placeholder="Session Information"
                />
                <input
                    type="submit"
                    value="Save Session"
                />
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        timeInput: state.getIn(['timeInput']),
        projects: state.getIn(['projects']),
        inputSessionInfo: state.getIn(['inputSessionInfo']),
        optionProjectName: state.getIn(['optionProjectName'])
    }
}

const ProjectOptions = connect(mapStateToProps)(projectOptions)


export default ProjectOptions;
