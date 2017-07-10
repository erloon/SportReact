import React, {PropTypes} from 'react';
import { Table } from 'semantic-ui-react';
import TableRow from './TableRow';

const TableList =({teams})=>{
    return (
         <Table striped>
             <Table.Header>
                 <Table.Row>
                     <Table.HeaderCell>Pozycja</Table.HeaderCell>
                     <Table.HeaderCell>Zespół</Table.HeaderCell>
                     <Table.HeaderCell>Mecze</Table.HeaderCell>
                     <Table.HeaderCell>Punkty</Table.HeaderCell>
                     <Table.HeaderCell>Wygrane</Table.HeaderCell>
                     <Table.HeaderCell>Remisy</Table.HeaderCell>
                     <Table.HeaderCell>Przegrane</Table.HeaderCell>
                     <Table.HeaderCell>Bramki strzelone</Table.HeaderCell>
                     <Table.HeaderCell>Barmki stracone</Table.HeaderCell>
                     <Table.HeaderCell>Bramki różnieca</Table.HeaderCell>
                 </Table.Row>
             </Table.Header>
             <Table.Body>
                  {teams.map(team=>
                <TableRow key={team.teamName} team={team}/>
            )}
            </Table.Body>
         </Table>
    );
};
TableList.propTypes = {
    teams: PropTypes.array.isRequired
};
export default TableList;