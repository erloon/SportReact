import React, {PropTypes} from 'react';
import { Table } from 'semantic-ui-react';
import CompetetionFixturesTableRow from './CompetetionFixturesTableRow';

const CompetetionFixturesTable =({fixtures})=>{
    return (
         <Table striped>
             <Table.Header>
                 <Table.Row  textAlign="center">
                     <Table.HeaderCell>Kolejka</Table.HeaderCell>
                     <Table.HeaderCell>Data</Table.HeaderCell>
                     <Table.HeaderCell>Mecz</Table.HeaderCell>                    
                     <Table.HeaderCell>Wynik</Table.HeaderCell>
                     <Table.HeaderCell>Wynik do przerwy</Table.HeaderCell>
                 </Table.Row>
             </Table.Header>
             <Table.Body>
                  {fixtures.map(fixture=>
                <CompetetionFixturesTableRow key={fixture.homeTeamName + fixture.date} fixture={fixture}/>
            )}
            </Table.Body>
         </Table>
    );
};
CompetetionFixturesTable.propTypes = {
    fixtures: PropTypes.array.isRequired
};
export default CompetetionFixturesTable;