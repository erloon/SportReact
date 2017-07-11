import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as competetionActions from '../../actions/competetionsActions';
import { Item} from 'semantic-ui-react';
import TeamItem from './TeamItem';

class TeamsPage extends React.Component {
    constructor(props,context){
        super(props,context);
    }

componentDidMount(){
    let competetionId = this.props.params.id;
    this.props.actions.loadTeams(competetionId);
}

getTeamFixtures(url){
    this.props.actions.loadTeamFixture(url);
}
    render(){
        const {teams} =this.props;
        return (
            <div>
                <Item.Group>
                    {teams.map(team=>
                        <TeamItem key={team.name} team={team}/>
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