import React, { Fragment } from 'react';

import Map from '~/components/Map';
import Modal from '~/components/Modal';

const Main = () => (
  <Fragment>
    <Map />
    <Modal />
  </Fragment>
);

Main.navigationOptions = {
  title: 'MapDevs',
};

export default Main;
