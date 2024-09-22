import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const ElevatedCard = () => {
  return (
    <View>
      <Text style={style.titleText}>ElevatedCard</Text>
      <ScrollView horizontal>
        <View style={style.container}>
          <View style={[style.card, style.cardOne]}>
            <Text>Red</Text>
          </View>
          <View style={[style.card, style.cardTwo]}>
            <Text>Red</Text>
          </View>
          <View style={[style.card, style.cardThree]}>
            <Text>Red</Text>
          </View>
          <View style={[style.card, style.cardOne]}>
            <Text>Red</Text>
          </View>
          <View style={[style.card, style.cardTwo]}>
            <Text>Red</Text>
          </View>
          <View style={[style.card, style.cardThree]}>
            <Text>Red</Text>
          </View>
          <View style={[style.card, style.cardOne]}>
            <Text>Red</Text>
          </View>
          <View style={[style.card, style.cardTwo]}>
            <Text>Red</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const style = StyleSheet.create({
  titleText: {
    fontSize: 24,
    paddingTop: 10,
    paddingLeft: 10,
    color: '#000000',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
  },
  cardOne: {
    backgroundColor: '#1abc9c',
  },
  cardTwo: {
    backgroundColor: '#8e44ad',
  },
  cardThree: {
    backgroundColor: '#3498db',
  },
});
// #e74c3c
// #8e44ad
// #3498db
// #34495e
// #f39c12
export default ElevatedCard;
