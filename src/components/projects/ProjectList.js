const React           = require('react');
const { connect }     = require('react-redux');
const { Link }        = require('react-router');
const Project         = require('./Project').default;

const projectList = ({projects, dispatch}) => {
    console.log('projects listed', projects);
    return(
        <div>
            {projects.map((project, index) => {
            return(
                <Link 
                    to={`${index}/${project.getIn(['id'])}`}
                    key={project.getIn(['id'])}
                >
                    <Project 
                        key={project.getIn(['id'])}
                        project={project.getIn(['projectName'])} />
                </Link>
            );
        })}
    </div>
    )
}

const mapStateToProps = (state) => {
    console.log('project list state:', state)
    return {
        projects: state.getIn(['projects'])
    }
}

const ProjectList = connect(mapStateToProps)(projectList);


export default ProjectList;
