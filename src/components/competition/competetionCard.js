import React, {PropTypes} from "react";
import {Link} from "react-router";
import { Button, Card, Image } from "semantic-ui-react";

const competetionCard = (competetion) => {
    return (
        <Card>
            <Card.Content>
                <Image floated="right" size="mini" src="/assets/images/avatar/large/steve.jpg" />
                <Card.Header>
                    {competetion.caption}
                </Card.Header>
                <Card.Meta>
                    {competetion.league + " "+ competetion.year} 
                </Card.Meta>
                <Card.Description>
                    {"Kolejka: "+ competetion.currentMatchday + " "+"Ostatnia aktualizacja: "+competetion.lastUpdated}
                </Card.Description>
            </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">Tabela</Button>
          <Button basic color="red">Wyniki</Button>
        </div>
      </Card.Content>
    </Card>
    );

};