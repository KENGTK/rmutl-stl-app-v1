import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class _ReadNews extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ScrollView>
        <View style={{ paddingHorizontal: 20, paddingVertical:20 }}>
          <Text>{this.props.newsId}</Text>
        </View>
      </ScrollView>
    );
  }
}
