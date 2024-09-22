import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View style={style.container}>
      <Text style={{fontSize: 30, color: '#000', marginVertical: 10}}>
        Trending Places
      </Text>
      <View
        style={{
          backgroundColor: '#f39319',
          borderRadius: 15,
        }}>
        <View style={style.ImageContainer}>
          <Image
            // source={{
            //   uri: 'https://images.moneycontrol.com/static-mcnews/2023/04/pexels-ankur-bagai-6440428-770x433.jpg',
            // }}
            src="https://images.moneycontrol.com/static-mcnews/2023/04/pexels-ankur-bagai-6440428-770x433.jpg"
            style={style.image}
          />
        </View>
        <View style={{paddingVertical: 10, paddingHorizontal: 10}}>
          <Text style={style.CardTitle}>Hawa Mahal</Text>
          <Text>Pink City</Text>
          <Text style={{fontSize: 20, marginTop: 7}}>
            The Hawa mahal is a places in the city of jaipur, India. Build from
            red and pink sandstone. it is on the edge of the city places
          </Text>
          <Text style={{marginVertical: 7, fontSize: 20, color: '#000'}}>
            12 mins away
          </Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    elevation: 50,
    marginVertical: 20,
  },
  ImageContainer: {},
  image: {
    height: 260,
    width: '100%',
    borderRadius: 15,
  },
  CardTitle: {
    color: '#000000',
    fontSize: 25,
  },
});
export default FancyCard;
