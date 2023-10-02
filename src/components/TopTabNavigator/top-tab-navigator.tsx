import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  SafeAreaView,
  StyleSheet
} from 'react-native';

type TabProps = {
  tabs: Tab[],
  activeTab: (tab: Tab) => void,
  activeColor: string,
  inactiveColor: string,
  tabNumber: number,
  activeBackground: string
}

type Tab = {
  id: number;
  text: string;
  x: number;
};


const TabNavigator = ({ tabs, activeTab, activeColor, inactiveColor, tabNumber, activeBackground }: TabProps) => {

  const [active, setActive] = useState(0);
  const [translateX] = useState(new Animated.Value(0));

  const handleSlide = (index: number) => {
    setActive(index);
    Animated.spring(translateX, {
      toValue: tabs[index].x,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F4F8FC' }}>
      <View style={styles.container}>
        <View style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}>
          <View style={styles.tabsContainer}>
            <Animated.View style={[styles.activeTabIndicator, {
              transform: [{ translateX }],
              width: `${(100 / tabNumber)}%`,
              backgroundColor: activeBackground,
            }]} />
            {tabs.map((tab, index: number) => (
              <TouchableOpacity
                key={index}
                style={styles.tab}
                onLayout={(event) => {
                  const newTabs = [...tabs];
                  newTabs[index].x = event.nativeEvent.layout.x;
                }}
                onPress={() => {
                  handleSlide(index)
                  activeTab(tab)
                }}
              >
                <Text style={active === index ? { color: activeColor } : { color: inactiveColor }}>
                  {tab.text}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          {/* <View style={styles.contentContainer}>
            {tabs.map((tab1, index: number) => (
              <Animated.View
                key={index}
              >
                {active === index && tab1.component}
              </Animated.View>
            ))}
          </View> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    height: "100%",
    top: 0,
    left: -1,
    borderRadius: 10,
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  contentText: {
    marginTop: 20,
  },
});

export default TabNavigator;
