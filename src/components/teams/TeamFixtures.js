import React, {PropTypes,Component} from "react";
import {Icon, Label, Menu, Table} from "semantic-ui-react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as competetionActions from "../../actions/competetionsActions";
import TablePagination from "./TablePagination";
import moment from "moment";

class TeamFixtures extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state = {
            pageOfItems: []
        };
        this.onChangePage = this.onChangePage.bind(this);
    }
onChangePage(pageOfItems) {
        this.setState({ pageOfItems: pageOfItems });
    }
    render(){
        let {teamFixtures} =this.props;
        return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                         <Table.HeaderCell>Data</Table.HeaderCell>
                         <Table.HeaderCell>Kolejka</Table.HeaderCell>
                         <Table.HeaderCell>Mecz</Table.HeaderCell>
                         <Table.HeaderCell>Wynik</Table.HeaderCell>
                    </Table.Row>
                 </Table.Header>
                <Table.Body>
                    {this.state.pageOfItems.map(item => 
                        <Table.Row key={item.date}>
                            <Table.Cell>{moment(item.date).format("LLL")}</Table.Cell>
                            <Table.Cell>{item.matchday}</Table.Cell>
                            <Table.Cell>{item.homeTeamName+" : "+item.awayTeamName}</Table.Cell>
                            <Table.Cell>{
                                (item.result.goalsHomeTeam || 0) +" : "+ (item.result.goalsAwayTeam || 0)}</Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan="3">
                        <TablePagination items={teamFixtures} onChangePage={this.onChangePage}/>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        );
    }
}
TeamFixtures.propsTypes ={
    fixtures: PropTypes.array.isRequired,
    teamFixtures: PropTypes.array.isRequired
};

function mapStateToProps(state,ownProps){
    return {
        teamFixtures:state.allCompetetions.teamFixtures
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(competetionActions,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(TeamFixtures);
