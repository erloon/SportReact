import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as competetionActions from '../../actions/competetionsActions';
import {Item, Header, Image, Button} from 'semantic-ui-react';
import TeamFixtures from './TeamFixtures';
import TeamPLayers from './TeamPlayers';

class TeamPage extends React.Component{
    constructor(props,context){
        super(props,context);
         this.state={
             teamId:"",
            fixturesVisable: false,
            playersVisable:false
        };
        this.getFixtures = this.getFixtures.bind(this);
        this.getPlayers = this.getPlayers.bind(this);
    }
    getFixtures(){
        this.props.actions.loadTeamFixture(this.props.params.id);
        this.setState({fixturesVisable:true,
        playersVisable:false});
    }

    getPlayers(){
        debugger;
        this.props.actions.loadPlayers(this.props.params.id);
         this.setState({fixturesVisable:false,
        playersVisable:true});
    }
    componentDidMount(){
        let teamId = this.props.params.id;
        this.setState({teamId:teamId});
        this.props.actions.loadTeam(teamId);
}
    render(){
        const {team, fixtures, teamPlayers} = this.props;
        return(
            <div>
                <Header>
                     <Image shape='circular'  src={team.crestUrl} /> 
                    {" "+team.name}
                </Header>
                <p>Kod: {team.code}</p>
                <p>Nazwa skrócona: {team.shortName}</p>
                <div>
                    <Button primary onClick={this.getFixtures}>Wyniki</Button>
                    <Button secondary onClick={this.getPlayers}>Skład</Button>
                 </div>
                 <br/>
                   {this.state.fixturesVisable ? (<TeamFixtures fixtures={fixtures} />) :null }
                   
                   {this.state.playersVisable ? (<TeamPLayers teamPlayers={teamPlayers}/>): null}
            </div>
        );
    }
}
TeamPage.propTypes ={
    team:PropTypes.object.isRequired
};

function mapStateToProps(state,ownProps){
    return {
        team: state.allCompetetions.team,
        teamFixtures:state.allCompetetions.teamFixtures,
        teamPlayers:state.allCompetetions.teamPlayers
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(competetionActions,dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(TeamPage);