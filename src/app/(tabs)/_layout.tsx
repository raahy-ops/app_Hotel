/* Definir o fluxo de navegação entre as telas disponivel entre as telas disponiveis em Tab Navigation */ 


import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

const  TabLayout = () =>   {
    return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
        <Tabs.Screen
        name="explorer"
        options={{
          title: 'Explorer',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="reservation"
        options={{
          title: 'Reservation',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="suitcase" color={color} />,
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}

export default TabLayout;