import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DeckSwiper from './src/components/deckSwiper/deck-swiper';
import { ExploreActiveIcon, ExploreInactiveIcon } from './src/icon/explore-icon';
import { MapActiveIcon, MapInactiveIcon } from './src/icon/map-icon';
import { CommunityActiveIcon, CommunityInactiveIcon } from './src/icon/community-icon';
import { PlansActiveIcon, PlansInactiveIcon } from './src/icon/plans-icon';
import { Image, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Neomorph } from 'react-native-neomorph-shadows';

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
const BottomTab = () => (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false, headerShown: false,
        tabBarStyle: {
          paddingBottom: 15,
          height: 75
        },
      }}>
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
        name="SettingsScreen"
        component={DeckSwiper}
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
);
const Stack = createNativeStackNavigator();
const NestedDrawerTab = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen options={{ headerShown: false }} name="Root" component={BottomTab} />
    </Stack.Navigator>
  </NavigationContainer>
);
export default NestedDrawerTab;