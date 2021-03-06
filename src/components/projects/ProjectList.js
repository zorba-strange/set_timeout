const React           = require('react');
const { connect }     = require('react-redux');
const { Link }        = require('react-router');
const Project         = require('./Project').default;

const projectList = ({
    projects,
    dispatch
}) => {
    return(
        <div>
            {projects.map((project, index) => {
            return(
                <Link 
                    to={`${project.getIn(['projectName'])}/${project.getIn(['id'])}`}
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
    return {
        projects: state.projectReducers.getIn(['projects'])
    }
}

const ProjectList = connect(mapStateToProps)(projectList);


export default ProjectList;
