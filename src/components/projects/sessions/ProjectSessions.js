const React               = require('react');
const { connect }         = require('react-redux');
const { projectSessions }   = require('../../../actions/action_creators');





/* 

You probably want to name your component something like SessionViewer instead
of session, or renmae the 'session' variable below. Although this will not
cause a programming error, you don't really need to reuse the variable name
here, especailly because one 'session' is a component name and the other
'session' is the currentValue of a call to map()


Typically UpperCamelCase is how components should be named. Note that this 
scheme distinguishes components from HTML elements, which are all lower case

*/
const session = ({project}) => {
    /* 
        please pay close attention to using consistent indentation and line
        breaks.  
    */
    return(
        <div>
            <h1>
                {project.getIn(['projectName'])}
            </h1>
            {project.getIn(['sessions']).map((session) => {
                return (
                    <div 
                        key={session.getIn(['sessionId'])}>
                        {session.getIn(['sessionInfo'])}
                    </div>
                );
            })}
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    /* 
        * we NEVER want to set state outside of reducers, please do not do this.
        * note that you would also be nesting a mutable array containing 'id'
        in 'projects' and that will cause you problems later on. 

        what you probably want to do is 

        return state.setIn(['projects'], Immutable.List(['id']))

        or for deep objects 

        return state.setIn(['projects'], Immutable.fromJS(['id']))
     */
    console.log('session state', state.setIn(['projects'])['id'] );
    return {
        /* 
            Using props to retrieve state is fine, I do it all the time.
        */
        // This is pulling the index of the project object that is
        // passed in the route. Not sure if this is best practice or not.
        project: state.getIn(['projects', ownProps.params.index])
    };
};

const Sessions = connect(mapStateToProps)(session);

export default Sessions;
