import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  ScrollView,
  Image,
  Dimensions,
  SafeAreaView,
  StyleSheet
} from "react-native";


const { width } = Dimensions.get("window");

const tabAdeti = 6;


const TabNavigator = () => {
  const [active, setactive] = useState(0);
  const [xTabOne, setxTabOne] = useState(0)
  const [xTabTwo, setxTabTwo] = useState(0)
  const [xTabThree, setxTabThree] = useState(0);
  const [xTabFour, setxTabFour] = useState(0)
  const [xTabFive, setxTabFive] = useState(0)
  const [xTabsix, setxTabSix] = useState(0)
  const [translateY, settranslateY] = useState(-1000)

  const translateX = useRef(new Animated.Value(0)).current;
  const translateXTabOne = useRef(new Animated.Value(0)).current;
  const translateXTabTwo = useRef(new Animated.Value(width)).current;
  const translateXTabThree = useRef(new Animated.Value(width)).current;
  const translateXTabFour = useRef(new Animated.Value(width)).current;
  const translateXTabFive = useRef(new Animated.Value(width)).current;


  useEffect(() => {
  }, []);

  const handleSlide = (type: number) => {
    setactive(0)
    Animated.spring(translateX, {
      toValue: type,
      duration: 100,
      useNativeDriver: true
    }).start();
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F4F8FC' }}>
      <View style={styles.container}>
        <View style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}>
          <View style={styles.tabsContainer}>
            <Animated.View style={[styles.activeTabIndicator, { transform: [{ translateX }] }]} />

            <TouchableOpacity
              style={styles.tab}
              onLayout={(event) => setxTabOne(event.nativeEvent.layout.x)}
              onPress={() => handleSlide(xTabOne - 2)}
            >
              <Text style={active === 0 ? styles.tabText : styles.inactiveTabText}>
                Tab One
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tab}
              onLayout={(event) => setxTabTwo(event.nativeEvent.layout.x)}
              onPress={() =>handleSlide(xTabTwo)}
            >
              <Text style={active === 0 ? styles.tabText : styles.inactiveTabText}>
                Tab One
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tab}
              onLayout={(event) => setxTabThree(event.nativeEvent.layout.x)}
              onPress={() => handleSlide(xTabThree)}
            >
              <Text style={active === 0 ? styles.tabText : styles.inactiveTabText}>
                Tab One
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tab}
              onLayout={(event) => setxTabFour(event.nativeEvent.layout.x)}
              onPress={() =>handleSlide(xTabFour)}
            >
              <Text style={active === 0 ? styles.tabText : styles.inactiveTabText}>
                Tab One
              </Text>
            </TouchableOpacity>

            
          </View>

          <ScrollView>
            <Animated.View
              style={[styles.contentContainer, { transform: [{ translateX: translateXTabOne }, { translateY: translateY }] }]}
              onLayout={(event) => settranslateY(event.nativeEvent.layout.height)}
            >
              <Text>Hi, I am a cute cat</Text>
              <View style={styles.contentText}>
                {/* Content for Tab One */}
              </View>
            </Animated.View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
  },
  tabsContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 20,
    height: 40,
    position: "relative",
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  activeTabIndicator: {
    position: "absolute",
    width: (150/tabAdeti)+'%',
    height: "100%",
    top: 0,
    left: 0,
    backgroundColor: "green",
    borderRadius: 10,
  },
  tabText: {
    color: "#fff",
  },
  inactiveTabText: {
    color: "#007aff",
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  contentText: {
    marginTop: 20,
  },
};

export default TabNavigator;
