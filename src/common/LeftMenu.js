import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {Link, IndexLink} from "react-router";
import { Dropdown, Menu } from 'semantic-ui-react';

class LeftMenu extends React.Component{
    constructor(props,context){
        super(props,context);
         this.state = { activeItem: "inbox" };
    }
    handleItemClick (e, { name }) { this.setState({ activeItem: name });}
    render(){
        const { activeItem } = this.state;
        return (
            <div>
                <Menu secondary vertical>
                    <Menu.Item name="Drużyny" />
                    <Menu.Item name='Zawodnicy'  />
                </Menu>
             </div>
        );
    }
}
function mapStateToProps(state,ownProps){
    return {
        
    };
}

function mapDispatchToProps(dispatch){
    return {
        
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(LeftMenu);