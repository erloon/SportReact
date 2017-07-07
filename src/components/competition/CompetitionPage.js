import React ,{PropTypes} from 'react';
import {PageHeader} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as competetionsActions from '../../actions/competetionsActions';
import CompetitionList from './CompetetionList';


class CompetitionPage extends React.Component {
    constructor(props,context){
        super(props,context);
        this.state={
             errors:{}
        };
    }


    render(){
        const {competetions} = this.props; 

        return(
            <div>
                <PageHeader className="page-header">Dostępne ligi</PageHeader>
                <CompetitionList competetions={competetions}/>
                </div>
        );
    }
}

CompetitionPage.propTypes = {
    competetions: PropTypes.array.isRequired
};

function mapStateToProps(state,ownProps){
    return {
        competetions: state.competetions
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(competetionsActions,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(CompetitionPage);