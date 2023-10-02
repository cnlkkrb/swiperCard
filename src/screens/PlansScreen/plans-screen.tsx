import React from 'react';
import TabNavigator from '../../components/TopTabNavigator/top-tab-navigator';

const PlansScreen = () => {
  const tabs = [
    {id:1, text: 'Tab One', x: 0},
    {id:2, text: 'Tab Two', x: 0 },
    {id:3, text: 'Tab Three', x: 0},
    {id:4, text: 'Tab Four', x: 0},
  ];

  const handleActiveTab = (tab: any) => {
    console.log(tab);
  };

  return (
    <TabNavigator 
        tabs={tabs} 
        activeTab={handleActiveTab}
        activeColor='black'
        inactiveColor='red'    
        tabNumber={4}
        activeBackground='green'
    />
  );
};

export default PlansScreen;
