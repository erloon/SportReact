import React, {PropTypes} from 'react';
import { Table } from 'semantic-ui-react';
import {Link} from 'react-router';

const TableRow=({team})=>{
    return (
        <Table.Row textAlign="center">
          <Table.Cell>{team.position}</Table.Cell>
          <Table.Cell>{team.teamName}</Table.Cell>
          <Table.Cell>{team.playedGames}</Table.Cell>
          <Table.Cell>{team.points}</Table.Cell>
          <Table.Cell>{team.wins}</Table.Cell>
          <Table.Cell>{team.draws}</Table.Cell>
           <Table.Cell>{team.losses}</Table.Cell>
          <Table.Cell>{team.goals}</Table.Cell>
          <Table.Cell>{team.goalsAgainst}</Table.Cell>
          <Table.Cell>{team.goalDifference}</Table.Cell>
        </Table.Row>
    );

};
TableRow.propTypes={
    team: PropTypes.object.isRequired
};
export default TableRow;
