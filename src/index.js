import React from 'react';
/* import AddBug from './AddBug/AddBug';
import Guide from './Insects/Guide';
import Bugs from './Insects/Bugs';
 */
import { colors } from './theme'

import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

class AddBug extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home!</Text>
        </View>
      );
    }
  }
  
  class Guide extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Guide</Text>
        </View>
      );
    }
  }

  class Bugs extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Bugs</Text>
        </View>
      );
    }
  }

const TabNavigator = createBottomTabNavigator({
  Home: AddBug,
  Guide: Guide,
  Bugs: Bugs
});

export default createAppContainer(TabNavigator);