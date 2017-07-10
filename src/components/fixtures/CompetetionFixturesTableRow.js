import React, {PropTypes} from 'react';
import { Table } from 'semantic-ui-react';
import {Link} from 'react-router';
import moment from 'moment';

const CompetetionFixturesTableRow=({fixture})=>{
    let halfHomeScore= "";
    let halfAwayScore = "";
    
    if(typeof(fixture.result.halfTime)!=="undefined"){
         halfHomeScore = fixture.result.halfTime.goalsHomeTeam;
         halfAwayScore = fixture.result.halfTime.goalsAwayTeam;
    }
    let homeScore = fixture.result.goalsHomeTeam == null ? "...": fixture.result.goalsHomeTeam;
    let awayScore = fixture.result.goalsAwayTeam == null ? "...": fixture.result.goalsAwayTeam;
    return (
        <Table.Row textAlign="center">
          <Table.Cell>{fixture.matchday}</Table.Cell>
          <Table.Cell>{moment(fixture.date).format("LLL")}</Table.Cell>
          <Table.Cell><b>{fixture.homeTeamName+" : "+ fixture.awayTeamName}</b></Table.Cell>   
          <Table.Cell><b>{homeScore+" : "+ awayScore}</b></Table.Cell>
          <Table.Cell>{halfHomeScore+" : "+halfAwayScore}</Table.Cell>
        </Table.Row>
    );

};
CompetetionFixturesTableRow.propTypes={
    fixture: PropTypes.object.isRequired
};
export default CompetetionFixturesTableRow;
