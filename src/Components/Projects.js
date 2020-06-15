import React, { Component } from "react";
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activetab: 0 };
  }
  toggleCategories() {
    if (this.state.activetab === 0) {
      return (
        <div className="project-grid">
          {/*Project 1*/}
          <Card shadow={5} style={{ minWidth: "450px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://careers.unity.com/themes/careers/images/og-unity.png) center / cover",
              }}
            >
              Unity Projects #1
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>Get Started</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*Project 2*/}
          <Card shadow={5} style={{ minWidth: "450px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://careers.unity.com/themes/careers/images/og-unity.png) center / cover",
              }}
            >
              Unity Projects #2
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>Get Started</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*Project 3*/}
          <Card shadow={5} style={{ minWidth: "450px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://careers.unity.com/themes/careers/images/og-unity.png) center / cover",
              }}
            >
              Unity Projects #3
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>Get Started</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activetab === 1) {
      return (
        <div>
          <h1>This is Unity</h1>
        </div>
      );
    } else if (this.state.activetab === 2) {
      return (
        <div>
          <h1>This is C#</h1>
        </div>
      );
    } else if (this.state.activetab === 3) {
      return (
        <div>
          <h1>This is Something</h1>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activetab={this.state.activetab}
          onChange={(tabId) => this.setState({ activetab: tabId })}
          ripple
        >
          <Tab>Unity</Tab>
          <Tab>React</Tab>
          <Tab>C#</Tab>
          <Tab>Something</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
