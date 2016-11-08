const React                 = require('react');
const { Link }              = require('react-router');
const { connect }           = require('react-redux');

const Project = ({project, dispatch}) => {
    return (
        <div>
            {project}
        </div>
    )
}


export default Project;
