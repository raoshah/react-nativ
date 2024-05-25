import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const ProfileScreen = ({ tokens }) => {
  const [postData, setPostData] = useState([]);
  const [postContent, setPostContent] = useState('');
  const [isPostButtonDisabled, setIsPostButtonDisabled] = useState(true);
  const scrollViewRef = useRef();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  }, [postData]);

  useEffect(() => {
    setIsPostButtonDisabled(postContent.trim() === '');
  }, [postContent]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://raoshah.pythonanywhere.com', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + tokens.access
        },
      });
      if (response.ok) {
        const data = await response.json();
        setPostData(data);
      } else {
        throw new Error('Failed to fetch posts');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handlePost = async () => {
    try {
      const response = await fetch('https://raoshah.pythonanywhere.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + tokens.access
        },
        body: JSON.stringify({ post: postContent })
      });

      if (response.ok) {
        setPostContent('');
        fetchData(); // Refetch posts after successful creation
      } else {
        throw new Error('Failed to create post');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Failed to create post');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
      >
        <View>
          {postData.map((item, index) => (
            <View key={index} style={styles.postContainer}>
              <Text style={styles.postText}>{item.post}</Text>
              <Text style={styles.authorText}>Author: {item.username}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          multiline
          placeholder="Write your post here"
          value={postContent}
          onChangeText={text => setPostContent(text)}
        />
        <Button
          title="Post"
          onPress={handlePost}
          disabled={isPostButtonDisabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    height: 50,
    marginRight: 10,
    padding: 10,
  },
  postContainer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  postText: {
    fontSize: 16,
  },
  authorText: {
    fontSize: 12,
    color: '#666',
  },
});

export default ProfileScreen;
