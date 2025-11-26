/* Definir o fluxo de navegação entre as telas disponivel entre as telas disponiveis em Tab Navigation */ 

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';

const  TabLayout = () =>   {
    return (
    <Tabs screenOptions= {{ 
      tabBarActiveTintColor: "#567c8dd2",
      tabBarInactiveTintColor: "#2F4156",
      headerShown: false,
      tabBarStyle: {
        backgroundColor: "#C8D9E6",
      }
    }}>
        <Tabs.Screen
        name="explorer"
        options={{
          title: 'Explorer',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="cards-heart-outline" color={color} />,
        }}

      />
      <Tabs.Screen
        name="reservation"
        options={{
          title: 'Reservation',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="bag-suitcase-outline" color={color} />,
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="account-circle-outline" color={color} />,
        }}
      />
    </Tabs>
  );
}

export default TabLayout;