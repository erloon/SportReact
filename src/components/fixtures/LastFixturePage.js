import React from 'react';
import {Button} from 'semantic-ui-react';
import api  from '../../api/competetionApi';

class LastFixturePage extends React.Component {
  constructor(props, context) {
    super(props, context);

     this.send=this.send.bind(this);
  }
  send(){
      api.GetCurrent();
  }
    render(){
        return(
            <div>
                <h2 className="page-header">Najbliższe mecze</h2>
                
            </div>
        );
    }
}

export default LastFixturePage;