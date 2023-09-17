import * as React from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DeckSwiper from './src/components/deckSwiper/DeckSwiper';
import { ExploreActiveIcon, ExploreInactiveIcon } from './src/icon/explore-icon';
import { MapActiveIcon, MapInactiveIcon } from './src/icon/map-icon';
import { CommunityActiveIcon, CommunityInactiveIcon } from './src/icon/community-icon';
import { PlansActiveIcon, PlansInactiveIcon } from './src/icon/plans-icon';
import { Animated, Easing, Image, SafeAreaView, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Neomorph } from 'react-native-neomorph-shadows';
import MapScreen from './src/screens/MapScreen/map-screen';
import { useAtom } from 'jotai';
import { snapIndexAtom } from './src/utils/atom';
import * as Animatable from 'react-native-animatable';
import { useEffect } from 'react';

const TabShadow = () => {
  return (
    <LinearGradient
      colors={['rgba(255, 255, 249,0)', '#E4E4E4']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ bottom: 0, height: 10, width: '100%',
    position: 'relative',top: -11 }}
    />
  );
};

const ImageShadow = () => {
  return (
    <Neomorph
      darkShadowColor="white"
      lightShadowColor="black"
      style={{
        shadowOpacity: 0.1,
        shadowRadius: 3,
        borderRadius: 50,
        backgroundColor: 'white',
        width: 78,
        height: 78,
        transform: [{ rotate: '45deg' }],
      }}
    />
  )
}

const Tab = createBottomTabNavigator();
const BottomTab = () => {

  const [snapIndex] = useAtom(snapIndexAtom)
  const [animValue] = React.useState(new Animated.Value(0))

  console.log(snapIndex)

  useEffect(() => {
    let toValue = 0
    if (snapIndex === 2) {
      toValue = 150
    }
    Animated.timing(animValue, {
      toValue,
      duration: 400,
      easing: Easing.linear,
      useNativeDriver: true
    }).start()
  }, [snapIndex])

  return(
  <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
    <Animated.View
       style={{ transform : [{translateY: 0}], flex: 1}}
    >
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false, headerShown: false,
        tabBarStyle: {
          paddingBottom: 0,
          height: 60,
          position:'absolute',
          transform : [{translateY: animValue}]
        },
      }}
      >
      <Tab.Screen
        options={{
          title: 'Explore',
          tabBarIcon: ({ focused }) => {
            if (focused)
              return (
                <>
                  <TabShadow />
                  <ExploreActiveIcon />
                </>
              );
            return (
              <>
                <TabShadow />
                <ExploreInactiveIcon />
              </>
            )

          },
        }}
        name="LibraryScreen"
        component={DeckSwiper}
      />  
      <Tab.Screen
        options={{
          title: 'Map',
          tabBarIcon: ({ focused }) => {
            if (focused)
              return (
                <>
                  <TabShadow />
                  <MapActiveIcon />
                </>
              );
            return (
              <>
              <TabShadow />
                <MapInactiveIcon />
              </>
            )
          },
        }}
        name="MapScreen"
        component={MapScreen}
      />
      <Tab.Screen
        options={{
          title: () => null,
          headerShown: false,
          tabBarIcon: () => (
            <>
              <View style={{
                borderRadius: 50, borderColor: 'white', bottom: 20,
                justifyContent: 'center', alignItems: 'center',
                position: 'absolute',zIndex: -1

              }}>
                <ImageShadow />
                <Image
                  style={{
                    width: 76, height: 76,
                    borderRadius: 50, backgroundColor: '#d2edf4',
                    position: 'absolute', borderWidth: 5,
                    borderColor: 'white'
                  }}
                  source={require('./src/profile-image.png')}
                />
              </View>
            </>
          )
        }}
        name="PlusScreen"
        component={DeckSwiper}
      />
      <Tab.Screen
        options={{
          title: 'Community',
          tabBarIcon: ({ focused }) => {
            if (focused)
              return (
                <>
                  <TabShadow />
                  <CommunityActiveIcon />
                </>
              );
            return (
              <>
              <TabShadow />
                <CommunityInactiveIcon />
              </>
            )
          },
        }}
        name="deck"
        component={DeckSwiper}
      />
      <Tab.Screen
        options={{
          title: 'Plans',
          tabBarIcon: ({ focused }) => {
            if (focused)
              return (
                <>
                  <TabShadow />
                  <PlansActiveIcon />
                </>
              );
            return (
              <>
              <TabShadow />
                <PlansInactiveIcon />
              </>
            )
          },
        }}
        name="plans"
        component={DeckSwiper}
      />

    </Tab.Navigator>
    </Animated.View>
    </SafeAreaView>
  )
};
const Stack = createNativeStackNavigator();
const NestedDrawerTab = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen options={{ headerShown: false }} name="Root" component={BottomTab} />
    </Stack.Navigator>
  </NavigationContainer>
);
export default NestedDrawerTab;