import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "../../src/styles/party-component.css";
import RenderFriend from "./render-friend";
import GuestList from "./guest-list";

export default class PartyComponent extends Component {

  constructor(props) {
    super(props);
  }

  renderFriends(friends, party) {
    const invitees = this.props.invitees;
    const partyTime = styles.party + (party ? "" : " " + styles.hideParty);

    return friends
      .filter((friend) => {
        return !!invitees.filter((invitee) => {
          return invitee.name === friend.name && invitee.invited;
        }).length;
      })
      .map((friend) => (
        <RenderFriend className={partyTime} key={friend.name} friend={friend}/>
      ));
  }

  viewState(view) {
    if (view) {
      return view;
    }
    return {
      intro: true,
      invite: true
    };
  }

  houseParty(invitees, party) {
    return party ?
      `${styles.houseParty} ${styles.house}` :
      styles.house;
  }

  render() {
    const { ourFriends, invitees, view, message, toggleGuest } = this.props;
    const party = invitees.length === invitees.filter((invitee) => invitee.invited).length &&
      invitees.length > 0;
    const { invite, intro } = this.viewState(view);
    const houseParty = this.houseParty(invitees, party);

    return (
      <div>
        {invite && invitees.length > 0 &&
          <GuestList invitees={invitees} toggleGuest={(invitee) => toggleGuest(invitee)}/>}
        <div className={styles.container}>
        {intro && !invitees.filter((invitee) => invitee.invited).length && message(styles.message)}
          <div className={houseParty}>
            <div className={styles.room}>
              {this.renderFriends(ourFriends, party)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PartyComponent.displayName = "PartyComponent";

PartyComponent.propTypes = {
  ourFriends: PropTypes.array,
  message: PropTypes.func,
  invitees: PropTypes.array,
  view: PropTypes.object,
  toggleGuest: PropTypes.func
};

PartyComponent.defaultProps = {
  ourFriends: [],
  message: () => {
    return `<p>Let's party! Un-comment the all the commented-out lines in the
      playground then check the boxes on the GuestList to invite our friends to the party!</p>`;
  },
  invitees: []
};