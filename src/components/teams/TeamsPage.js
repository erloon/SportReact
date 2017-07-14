import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as competetionActions from '../../actions/competetionsActions';
import { Item} from 'semantic-ui-react';
import TeamItem from './TeamItem';
import { browserHistory,hashHistory } from 'react-router';

class TeamsPage extends React.Component {
    constructor(props,context){
        super(props,context);
        this.redirectToTeam = this.redirectToTeam.bind(this);
    }

componentDidMount(){
    let competetionId = this.props.params.id;
    this.props.actions.loadTeams(competetionId);
}


redirectToTeam(event){
    let url = event.target.value;
    let id ="";
    if (url.length === 41) {
        id = url.slice(-3);
    } else if (url.length === 42) {
        id = url.slice(-4);
    } else if (url.length === 39) {
        id = url.slice(-1);
    } else {
        id = url.slice(-2);
    }
    browserHistory.push("/team/"+id);
}
    render(){
        const {teams} =this.props;
        return (
            <div>
                <Item.Group>
                    {teams.map(team=> 
                        <TeamItem key={team.name} team={team} selfRedirect={this.redirectToTeam}/>
                    )}
                </Item.Group>
            </div>
        );
    }
}
TeamsPage.propTypes ={
    teams: PropTypes.array.isRequired
};

function mapStateToProps(state,ownProps){
    return {
        teams: state.allCompetetions.teams.teams
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(competetionActions,dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(TeamsPage);