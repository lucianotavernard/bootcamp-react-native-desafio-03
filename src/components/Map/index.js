import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as UsersActions } from "~/store/ducks/users";

import MapboxGL from "@mapbox/react-native-mapbox-gl";
import UserPin from "../UserPin";

import styles from "./styles";

MapboxGL.setAccessToken(
  "pk.eyJ1IjoibHVjaWFub3RhdmVybmFyZCIsImEiOiJjanZuMTJzdGsxajZxNDN1aXZ1bjliYWZ2In0.RLhO0SUfDxfWNdfUUnoFLw"
);

class Map extends Component {
  static propTypes = {
    users: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          username: PropTypes.string.isRequired,
          avatar_url: PropTypes.string.isRequired,
          coordenates: PropTypes.shape({
            latitude: PropTypes.number,
            longitude: PropTypes.number
          }).isRequired
        })
      ).isRequired
    })
  };

  state = {
    latitude: -5.81622313,
    longitude: -35.21520224
  };

  render() {
    const { longitude, latitude } = this.state;
    const {
      users: { data: users }
    } = this.props;

    return (
      <MapboxGL.MapView
        centerCoordinate={[longitude, latitude]}
        showUserLocation
        styleURL={MapboxGL.StyleURL.Dark}
        style={styles.container}
      >
        {users.map(user => (
          <UserPin key={user.id} user={user} />
        ))}
      </MapboxGL.MapView>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UsersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
