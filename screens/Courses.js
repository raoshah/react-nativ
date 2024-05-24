import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const DetailsScreen = ({ navigation }) => {

  const courses = [
    {
      id: 1,
      name: "Free Quiz from Rajasthan GK (राजस्थान सामान्य ज्ञान) पूर्ण तैयारी",
      price: 0
    },
    {
      id: 2,
      name: "RK Narayan Books in Hindi: जानिए आर के नारायण की कालजयी रचनाओं के बारे में",
      price: 499
    },
    {
      id: 3,
      name: "CGBSE 10th, 12th Result 2024 Direct link : लगभग 8 लाख स्टूडेंट्स का इंतजार हुआ खत्म, 10वीं में सिमरन शब्बा और 12वीं में महक अग्रवाल ने किया टॉप",
      price: 699
    },

    {
      id: 4,
      name: "International Nurses Day : हर साल 12 मई को ही क्यों मनाया जाता अंतर्राष्ट्रीय नर्स दिवस? जानें इतिहास",
      price: 300
    },
    {
      id: 5,
      name: "RK Narayan Books in Hindi: जानिए आर के नारायण की कालजयी रचनाओं के बारे में",
      price: 499
    },
    {
      id: 6,
      name: "जानें ‘आसन डोलना’ मुहावरे का अर्थ और इसका वाक्य में प्रयोग",
      price: 699
    },

    {
      id: 7,
      name: "International Nurses Day : हर साल 12 मई को ही क्यों मनाया जाता अंतर्राष्ट्रीय नर्स दिवस? जानें इतिहास",
      price: 300
    },
    {
      id: 8,
      name: "CGBSE 10th, 12th Result 2024 Direct link : लगभग 8 लाख स्टूडेंट्स का इंतजार हुआ खत्म, 10वीं में सिमरन शब्बा और 12वीं में महक अग्रवाल ने किया टॉप",
      price: 499
    },
    {
      id: 9,
      name: "RK Narayan Books in Hindi: जानिए आर के नारायण की कालजयी रचनाओं के बारे में",
      price: 699
    }
  ];

  return (
    <ScrollView style={styles.container} >
      {courses.map((course) => (
        <TouchableOpacity onPress={() => navigation.navigate("Quiz")} key={course.id} style={styles.courseContainer}>
          <Image
            source={require("../assets/cou.png")}
            style={{
              height: 90,
              width: 100,
              borderRadius: 10,

            }}
          />
          <View style={styles.detail} >
            <Text style={styles.category} >Library Science </Text>
            <Text style={styles.name} >{course.name} </Text>
            <Text style={styles.price} >₹{course.price}</Text>
            <View style={styles.line} />
          </View>
          
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    
    marginBottom: 0
  },
  line: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'black',
    marginVertical: 10,
  },
  courseContainer: {
    marginTop: 18,
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center"

  },
  pressable: {
    backgroundColor: "white",
    height: 220,
    borderRadius: 7,
    marginTop: 20,
    padding: 10
  },
  courseText: {
    fontSize: 18
  },
  category: {
    fontSize: 14,
    backgroundColor: "white",
    marginBottom: 2,
    marginRight: 300
  },
  detail: {
    marginLeft: 20,
    marginTop: 10
  },
   name: {
    fontSize: 17,
    marginRight: 100

   },
   price: {
    fontSize: 17,
    marginTop: 6,
    backgroundColor: "white",
    marginRight: 400

   }
});

export default DetailsScreen;


