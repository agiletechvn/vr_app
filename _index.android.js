/**
 * Copyright (c) 2015-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import {
  ViroSceneNavigator,
} from 'react-viro';

var InitialScene = require('./js/HelloWorldScene');

export default class ViroSample extends Component {
  render() {
    return (
      <ViroSceneNavigator apiKey="25AFA21A-7F56-4D03-AB8B-B3F930612399"
        initialScene={{scene: InitialScene}}
        />
    );
  }
}

AppRegistry.registerComponent('kokosee', () => ViroSample);

// The below line is necessary for use with the TestBed App
AppRegistry.registerComponent('ViroSample', () => ViroSample);

