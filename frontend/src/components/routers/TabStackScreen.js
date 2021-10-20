import * as React from 'react'; 
import { Text, View } from 'react-native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import HomeScreen from 'components/screens/HomeScreen'; 
import HomeDetail from 'components/screens/HomeDetailScreen'; 
import Ionicons from 'react-native-vector-icons/Ionicons'; 

const HomeStack = createStackNavigator(); 
const HomeStackScreen = ({}) => {
  return ( 
    <HomeStack.Navigator> 
      <HomeStack.Screen 
        name='Home'
        component={HomeScreen} 
      /> 
    </HomeStack.Navigator> 
  )
}

const Tab = createBottomTabNavigator();
const TabStackScreen = () => {
  return ( 
      <Tab.Navigator
        screenOptions={({ route }) => ({ 
          tabBarIcon: ({ focused, color, size }) => { 
            let iconName;
            if (route.name === 'HomeScreen') { 
              iconName = focused 
                ? 'ios-information-circle' 
                : 'ios-information-circle-outline'; 
            } else if (route.name === 'HomeDetail') { 
              iconName = focused ? 'ios-list-circle' : 'ios-list-circle-outline'; 
            }
            // You can return any component that you like here! 
            return <Ionicons name={iconName} size={size} color={color} />; 
          },
          tabBarActiveTintColor: 'tomato', 
          tabBarInactiveTintColor: 'gray', 
          headerShown: false
        })}
        > 
        <Tab.Screen name="HomeScreen" component={HomeStackScreen} /> 
        <Tab.Screen name="HomeDetail" component={HomeDetail} /> 
      </Tab.Navigator> 
  ); 
} 
export default TabStackScreen;