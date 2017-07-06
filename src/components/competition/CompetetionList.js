import React, {PropTypes} from "react";
import { List } from 'semantic-ui-react';
import CompetetionRow from './CompetetionRow';

const CompetetionList =({competetions})=>{
    return (
        <List>
            {competetions.map(competetion=>
                <CompetetionRow key={competetion.id} competetion={competetion}/>
            )}
        </List>    
    );
};

CompetetionList.propTypes ={
    competetions: PropTypes.array.isRequired
};

export default CompetetionList;