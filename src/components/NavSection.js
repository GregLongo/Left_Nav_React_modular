import React from "react";
import classNames from "classnames";

class NavSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  handleChildClick(evt) {
    evt.stopPropagation();
  }

  render() {
    const activeClass =
      this.props.active && !this.props.children && "leftnav-selected";

    const openClass = this.props.open ? "open" : "closed";

    const classes = classNames(
      "section-drawer leftnav-row menu-item",
      this.props.icon,
      openClass,
      activeClass
    );

    return (
      <div onClick={this.props.onClick} id={this.props.id} className={classes}>
        <span className="textlink "> {this.props.text} </span>

        {this.props.badge > 0 && (
          <span className="badge badge-solid">{this.props.badge}</span>
        )}

        {this.props.children && (
          <div onClick={this.handleChildClick} className="leftnav-drawer">
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default NavSection;
