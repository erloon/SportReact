import React,{PropTypes} from 'react';
import { Button, Image, List } from 'semantic-ui-react';
import moment from 'moment';

const FixturesList =({fixtures})=>{
    return (
        <List divided verticalAlign="middle">
            {fixtures.map(fixture=>
                <List.Item key={fixture.homeTeamName}>
                    <Image avatar src={require("../img/Pilka_B.jpg")} />
                    <List.Content>
                        {moment(fixture.date).format("DD-MM-YYYY") 
                            + " "+fixture.homeTeamName +" "+(fixture.result.goalsHomeTeam || "...")
                            +": "+(fixture.result.goalsHomeTeam || "...")+" "+fixture.awayTeamName}
                    </List.Content> 
                </List.Item>
            )}
        </List>
    );

};

FixturesList.propTypes={
    fixtures: PropTypes.array.isRequired
};
export default FixturesList;