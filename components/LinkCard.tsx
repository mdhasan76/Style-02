import {View, Text, Image, StyleSheet, Linking} from 'react-native';
import React from 'react';

const LinkCard = () => {
  const handleLink = (url: string) => {
    Linking.openURL(url);
  };
  return (
    <View style={style.container}>
      <Text style={{fontSize: 30, color: '#000', marginBottom: 10}}>
        Link Card
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
          <Text style={{fontSize: 20, marginTop: 7}} numberOfLines={2}>
            The Hawa mahal is a places in the city of jaipur, India. Build from
            red and pink sandstone. it is on the edge of the city places
          </Text>
          <View style={style.socialContainer}>
            <Text
              style={[style.button]}
              onPress={() =>
                handleLink('https://reactnative.dev/docs/linking')
              }>
              See More
            </Text>
            <Text
              style={[style.button]}
              onPress={() =>
                handleLink('https://www.facebook.com/DeveloperMdHasan')
              }>
              Follow
            </Text>
          </View>
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
  button: {
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 15,
    marginVertical: 7,
    fontSize: 20,
    color: '#000',
    borderRadius: 5,
  },
  socialContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default LinkCard;
