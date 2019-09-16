import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SopDetailScreen = props => {
  const sopGuide = props.navigation.getParam('sopGuide');

  return (
    <View style={styles.screen}>
      <Text>{sopGuide.description}</Text>
    </View>
  );
};

SopDetailScreen.navigationOptions = navigationData => {
  const sopGuide = navigationData.navigation.getParam('sopGuide');

  return {
    headerTitle: sopGuide.name,
    headerStyle: {
      backgroundColor: '#6b52ae',
    },
    headerTintColor: '#fff',
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

export default SopDetailScreen;
