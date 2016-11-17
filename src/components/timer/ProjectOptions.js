const React             = require('react');
const { connect }       = require('react-redux');
const {
    addSessionInfo,
    newSessionInfo,
    selectProjectName,
    resetSessionInfo,
    Tick,
    setInputTime,
    timeSet,
    setTime,
}                       = require('../../actions/action_creators');
const projectOptions = ({
    projects,
    inputSessionInfo,
    dispatch,
    optionProjectName,
    timeInput,
    timerSet
}) => {
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
                    dispatch(addSessionInfo(inputSessionInfo, optionProjectName));
                    newSessionInfo({inputSessionInfo});
                    dispatch(resetSessionInfo(''));
                    dispatch(setInputTime(''));
                    dispatch(timeSet(false));
                    dispatch(Tick(false));
                    dispatch(setTime(''));
                }}
            >
                <input
                    type="text"
                    onChange={(e) => {
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
        timeInput: state.timerReducer.getIn(['timeInput']),
        timerSet: state.timerReducer.getIn(['timerSet']),
        projects: state.projectReducers.getIn(['projects']),
        optionProjectName: state.sessionReducer.getIn(['optionProjectName']),
        inputSessionInfo: state.sessionReducer.getIn(['inputSessionInfo'])
    }
}

const ProjectOptions = connect(mapStateToProps)(projectOptions)


export default ProjectOptions;
