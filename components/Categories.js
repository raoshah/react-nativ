import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import React from 'react';


const categories = [
  {
    text: 'Science',
    img: require('../assets/user-1.jpg'),
  },
  {
    text: 'Mathamatic',
    img: require('../assets/user-2.jpg'),
  },
  {
    text: 'Physics',
    img: require('../assets/user-3.jpg'),
  },
  {
    text: 'Neet',
    img: require('../assets/user-4.jpg'),
  },
  {
    text: 'History',
    img: require('../assets/user-5.jpg'),
  },
  {
    text: 'Pharmacy',
    img: require('../assets/user-6.jpg'),
  },
];

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        padding: 15,
      }}>
      {categories.map((category, index) => (
        <View style={styles.categoryCard} key={index}>
          <Image
            source={category.img}
            style={{
              height: 70,
              width: 100,
              borderRadius: 4,

            }} />
          <Text style={styles.categoryText}>{category.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  categoryCard: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    marginEnd: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    borderRadius: 4,
  },
  categoryText: {
    padding: 6,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Categories;
