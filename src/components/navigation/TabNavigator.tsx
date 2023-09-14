import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';
import DeckSwiper from '../../../App';
import HearthIcon from '../../icon/hearth-icon';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
            <Tab.Navigator>
                <Tab.Screen
                    options={{
                        title: 'Library',
                        tabBarIcon: ({ focused }) => {
                            if (focused)
                                return (
                                    <>
                                        <HearthIcon width={30} height={30} />
                                    </>
                                );
                            return <HearthIcon width={30} height={30} />
                        },
                    }}
                    name="LibraryScreen"
                    component={DeckSwiper}
                />
                <Tab.Screen
                    name="Add"
                    component={DeckSwiper}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <HearthIcon width={30} height={30} />
                        ),
                        tabBarButton: ({ children, onPress }) => (
                            <TouchableOpacity onPress={onPress} style={{ top: -30 }}>
                                {children}
                            </TouchableOpacity>
                        ),
                    }}
                />
                <Tab.Screen
                    options={{
                        title: 'Library',
                        tabBarIcon: ({ focused }) => {
                            if (focused)
                                return (
                                    <>
                                        <HearthIcon width={30} height={30} />
                                    </>
                                );
                            return <HearthIcon width={30} height={30} />
                        },
                    }}
                    name="SettingsScreen"
                    component={DeckSwiper}
                />
            </Tab.Navigator>
    );
}

export default TabNavigator;
