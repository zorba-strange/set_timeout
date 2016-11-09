const React             = require('react');
const { connect }       = require('react-redux');

const projectOptions = ({projects}) => {
    return (
        <select>
            <option 
                value=""
                disabled
            >Projects
            </option>
            {
                projects.map(project => {
                return (
                    <option
                        value={project.getIn(['projectName'])}
                    >
                        {project.getIn(['projectName'])}
                    </option>
                )
                })
            }
        </select>
    )
}

const mapStateToProps = (state) => {
    return {
        projects: state.getIn(['projects']),
    }
}

const ProjectOptions = connect(mapStateToProps)(projectOptions)


export default ProjectOptions;
