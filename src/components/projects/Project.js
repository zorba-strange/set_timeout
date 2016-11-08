const React                 = require('react');
const { Link }              = require('react-router');
const { connect }           = require('react-redux');

const Project = ({project, dispatch}) => {
    console.log('project', project)
    return (
        <div>
            {project}
        </div>
    )
}


export default Project;
