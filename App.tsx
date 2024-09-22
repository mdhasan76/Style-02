import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import LinkCard from './components/LinkCard';
import ChatList from './components/ChatList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCard />
        <FancyCard />
        <LinkCard />
        <ChatList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
