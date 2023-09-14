import {
  View,
  Text,
  Animated,
  PanResponder,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import TinderCard from './TinderCard';
import CancelIcon from '../../icon/cancel-icon';
import HearthIcon from '../../icon/hearth-icon';
import BackIcon from '../../icon/back-icon';

const TinderSwipeDemo = () => {
  const [data, setData] = useState([
    { image: require('../../../src/nature1.jpg') },
  { image: require('../../../src/nature2.jpg') },
  { image: require('../../../src/nature3.jpg') },
  { image: require('../../../src/nature1.jpg') },
  { image: require('../../../src/nature2.jpg') },
  { image: require('../../../src/nature3.jpg') },
  ]);
  useEffect(() => {
    if (!data.length) {
      setData([
        { image: require('../../../src/nature1.jpg') },
  { image: require('../../../src/nature2.jpg') },
  { image: require('../../../src/nature3.jpg') },
  { image: require('../../../src/nature1.jpg') },
  { image: require('../../../src/nature2.jpg') },
  { image: require('../../../src/nature3.jpg') },
      ]);
    }
  }, [data]);
  const swipe = useRef(new Animated.ValueXY()).current;
  const rotate = useRef(new Animated.Value(0)).current;
  const [removedCards, setRemovedCards] = useState([]);


  const panResponser = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, {dx, dy}) => {
      console.log('dx:' + dx + ' dy:' + dy);
      swipe.setValue({x: dx, y: dy});
    },

    onPanResponderRelease: (_, {dx, dy}) => {
      console.log('released:' + 'dx:' + dx + ' dy:' + dy);
      let direction = Math.sign(dx);
      let isActionActive = Math.abs(dx) > 200;
      if (isActionActive) {
        Animated.timing(swipe, {
          toValue: {x: 500 * dx, y: dy},
          useNativeDriver: true,
          duration: 500,
        }).start(removeCard);
      } else {
        Animated.spring(swipe, {
          toValue: {x: 0, y: 0},
          useNativeDriver: true,
          friction: 5,
        }).start();
      }
    },
  });
  const removeCard = useCallback(() => {
    setData(prepState => {
      const [removedCard, ...rest] = prepState;
      setRemovedCards(prev => [removedCard, ...prev]);
      return rest;
    });
    swipe.setValue({x: 0, y: 0});
  }, [setData, swipe]);
  

  const handelSelection = useCallback(
    (direction: number) => {
      Animated.timing(swipe, {
        toValue: {x: direction * 500, y: 0},
        useNativeDriver: true,
        duration: 500,
      }).start(removeCard);
    },
    [removeCard],
  );
  

  const bringBackCard = useCallback(() => {
    if (removedCards.length > 0) {
      const [lastRemoved, ...rest] = removedCards;
      setRemovedCards(rest);
  
      Animated.spring(swipe, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: true,
        friction: 5,
      }).start();
  
      setData(prepState => [lastRemoved, ...prepState]);
    }
  }, [removedCards, setData, swipe]);
  


  return (
    <View style={{flex: 1}}>
      {data
        .map((item, index) => {
          let isFirst = index === 0;
          let dragHanlders = isFirst ? panResponser.panHandlers : {};
          return (
            <TinderCard
              item={item}
              rotate={rotate}
              isFirst={isFirst}
              swipe={swipe}
              {...dragHanlders}
            />
          );
        })
        .reverse()}

      <View
        style={{
          width: '100%',
          position: 'absolute',
          height: 100,
          bottom: 30,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            backgroundColor: '#fff',
            elevation: 5,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            bringBackCard();
          }}>
          <BackIcon />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            backgroundColor: '#fff',
            elevation: 5,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            handelSelection(-1);
          }}>
          <CancelIcon width={30} height={30} color={'black'}/>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            backgroundColor: '#fff',
            elevation: 5,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            handelSelection(1);
          }}>
          <HearthIcon width={30} height={30} color={'red'}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TinderSwipeDemo;