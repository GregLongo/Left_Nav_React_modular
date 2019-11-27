import React from "react";
import classNames from "classnames";
import NavSection from "./NavSection";
import NavSubSection from "./NavSubSection";
import NavSubSubSection from "./NavSubSubSection";

class LeftNav extends React.Component {
  static defaultProps = {
    icons: false,
    minimized: false
  };

  state = {};

  selectActive(e) {
    const id = e.target.id;
    this.setState({
      activeID: id
    });
  }

  selectOpen(e) {
    const id = this.state.openID === e.target.id ? null : e.target.id;
    this.setState({
      openID: id
    });
  }

  render() {
    const { icons, minimized } = this.props;

    const classes = classNames("leftnav-container", {
      "leftnav-icons": icons,
      "leftnav-minimized": minimized && !icons,
      "leftnav-icons-minimized": icons && minimized
    });

    return (
      <div className={classes}>
        <div className="leftnav">
          <NavSection
            icon="item-summary"
            badge="0"
            text="Menu Item 1"
            id="1"
            onClick={e => this.selectActive(e)}
            active={this.state.activeID === "1"}
          />
          <NavSection
            icon="item-locations"
            badge="23"
            text="Menu Item 2"
            id="2"
            onClick={e => this.selectOpen(e)}
            open={this.state.openID === "2"}
          >
            <NavSubSection id="7" text="Sub Menu Item">
              <NavSubSubSection
                text="Sub Sub Menu Item"
                id="15"
                onClick={e => this.selectActive(e)}
                active={this.state.activeID === "15"}
              />
              <NavSubSubSection
                text="Sub Sub Menu Item"
                id="16"
                onClick={e => this.selectActive(e)}
                active={this.state.activeID === "16"}
              />
            </NavSubSection>
            <NavSubSection
              text="Sub Menu Item"
              id="8"
              onClick={e => this.selectActive(e)}
              active={this.state.activeID === "8"}
            />
          </NavSection>
          <NavSection
            icon="item-contacts"
            badge="0"
            text="Menu Item 3"
            id="3"
            onClick={e => this.selectOpen(e)}
            open={this.state.openID === "3"}
          >
            <NavSubSection id="9" text="Sub Menu Item">
              <NavSubSubSection
                text="Sub Sub Menu Item"
                id="17"
                onClick={e => this.selectActive(e)}
                active={this.state.activeID === "17"}
              />
              <NavSubSubSection
                text="Sub Sub Menu Item"
                id="18"
                onClick={e => this.selectActive(e)}
                active={this.state.activeID === "18"}
              />
            </NavSubSection>
            <NavSubSection
              text="Sub Menu Item"
              id="10"
              onClick={e => this.selectActive(e)}
              active={this.state.activeID === "10"}
            />
          </NavSection>
          <NavSection
            icon="item-workplan"
            badge="4"
            text="Menu Item 4"
            id="4"
            onClick={e => this.selectActive(e)}
            active={this.state.activeID === "4"}
          />
          <NavSection
            icon="item-activities"
            badge="32"
            text="Menu Item 5"
            id="5"
            onClick={e => this.selectOpen(e)}
            open={this.state.openID === "5"}
          >
            <NavSubSection id="11" text="Sub Menu Item">
              <NavSubSubSection
                text="Sub Sub Menu Item"
                id="19"
                onClick={e => this.selectActive(e)}
                active={this.state.activeID === "19"}
              />
              <NavSubSubSection
                text="Sub Sub Menu Item"
                id="20"
                onClick={e => this.selectActive(e)}
                active={this.state.activeID === "20"}
              />
            </NavSubSection>
            <NavSubSection
              text="Sub Menu Item"
              id="12"
              onClick={e => this.selectActive(e)}
              active={this.state.activeID === "12"}
            />
          </NavSection>
          <NavSection
            icon="item-calendar"
            badge="0"
            text="Menu Item 6"
            id="6"
            onClick={e => this.selectOpen(e)}
            open={this.state.openID === "6"}
          >
            <NavSubSection id="13" text="Sub Menu Item">
              <NavSubSubSection
                text="Sub Sub Menu Item"
                id="21"
                onClick={e => this.selectActive(e)}
                active={this.state.activeID === "21"}
              />
              <NavSubSubSection
                text="Sub Sub Menu Item"
                id="22"
                onClick={e => this.selectActive(e)}
                active={this.state.activeID === "22"}
              />
            </NavSubSection>
            <NavSubSection
              text="Sub Menu Item"
              id="14"
              onClick={e => this.selectActive(e)}
              active={this.state.activeID === "14"}
            />
          </NavSection>
        </div>
        <div className="pull-tab" />
      </div>
    );
  }
}

export default LeftNav;
