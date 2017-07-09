import React,{PropTypes} from 'react';
import api  from '../../api/competetionApi';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as lastFixtureActions from '../../actions/fixturesActions';
import { Header,Icon, Image, Statistic } from 'semantic-ui-react';


class LastFixturePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    
  }

    render(){
        const {nextFixtures} = this.props; 
        return(
            <div>
                <Header as="h1">Najbliższe mecze</Header>
                <Header as="h2">Tydzien {"od "+nextFixtures.timeFrameStart+" do "+nextFixtures.timeFrameEnd}</Header>
                <Statistic.Group widths="four">
                    <Statistic>
                        <Statistic.Value>22</Statistic.Value>
                        <Statistic.Label>Saves</Statistic.Label>
                    </Statistic>
                </Statistic.Group>
            </div>
        );
    }
}
LastFixturePage.propTypes = {
    nextFixtures: PropTypes.object.isRequired
};
function mapStateToProps(state,ownProps){
    debugger;
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