import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { AuthContext } from '../context';
import  Categories  from '../components/Categories'
import Restaurants from '../components/Restaurants';
import TopPlacesCarousel from '../components/TopPlacesCarousel'
import ScreenHeader from '../components/ScreenHeader';
import SectionHeader from '../components/SectionHeader';
import TripsList from '../components/TripsList';

const TOP_PLACES = [
  {
    id: 1,
    image: require('../assets/user-1.jpg'),
    title: 'लाइब्रेरी साइंस',
    location: 'लाइब्रेरी साइंस',
    description:
      'The ultimate Amalfi Coast travel guide, where to stay, where to eat, and what areas to visit in the Amalfi Coast of Italy. Positano, Ravello, Amalfi and more',
  },
  {
    id: 2,
    image: require('../assets/user-3.jpg'),
    title: 'लाइब्रेरी साइंस',
    location: 'लाइब्रेरी साइंस',
    description:
      'Granada is the capital city of the province of Granada, in the autonomous community of Andalusia, Spain',
  },
  {
    id: 3,
    image: require('../assets/user-2.jpg'),
    title: 'लाइब्रेरी साइंस',
    location: 'लाइब्रेरी साइंस',
    description:
      "Cherry blossoms usually bloom between mid-March and early May. In 2022, Tokyo's cherry blossom season officially began on March 20",
  },
];

const PLACES = [
  {
    id: 4,
    image: require('../assets/user-8.jpg'),
    title: 'लाइब्रेरी साइंस',
    location: 'वह विज्ञान है',
    description:
      "Cappadocia's landscape includes dramatic expanses of soft volcanic rock, shaped by erosion into towers, cones, valleys, and caves. Rock-cut churches and underground tunnel complexes from the Byzantine and Islamic eras are scattered throughout the countryside.",
  },
  {
    id: 5,
    image: require('../assets/user-7.jpg'),
    title: 'library Science',
    location: 'all about ',
    description:
      'Capri is an island of a thousand faces, where visitors can walk the trails skirting the cliffs above the Mediterranean in total solitude, dive into the crystalline waters of its rocky shore, or plunge into the vibrant crowds of the Piazzetta and shop in the most fashionable boutiques in the world.',
  },
  {
    id: 6,
    image: require('../assets/user-6.jpg'),
    title: 'Rajasthan GK',
    location: 'History of rajasthan',
    description:
      'Learn how you can travel Bora Bora on a budget and how overwater bungalows are possible for cheap plus tips on keeping Bora Bora trip costs low.',
  },
  {
    id: 7,
    image: require('../assets/user-5.jpg'),
    title: 'Science',
    location: 'Computer Science',
    description:
      'Phuket is the largest island in Thailand. It is located in the Andaman Sea in southern Thailand',
  },
];

const DetailsScreen = ({ navigation }) => {
  const { token, updateToken } = useContext(AuthContext);
  

  return (
    
    <ScrollView style={styles.container}>
      <ScreenHeader mainTitle="Grow Your Study" secondTitle="With Narayan" />
      <TopPlacesCarousel list={TOP_PLACES}  />
      <SectionHeader
          title="Popular Courses"
          buttonTitle="See All"
          onPress={() => {}}
        />
         <TripsList list={PLACES} />
         <SectionHeader
          title="Category"
          buttonTitle="See All"
          onPress={() => {}}
        />
      <Categories />
      <SectionHeader
          title="Faverite Courses"
          buttonTitle="See All"
          onPress={() => {}}
        />
      <Restaurants />
     
    </ScrollView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
});
