import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as competetionActions from '../../actions/competetionsActions';
import {Item, Header, Image} from 'semantic-ui-react';

class TeamPage extends React.Component{
    constructor(props,context){
        super(props,context);
         this.state={
             teamId:""
        };
    }
    componentDidMount(){
    let teamId = this.props.params.id;
    this.props.actions.loadTeam(teamId);
}
    render(){
        const {team} = this.props;
        return(
            <div>
                <Header>
                     <Image shape='circular'  src={team.crestUrl} /> 
                    {" "+team.name}
                </Header>
                <p>Kod: {team.code}</p>
                <p>Nazwa skrócona: {team.shortName}</p>
            </div>
        );
    }
}
TeamPage.propTypes ={
    team:PropTypes.object.isRequired
};

function mapStateToProps(state,ownProps){
    return {
        team: state.allCompetetions.team
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(competetionActions,dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(TeamPage);