import React, {PropTypes} from "react";
import { Statistic } from 'semantic-ui-react';
import  moment from 'moment';

const NewFixture =({newFixture})=>{
    let homeScore = newFixture.result.goalsHomeTeam === null ? 0 : newFixture.result.goalsHomeTeam ;
    let awayScore = newFixture.result.goalsAwayTeam === null ? 0 : newFixture.result.goalsAwayTeam ;
    return (
         <Statistic.Group widths="3">
             <Statistic size='huge' label={newFixture.homeTeamName} />
             <Statistic>
                <Statistic.Value>{(homeScore)+ " : "+awayScore}</Statistic.Value>
                <Statistic.Label>{moment(newFixture.date).format('LLL')}</Statistic.Label>
            </Statistic>
            <Statistic>
                <Statistic.Label>{newFixture.awayTeamName}</Statistic.Label>
            </Statistic>
        </Statistic.Group>
    );
};

NewFixture.propTypes={
    newFixture: PropTypes.object.isRequired
};
export default NewFixture;