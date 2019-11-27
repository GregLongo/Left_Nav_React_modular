import React from "react";
import classNames from "classnames";

class NavSubSection extends React.Component {
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

    const openClass = this.state.open ? "open" : "closed";

    const classes = classNames(
      "leftnav-row  leftnav-subcat",
      activeClass,
      openClass
    );

    return (
      <div
        onClick={
          this.props.children
            ? () => {
                this.toggle();
              }
            : this.props.onClick
        }
        id={this.props.id}
        className={classes}
      >
        {this.props.children && <span className="caret"> </span>}
        <span className="textlink">{this.props.text} </span>
        <div onClick={this.handleChildClick} className="leftnav-sub-drawer">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default NavSubSection;
