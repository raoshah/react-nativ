import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

// Function to calculate responsive sizes
const wp = (percentage) => {
  return (width * percentage) / 100;
};

const hp = (percentage) => {
  return (height * percentage) / 100;
};

export const Container = styled.View`
  flex: 1;
  padding-left: ${wp(3)}px;  /* 5% of screen width */
  padding-right: ${wp(1)}px;  /* 1% of screen width */
  background-color: #ffffff;
`;

export const Card = styled.TouchableOpacity`
  width: ${wp(90)}px;  /* 10% of screen width */
`;

export const UserInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const UserImgWrapper = styled.View`
  padding-top: ${hp(2)}px;  /* 3% of screen height */
  padding-bottom: ${hp(2)}px;  /* 3% of screen height */
`;

export const UserImg = styled.Image`
  width: ${wp(11.5)}px;  /* 12.5% of screen width */
  height: ${wp(11.5)}px;  /* 12.5% of screen width */
  border-radius: ${wp(12.5) / 2}px;  /* To make it circular */
`;

export const TextSection = styled.View`
  flex-direction: column;
  justify-content: center;
  padding: ${wp(0.25)}px;  /* 0.25% of screen width */
  padding-left: 0;
  margin-left: ${wp(3.)}px;  /* 3.75% of screen width */
  width: ${wp(80)}px;  /* 90% of screen width */
  border-bottom-width: ${wp(0.25)}px;  /* 0.25% of screen width */
  border-bottom-color: #cccccc;
`;

export const UserInfoText = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${hp(1)}px;  /* 1% of screen height */
`;

export const UserName = styled.Text`
  font-size: ${wp(3.5)}px;  /* 3.5% of screen width */
  font-weight: bold;
  font-family: 'Lato-Regular';
`;

export const PostTime = styled.Text`
  font-size: ${wp(3)}px;  /* 3% of screen width */
  color: #666;
  font-family: 'Lato-Regular';
`;

export const MessageText = styled.Text`
  font-size: ${wp(3.5)}px;  /* 3.5% of screen width */
  color: #333333;
`;
