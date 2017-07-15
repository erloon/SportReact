import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Carousel from 'nuka-carousel';
import {Grid} from "semantic-ui-react";
import FixtureList from '../../common/FixturesList';

class HomePage extends React.Component{
    render(){
        let {yesterdayFixtures,tomorrowFixtures}=this.props;
        return (
            <div>
                <div>
                    <Carousel autoplay>
                        <img src={require("../../img/antoine-griezmann-620364680-1000x400.jpg")}/>
                        <img src={require("../../img/Banner-Sports-Pitches-3.jpg")}/>
                        <img src={require("../../img/Champions-League.png")}/>
                        <img src={require("../../img/1_football.jpg")}/>
                    </Carousel>
                </div>
                <br/>
                <div>
                     <Grid divided="vertically">
                        <Grid.Row columns={2}>
                            <Grid.Column>
                                <h2 className="page-header">Najbliższe mecze:</h2>
                                <FixtureList fixtures={tomorrowFixtures}/>
                            </Grid.Column>
                             <Grid.Column>
                                 <h2 className="page-header">Ostatnie mecze:</h2>
                                 <FixtureList fixtures={yesterdayFixtures}/>
                            </Grid.Column>
                         </Grid.Row>
                         <Grid.Row columns={1}>
                            <Grid.Column>

                            </Grid.Column>    
                         </Grid.Row>    
                    </Grid>
                </div>
            </div>
        );
    }
}
HomePage.propTypes = {
    tomorrowFixtures: PropTypes.array.isRequired,
    yesterdayFixtures: PropTypes.array.isRequired

};
function mapStateToProps(state,ownProps){
    return {
        tomorrowFixtures: state.allFixtures.tomorrowFixtures,
        yesterdayFixtures: state.allFixtures.yesterdayFixtures
    };
}

function mapDispatchToProps(dispatch){
    return {    
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);