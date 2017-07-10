import React,{PropTypes} from 'react';
import api  from '../../api/competetionApi';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as lastFixtureActions from '../../actions/fixturesActions';
import { Header,Icon, Image, Statistic } from 'semantic-ui-react';
import NewFixture from './NewFixture';

class LastFixturePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

    render(){
        const {nextFixtures} = this.props; 
        return(
            <div>
                <Header as="h1">Najbliższe mecze</Header>
                <Header as="h4">Tydzien {"od "+nextFixtures.timeFrameStart+" do "+nextFixtures.timeFrameEnd}</Header>
                   {nextFixtures.fixtures.map(newFixture =>
                    <NewFixture key={newFixture.homeTeamName+newFixture.date} newFixture={newFixture}/>
                   )}      
            </div>
        );
    }
}
LastFixturePage.propTypes = {
    nextFixtures: PropTypes.object.isRequired
};
function mapStateToProps(state,ownProps){
    return {
        nextFixtures: state.allFixtures.nextFixtures
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(lastFixtureActions,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(LastFixturePage);