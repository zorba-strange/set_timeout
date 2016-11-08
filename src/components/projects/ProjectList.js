const React           = require('react');
const { connect }     = require('react-redux');
const { Link }        = require('react-router');
const Project         = require('./Project').default;

const projectList = ({projects, dispatch}) => {
    /* 
        again, please use consistent indentation and line breaks, which will
        make the code much easier to read in the long run.  
    */
    return(
        <div>
            {projects.map((project, index) => {
                console.log('project', project.getIn(['id']));
                return(
                    <Link 
                        to={`${index}/${project.getIn(['id'])}`}
                        key={project.getIn(['id'])}>
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
        /* you may want to provide a default here */
        // projects: state.getIn(['projects'], 'project_not_found')
        projects: state.getIn(['projects'])
    }
}

const ProjectList = connect(mapStateToProps)(projectList);


export default ProjectList;
