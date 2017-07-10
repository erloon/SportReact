import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as competetionActions from '../../actions/competetionsActions';
import { Item} from 'semantic-ui-react'

class TeamsPage extends React.Component {
    constructor(props,context){
        super(props,context);
    }


    render(){
        return (
            <div>
                <Item.Group>
                </Item.Group>
            </div>
        );
    }
}
TeamsPage.propTypes ={
    teams: PropTypes.object.isRequired
};

function mapStateToProps(state,ownProps){
    return {
        teams: state.allCompetetions.teams
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(competetionActions,dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(TeamsPage);