import {View, Text, Dimensions, Image, Animated} from 'react-native';
import React, {useCallback} from 'react';
import TinderLike from './CardText';

const {height, width} = Dimensions.get('window');

const CardImage = ({item, isFirst, swipe, ...rest}: any) => {
  const rotate = swipe.x.interpolate({
    inputRange: [-100, 0, 100],
    outputRange: ['-5deg', '0deg', '5deg'],
  });
  const likeOpacity = swipe.x.interpolate({
    inputRange: [10, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  const rejectOpacity = swipe.x.interpolate({
    inputRange: [-100, -10],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  
  const renderChoice = useCallback(() => {
    return (
      <>
        <Animated.View
          style={[
            {position: 'absolute', top: 30, left: 30},
            {opacity: likeOpacity},
          ]}>
          <TinderLike type={'Yeah'} />
        </Animated.View>
        <Animated.View
          style={[
            {position: 'absolute', top: 30, right: 30},
            {opacity: rejectOpacity},
          ]}>
          <TinderLike type={'Nope'} />
        </Animated.View>
      </>
    );
  }, []);
  return (
    <Animated.View
      style={[
        {
          width: width - 20,
          height: height - 340,
          position: 'absolute',
          top: 100,
          alignItems: 'center',
        },
        isFirst && {
          transform: [...swipe.getTranslateTransform(), {rotate: rotate}],
        },
      ]}
      {...rest}>
      <Image
        resizeMode='cover'
        source={item.image}
        style={{width: '100%', height: '100%', borderRadius: 20}}
      />
      {isFirst && renderChoice()}
        <Text>
          {item.title}
        </Text>
    </Animated.View>
  );
};

export default CardImage;