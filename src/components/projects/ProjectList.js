const React           = require('react');
const { connect }     = require('react-redux');

const projectList = ({projects}) => {
    return(
        <div>{projects.map(project => {
            console.log('project', project);
            return(
                project.projectName
            )
        })
        }
    </div>
    )
}

const mapStateToProps = (state) => {
    console.log('state projects', state.getIn(['projects']))
    return {
        projects: state.getIn(['projects'])
    }
}

const ProjectList = connect(mapStateToProps)(projectList);


export default ProjectList;
