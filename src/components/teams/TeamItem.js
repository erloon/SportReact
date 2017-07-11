import React, {PropTypes} from 'react';
import { Button, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react';
import {Link} from 'react-router';


const TeamItem = ({team})=>{
    let teamImageUrl="http://www.codeodor.com/images/Empty_set.png";
    if(team.crestUrl !==null){
        teamImageUrl=team.crestUrl;
    }
    return (
        <Item>
            <Item.Image size="tiny" src={teamImageUrl}/>
            <Item.Content verticalAlign='middle'>
                 <Item.Header as="a">{team.name}</Item.Header>
                 <Item.Meta>
                    <span className="cinema">{team.code}</span>
                </Item.Meta> 
                <Item.Extra>
                    <Button positive size="tiny" floated='left'>
                        Skład
                        <Icon name='right chevron' />
                    </Button>
                    <Button positive size="tiny" floated='left'>
                        Wyniki
                        <Icon name='right chevron' />
                    </Button>
                 </Item.Extra>
            </Item.Content>
        </Item>
    );
};

TeamItem.propTypes={
    team: PropTypes.object.isRequired
};

export default TeamItem;