import React,{PropTypes} from "react";
import Header from "../common/Header";
import {connect} from 'react-redux';
import { Container, Grid } from 'semantic-ui-react';
import LeftMenu from '../common/LeftMenu';

class App extends React.Component {
    render() {
        return (
        <div>
            <Container fluid>
                <Header loading={this.props.loading}/>
                {this.props.children}
            </Container>
        </div>
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