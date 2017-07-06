import React, {PropTypes} from 'react';
import { Button, Image, List } from 'semantic-ui-react';
import {Link} from 'react-router';


const CompetetionRow  = ({competetion})=>{
    return (
        <List.Item>
             <List.Content floated="right">
                <Button><Link to={'/tables/'+competetion.id}>Tabela</Link></Button>
                <Button><Link to={'/fixtures/'+competetion.id}>Wyniki</Link></Button>
                <Button><Link to={'/teams/'+competetion.id}>Zespoły</Link></Button>
            </List.Content>
                <Image avatar src={require('../../img/Pilka_B.jpg')} />
            <List.Content>
                <List.Header>{competetion.caption}</List.Header>
                <List.Description>{competetion.league + " "+ competetion.year}</List.Description>
            </List.Content>
         </List.Item>
    );
};

CompetetionRow.propTypes ={
    competetion: PropTypes.object.isRequired
};

export default CompetetionRow;