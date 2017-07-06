import React, {PropTypes} from "react";
import {Link, IndexLink} from "react-router";
import { Menu, Segment } from "semantic-ui-react";


class Header extends React.Component{
    constructor(props, context) {
    super(props, context);

     this.state = { activeItem:{
         name: "home"
     }  };

     this.handleItemClick=this.handleItemClick.bind(this);
  }

handleItemClick(e,name){
    this.setState({activeItem:name});
}

render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item name="home" active={activeItem.name === "home"} onClick={this.handleItemClick} as={Link} to="/"/>
          <Menu.Item name="Ligi" active={activeItem.name === "Ligi"} onClick={this.handleItemClick} as={Link} to="/Competetions"  />
          <Menu.Item name="Mecze" active={activeItem.name === "Mecze"} onClick={this.handleItemClick} as={Link} to="/LastFixture" />
        </Menu>
      </Segment>
    );
  }

}

export default Header;