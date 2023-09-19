import {
  View,
  Text,
  Animated,
  PanResponder,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import TinderCard from './CardImage';
import CancelIcon from '../../icon/cancel-icon';
import HearthIcon from '../../icon/hearth-icon';
import BackIcon from '../../icon/back-icon';
import PaginationIndicator from '../PaginationIndicator/pagination-indicator';
import IconButton from '../button/button';

const TinderSwipeDemo = () => {

  const swipe = useRef(new Animated.ValueXY()).current;
  const rotate = useRef(new Animated.Value(0)).current;
  const [removedCards, setRemovedCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const dotAnimation = new Animated.Value(currentIndex);
  const [cardHareket] = useState([]);

  const [data, setData] = useState([
    { image: require('../../../src/nature1.jpg') },
    { image: require('../../../src/nature2.jpg') },
    { image: require('../../../src/nature3.jpg') },
    { image: require('../../../src/nature1.jpg') },
    { image: require('../../../src/nature2.jpg') },
    { image: require('../../../src/nature3.jpg') },
  ]);

  const [dataPagi, setDataPagi] = useState([
    { image: require('../../../src/nature1.jpg') },
    { image: require('../../../src/nature2.jpg') },
    { image: require('../../../src/nature3.jpg') },
    { image: require('../../../src/nature1.jpg') },
    { image: require('../../../src/nature2.jpg') },
    { image: require('../../../src/nature3.jpg') },
  ]);

  useEffect(() => {
    if (currentIndex === dataPagi.length) {
      console.log("All cards are finished!");
    }
  }, [currentIndex, data]);
    
  const panResponser = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, { dx, dy }) => {
      swipe.setValue({ x: dx, y: dy });
    },

    onPanResponderRelease: (_, { dx, dy }) => {
      let direction = Math.sign(dx);
      let isActionActive = Math.abs(dx) > 200;
      if (isActionActive) {
        Animated.timing(swipe, {
          toValue: { x: 500 * dx, y: dy },
          useNativeDriver: true,
          duration: 500,
        }).start(() => removeCard(direction == -1 ? 0 : 1));
        console.log(direction === 1 ? "Swiped right" : "Swiped left");
      } else {
        Animated.spring(swipe, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
          friction: 5,
        }).start();
      }
    },
  });

  const removeCard = useCallback(async (direction: number) => {
    setData(prepState => {
      const [removedCard, ...rest] = prepState;
      setRemovedCards(prev => [removedCard, ...prev]);
      cardHareket.push(direction)
      return rest;
    });
    swipe.setValue({ x: 0, y: 0 });
  }, [setData, swipe]);

  const bringBackCard = useCallback(async () => {
    if (removedCards.length > 0) {
      const SonHareket = cardHareket[cardHareket.length - 1];
      swipe.setValue({ x: SonHareket == 0 ? -500 : 500, y: 0 });
      const [lastRemoved, ...rest] = removedCards;
      setRemovedCards(rest);
      await setData(prepState => [lastRemoved, ...prepState]);
      Animated.timing(swipe, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: true,
        duration: 500,
      }).start();

      await cardHareket.splice(cardHareket.length - 1, 1)
      setCurrentIndex(cardHareket.length);
      dotAnimation.setValue(cardHareket.length);
    }
  }, [removedCards, setData, swipe]);

  const handelSelection = useCallback(
    async (direction: number) => {
      Animated.timing(swipe, {
        toValue: { x: direction * 500, y: 0 },
        useNativeDriver: true,
        duration: 500,
      }).start(() => removeCard(direction == -1 ? 0 : 1));
      setCurrentIndex(currentIndex + 1);
    },
    [() => removeCard(0)],
  );

  useEffect(() => {
    dotAnimation.setValue(currentIndex);
    Animated.spring(dotAnimation, {
      toValue: currentIndex,
      useNativeDriver: true,
    }).start();
  }, [currentIndex]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
      <View style={{
        flexDirection: 'row', justifyContent: 'center',
        alignItems: 'center'
      }}>
        <PaginationIndicator currentIndex={cardHareket.length} dotAnimation={dotAnimation} cards={dataPagi} />
      </View>
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

      <View style={styles.buttonRow}>
        <IconButton
          color='#F8A549'
          onPress={() => bringBackCard()}
          icon={<BackIcon width={30} height={30} />}
        />
        <IconButton
          color='#F35067'
          onPress={() => handelSelection(-1)}
          icon={<CancelIcon width={20} height={20} />}
        />
        <IconButton
          color='#33BCA3'
          onPress={() => handelSelection(1)}
          icon={<HearthIcon width={35} height={25} />}
        />
      </View>
      <TouchableOpacity style={styles.skipButton}>
          <Text style={{ textAlign: 'center', color: 'black' }}>Skip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    bottom: 160,
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  skipButton: {
    bottom: 140,
  },
})

export default TinderSwipeDemo;