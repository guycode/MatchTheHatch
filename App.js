import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Tabs from './src'


export default class App extends React.Component {
  render() {
    return <Tabs />
    }
  }