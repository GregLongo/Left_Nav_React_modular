import React from "react";
import classNames from "classnames";

class NavSubSubSection extends React.Component {
  render() {
    const activeClass =
      this.props.active && !this.props.children && "leftnav-selected";

    const classes = classNames("leftnav-row  leftnav-subsubcat", activeClass);
    return (
      <div onClick={this.props.onClick} id={this.props.id} className={classes}>
        <span className="textlink">{this.props.text} </span>
      </div>
    );
  }
}

export default NavSubSubSection;
