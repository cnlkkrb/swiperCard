import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import {
  AnimatedTabBarNavigator,
  DotSize,
  TabElementDisplayOptions,
} from 'react-native-animated-nav-tab-bar';

const Tabs = AnimatedTabBarNavigator();


const Home = (props: any) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f2f2f2' }} >
    <Text>Home</Text>
    <TouchableOpacity onPress={() => props.navigation.navigate('Discover')}>
      <Text>Go to Discover</Text>
    </TouchableOpacity>
  </View>
);

const Discover = (props: any) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f2f2f2' }} >
    <Text>Discover</Text>
    <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
      <Text>Go to Home</Text>
    </TouchableOpacity>
  </View>
);

const Images = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f2f2f2' }} >
    <Text>Images</Text>
  </View>
);

const Profile = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f2f2f2' }} >
    <Text>Profile</Text>
  </View>
);

const Settings = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f2f2f2' }} >
      <Text>Settings</Text>
    </View>
  );
  
const CommunityScreen = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#F4F8FC' }}>
    <View style={{ flex: 1, marginTop: 10}}>
    <Tabs.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        inactiveTintColor: '#223322',
        activeBackgroundColor: '#98FB98',
      }}
      appearance={{
        shadow: true,
        floating: true,
        whenActiveShow: TabElementDisplayOptions.ICON_ONLY,
        dotSize: DotSize.SMALL,
      }}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Text style={{color:focused==true?'green':'green'}} >Home</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarIcon: ({ focused }) => (
            <Text style={{color:focused==true?'green':'green'}} >Discover</Text>
          )
        }}
      />
      <Tabs.Screen
        name="Images"
        component={Images}
        options={{
          tabBarIcon: ({ focused }) => (
            <Text style={{color:focused==true?'green':'green'}} >Images</Text>
          )
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Text style={{color:focused==true?'green':'green'}} >Profile</Text>
          )
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <Text style={{color:focused==true?'green':'green'}} >Settings</Text>
          )
        }}
      />
    
    </Tabs.Navigator>
    </View>
  </SafeAreaView>
);

export default CommunityScreen;