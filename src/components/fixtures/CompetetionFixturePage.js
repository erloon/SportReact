import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as fixturesActions from '../../actions/fixturesActions';
import CompetetionFixturesTable from './CompetetionFixturesTable';

class CompetetionFixturesPage extends React.Component{
    constructor(props,context){
        super(props,context);
    }

componentDidMount(){
    debugger;
    let competetion =this.props.params.id;
     let fixtures= this.props.actions.loadCompetetionFixtures(competetion);
}
    render(){
        debugger;
        const {fixtures} =this.props;
        return (
            <div>
                <CompetetionFixturesTable fixtures={fixtures.fixtures} />
            </div>
        );
    }
}
CompetetionFixturesPage.propTypes ={
    fixtures: PropTypes.object.isRequired
}
function mapStateToProps(state,ownProps){
    return {
        fixtures:state.allFixtures.competetionFixtures
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(fixturesActions,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(CompetetionFixturesPage);