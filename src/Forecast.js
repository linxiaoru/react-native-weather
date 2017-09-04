import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

function Forecast({ main, description, temp }) {
  return (
    <View>
      <Text style={styles.bigText}>
        {main}
      </Text>
      <Text style={styles.mainText}>
        Current coditions: {description}
      </Text>
      <Text style={styles.bigText}>
        {temp}℉
      </Text>
    </View>
  )
}

var styles = StyleSheet.create({
  bigText: {
    flex: 2,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFF'
  },
  mainText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: '#FFF'
  }
});

export default Forecast;