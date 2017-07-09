import React ,{PropTypes} from 'react';
import {PageHeader} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as competetionsActions from '../../actions/competetionsActions';
import { Header } from 'semantic-ui-react';
import TableList from './TableList';


class TablePage extends React.Component {
    constructor(props,context){
        super(props,context);
        this.state={
             errors:{},
             table: null
        };
    }

componentDidMount(){
    debugger;
     let competetion =this.props.params.id;
     let table= this.props.actions.loadLeagueTable(competetion);
     this.setState({
         table: table
     })
}


    render(){
        const {table} = this.props; 

        return(
            <div>
               <Header as="h1">{table.leagueCaption}</Header> 
               <Header as="h3">Dzien meczowy: {table.matchday}</Header> 
               <TableList teams={table.standing}/>
            </div>
        );
    }
}

TablePage.propTypes = {
    competetions: PropTypes.array.isRequired,
     table: PropTypes.object.isRequired
};

function mapStateToProps(state,ownProps){
    return {
        competetions:state.allCompetetions.competetions,
        table:state.allCompetetions.table
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(competetionsActions,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(TablePage);