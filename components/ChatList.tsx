import {View, Text, Image} from 'react-native';
import React from 'react';
const data = [
  {
    uid: '1',
    name: 'John Doe',
    imageURL: 'https://randomuser.me/api/portraits/men/1.jpg',
    status: 'active',
  },
  {
    uid: '2',
    name: 'Jane Smith',
    imageURL: 'https://randomuser.me/api/portraits/women/2.jpg',
    status: 'inactive',
  },
  {
    uid: '3',
    name: 'Michael Johnson',
    imageURL: 'https://randomuser.me/api/portraits/men/3.jpg',
    status: 'active',
  },
  {
    uid: '4',
    name: 'Emily Davis',
    imageURL: 'https://randomuser.me/api/portraits/women/4.jpg',
    status: 'inactive',
  },
  {
    uid: '5',
    name: 'Chris Brown',
    imageURL: 'https://randomuser.me/api/portraits/men/5.jpg',
    status: 'active',
  },
  {
    uid: '6',
    name: 'Olivia Wilson',
    imageURL: 'https://randomuser.me/api/portraits/women/6.jpg',
    status: 'inactive',
  },
];

const ChatList = () => {
  return (
    <View style={{paddingHorizontal: 10}}>
      <Text style={{fontSize: 30, color: '#000', marginBottom: 10}}>
        Chat List
      </Text>
      <View>
        {data.map(({uid, name, imageURL, status}) => (
          <View
            key={uid}
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <Image
              src={imageURL}
              style={{height: 100, width: 100, borderRadius: 100 / 2}}
            />
            <View style={{marginLeft: 10}}>
              <Text>{name}</Text>
              <Text>{status}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ChatList;
