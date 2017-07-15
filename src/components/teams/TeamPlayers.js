import React, {PropTypes,Component} from "react";
import {Card, Icon, Image} from "semantic-ui-react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as competetionActions from '../../actions/competetionsActions';


class TeamPLayers extends React.Component{
    constructor(props,context){
        super(props,context);
    }

    render(){
        const {teamPlayers} = this.props;
        return (
            <div>
                <Card.Group itemsPerRow={4}>
                {teamPlayers.players.map(player =>
                    <Card key={player.name}>
                        <Image src="http://ulatbambu.com/images/clipart-football-players-silhouette-25.png" size="small"/>
                        <Card.Content>
                            <Card.Header>
                                {player.name}
                            </Card.Header>
                            <Card.Meta>
                                <span>
                                 <p> Pozycja: {player.position}</p>
                                 <p> Numer: {player.jerseyNumber}</p>
                                </span>
                            </Card.Meta>
                            <Card.Description>
                                <p>Data urodzenia: {player.dateOfBirth}</p>
                                <p>Narodowość: {player.nationality}</p>
                                <p>Kontrakt do: {player.contractUntil}</p>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Icon name="money" />
                                {player.marketValue || 0}
                             </a>
                        </Card.Content>
                    </Card>
                )}
                </Card.Group>
            </div>
        );
    }
}

function mapStateToProps(state,ownProps){
    return {
        teamPlayers:state.allCompetetions.teamPlayers
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(competetionActions,dispatch)
    };
}
TeamPLayers.propTypes ={
    teamPlayers: PropTypes.array.isRequired
};
export default connect(mapStateToProps,mapDispatchToProps)(TeamPLayers);
