import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

const Restaurants = () => {
  const restaurants = [
    {
      name: 'मेडिकल साइंस',
      rating: '4.8 Excellent',
      ratings: '(500+)',
      img: require('../assets/user-6.jpg'),
      distance: '127 User Buy',
      food: [
        {
          category: 'Meal Deals',
          meals: [
            {
              id: 1,
              name: 'Pasta Power ✊',
              price: 17,
              info: 'Includes one garlic bread, one pasta and one soft drink.',
              img: require('../assets/1.png'),
            },
            {
              id: 2,
              name: 'Vegetariano 💚',
              price: 17,
              info: 'Includes one garlic bread, one vegetarian pasta and one soft drink',
              img: require('../assets/1.png'),
            },
            {
              id: 3,
              name: 'Vaps Date 💕',
              price: 40,
              info: 'Includes one garlic bread with or without cheese, choice of two pizzas, one bottle of wine or four bottles of Moretti',
              img: require('../assets/1.png'),
            },
            {
              id: 4,
              name: "Livin' your best life 😎",
              price: 80,
              info: 'Includes two garlic breads with or without cheese, four pizzas, two bottles of wine or eight bottles of beer or a mix of both',
              img: require('../assets/1.png'),
            },
          ],
        },
        {
          category: 'Pasta',
          meals: [
            {
              id: 5,
              name: 'Arrabbiata',
              price: 9.35,
              info: 'Tomato sauce, chilli, garlic, and onions',
              img: require('../assets/1.png'),
            },
            {
              id: 6,
              name: 'Pomodoro e Mozzarella',
              price: 10.75,
              info: 'Tomato sauce, onions, mozzarella',
              img: require('../assets/1.png'),
            },
          ],
        },
        {
          category: 'Pizza',
          meals: [
            {
              id: 7,
              name: 'Salame',
              price: 11.35,
              info: 'Spicy Italian sausage, tomato sauce, mozzarella',
              img: require('../assets/1.png'),
            },
            {
              id: 8,
              name: 'Margherity',
              price: 9.75,
              info: 'Tomato sauce, mozzarella',
              img: require('../assets/1.png'),
            },
          ],
        },
        {
          category: 'Salad',
          meals: [
            {
              id: 9,
              name: 'Insalata Mista Piccola',
              price: 5.99,
              info: 'Mixed leaf salad, cherry tomatoes and grated carrot. There can be no swaps, if you would like to add any extras please customise below.',
              img: require('../assets/1.png'),
            },
            {
              id: 10,
              name: 'Insalata Mista della Casa',
              price: 8.95,
              info: 'Large mixed salad. There can be no swaps, if you would like to add any extras please customise below.',
              img: require('../assets/1.png'),
            },
          ],
        },
      ],
    },

    {
      name: 'लाइब्रेरी साइंस',
      rating: '4.5 Excellent',
      ratings: '(500+)',
      img: require('../assets/user-7.jpg'),
      distance: '150 User Buy',
      food: [
        {
          category: 'Meal Deals',
          meals: [
            {
              id: 1,
              name: 'Pasta Power ✊',
              price: 17,
              info: 'Includes one garlic bread, one pasta and one soft drink.',
              img: require('../assets/1.png'),
            },
            {
              id: 2,
              name: 'Vegetariano 💚',
              price: 17,
              info: 'Includes one garlic bread, one vegetarian pasta and one soft drink',
              img: require('../assets/1.png'),
            },
            {
              id: 3,
              name: 'Vaps Date 💕',
              price: 40,
              info: 'Includes one garlic bread with or without cheese, choice of two pizzas, one bottle of wine or four bottles of Moretti',
              img: require('../assets/1.png'),
            },
            {
              id: 4,
              name: "Livin' your best life 😎",
              price: 80,
              info: 'Includes two garlic breads with or without cheese, four pizzas, two bottles of wine or eight bottles of beer or a mix of both',
              img: require('../assets/1.png'),
            },
          ],
        },
        {
          category: 'Pasta',
          meals: [
            {
              id: 5,
              name: 'Arrabbiata',
              price: 9.35,
              info: 'Tomato sauce, chilli, garlic, and onions',
              img: require('../assets/1.png'),
            },
            {
              id: 6,
              name: 'Pomodoro e Mozzarella',
              price: 10.75,
              info: 'Tomato sauce, onions, mozzarella',
              img: require('../assets/1.png'),
            },
          ],
        },
        {
          category: 'Pizza',
          meals: [
            {
              id: 7,
              name: 'Salame',
              price: 11.35,
              info: 'Spicy Italian sausage, tomato sauce, mozzarella',
              img: require('../assets/1.png'),
            },
            {
              id: 8,
              name: 'Margherity',
              price: 9.75,
              info: 'Tomato sauce, mozzarella',
              img: require('../assets/1.png'),
            },
          ],
        },
        {
          category: 'Salad',
          meals: [
            {
              id: 9,
              name: 'Insalata Mista Piccola',
              price: 5.99,
              info: 'Mixed leaf salad, cherry tomatoes and grated carrot. There can be no swaps, if you would like to add any extras please customise below.',
              img: require('../assets/1.png'),
            },
            {
              id: 10,
              name: 'Insalata Mista della Casa',
              price: 8.95,
              info: 'Large mixed salad. There can be no swaps, if you would like to add any extras please customise below.',
              img: require('../assets/1.png'),
            },
          ],
        },
      ],
    },
    // Add more restaurant objects here as needed
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        padding: 15,
      }}>
      {restaurants.map((restaurant, index) => (
        <TouchableOpacity key={index}>
          <View style={styles.categoryCard}>
            <Image source={restaurant.img} style={styles.image} />
            <View style={styles.categoryBox}>
              <Text style={styles.categoryText}>{restaurant.name}</Text>
              <Text style={{ color: Colors.green }}>{restaurant.rating} {restaurant.ratings}</Text>
              <Text style={{ color: Colors.medium }}>{restaurant.distance}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryCard: {
    width: 300,
    height: 250,
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
    paddingVertical: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  image: {
    flex: 5,
    width: undefined,
    height: undefined,
  },
  categoryBox: {
    flex: 2,
    padding: 10,
  },
});

export default Restaurants;

