import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Tobias Skov Ludvigsen</h2>
            <img
              src="https://getdrawings.com/free-icon/male-avatar-icon-72.png"
              alt="avatar"
              style={{ height: "250px", borderRadius: "25px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}></p>
          </Cell>
          <Cell col={6}>
            <h2>Kontakt mig</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    +4523652668
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    toby.skov.ludvigsen@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-home" aria-hidden="true" />
                    Dybbølvej 29 8240 Risskov
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
