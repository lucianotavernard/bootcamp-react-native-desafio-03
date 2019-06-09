import React from 'react';
import PropTypes from 'prop-types';

import MapboxGL from '@mapbox/react-native-mapbox-gl';

import { Image } from './styles';

const UserPin = ({ user }) => (
  <MapboxGL.PointAnnotation
    id={user.username}
    coordinate={[user.coordenates.longitude, user.coordenates.latitude]}
  >
    <Image source={{ uri: user.avatar_url }} />
    <MapboxGL.Callout title={user.name} />
  </MapboxGL.PointAnnotation>
);

UserPin.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    coordenates: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default UserPin;
