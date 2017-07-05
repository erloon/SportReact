import React,{PropTypes} from "react";
import Header from "../common/Header";
import {connect} from 'react-redux';
import { Container, Grid } from 'semantic-ui-react';



class App extends React.Component {
    render() {
        return (
                <Grid >
                    <Grid.Row>
                        <Grid.Column>
                            <Header loading={this.props.loading}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column color="orange" width={3} >
                            
                        </Grid.Column>
                         <Grid.Column width={13}>
                             {this.props.children}
                        </Grid.Column>
                    </Grid.Row>          
                </Grid>
        );
    }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);