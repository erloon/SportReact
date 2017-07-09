import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {Link, IndexLink} from "react-router";
import {Header,Image, Input, Label, Menu } from "semantic-ui-react";

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
                <Menu vertical>
                    <Menu.Item name="inbox" active={activeItem === "inbox"} onClick={this.handleItemClick}>
                        <Label color="teal">1</Label>
                        Inbox
                    </Menu.Item>
                    <Menu.Item name="spam" active={activeItem === "spam"} onClick={this.handleItemClick}>
                        <Label>51</Label>
                        Spam
                    </Menu.Item>
                    <Menu.Item name="updates" active={activeItem === "updates"} onClick={this.handleItemClick}>
                    <Label>1</Label>
                        Updates
                    </Menu.Item>
                    <Menu.Item>
                        <Input icon="search" placeholder="Search mail..." />
                    </Menu.Item>
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