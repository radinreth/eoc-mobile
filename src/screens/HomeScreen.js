import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, List, ListItem, Text, Icon} from 'native-base';
import { data } from '../data'

const HomeScreen = props => {

  const handleListPress = item => {
    props.navigation.navigate({
      routeName: 'SopDetail',
      params: {
        sopGuide: item,
      },
    });
  };

  return (
    <Container>
      <Content>
        <List
          dataArray={data}
          keyExtractor={item => item.id.toString()}
          renderRow={item => {
            return (
              <ListItem onPress={handleListPress.bind(this, item)}>
                <Text>{item.name}</Text>
              </ListItem>
            );
          }}
        />
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  icon: {
    color: '#fff',
    fontSize: 26,
    marginEnd: 10,
  },
});

HomeScreen.navigationOptions = {
  headerTitle: 'Recent guideline',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerRight: <Icon name="md-search" style={styles.icon} />,
};

export default HomeScreen;
