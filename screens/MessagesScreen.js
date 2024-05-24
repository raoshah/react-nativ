import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from '../constants/MessageStyles';

const Messages = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../assets/user-3.jpg'),
    messageTime: '4 mins ago',
    messageText:
      'Hey there, this is my test for a post of my study app in React Native.',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../assets/user-1.jpg'),
    messageTime: '2 hours ago',
    messageText:
      'Hey there, this is my test for a post of my study  app in React Native.',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../assets/user-4.jpg'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my study  app in React Native.',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../assets/user-6.jpg'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my study  app in React Native.',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../assets/user-7.jpg'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my study  app in React Native.',
  },
  {
    id: '6',
    userName: 'Jenny Doe',
    userImg: require('../assets/user-3.jpg'),
    messageTime: '4 mins ago',
    messageText:
      'Hey there, this is my test for a post of my study  app in React Native.',
  },
  {
    id: '7',
    userName: 'John Doe',
    userImg: require('../assets/user-1.jpg'),
    messageTime: '2 hours ago',
    messageText:
      'Hey there, this is my test for a post of my study  app in React Native.',
  },
  {
    id: '8',
    userName: 'Ken William',
    userImg: require('../assets/user-4.jpg'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my study  app in React Native.',
  },
  {
    id: '9',
    userName: 'Selina Paul',
    userImg: require('../assets/user-6.jpg'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '10',
    userName: 'Christy Alex',
    userImg: require('../assets/user-7.jpg'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
];

const MessagesScreen = ({navigation}) => {
    return (
      <Container>
        <FlatList 
          data={Messages}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            <Card onPress={() => navigation.navigate('Chating', {userName: item.userName})}>
              <UserInfo>
                <UserImgWrapper>
                  <UserImg source={item.userImg} />
                </UserImgWrapper>
                <TextSection>
                  <UserInfoText>
                    <UserName>{item.userName}</UserName>
                    <PostTime>{item.messageTime}</PostTime>
                  </UserInfoText>
                  <MessageText>{item.messageText}</MessageText>
                </TextSection>
              </UserInfo>
            </Card>
          )}
        />
      </Container>
    );
};

export default MessagesScreen;

