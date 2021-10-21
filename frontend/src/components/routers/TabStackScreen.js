import * as React from 'react'; 
import { Text, View } from 'react-native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import HomeScreen from 'components/screens/HomeScreen'; 
import HomeDetail from 'components/screens/HomeDetailScreen'; 
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileHomeScreen from 'components/screens/profiles/ProfileHomeScreen';

const HomeStack = createStackNavigator(); 
const HomeStackScreen = ({}) => { 
  return ( 
    <HomeStack.Navigator> 
      <HomeStack.Screen
        name='HomeScreen'
        options={{ headerShown: false }}
        component={HomeScreen} 
      /> 
    </HomeStack.Navigator> 
  ) 
} 

const ProfileStack = createStackNavigator(); 
const ProfileStackScreen = ({}) => { 
  return ( 
    <ProfileStack.Navigator> 
      <ProfileStack.Screen
        name='ProfileScreen'
        options={{ headerShown: false }}
        component={ProfileHomeScreen} 
      /> 
    </ProfileStack.Navigator> 
  ) 
} 

const Tab = createBottomTabNavigator(); 
const TabStackScreen = () => { 
  return ( 
      <Tab.Navigator  
        screenOptions={({ route }) => ({ 
          tabBarIcon: ({ focused, color, size }) => { 
            let iconName; 
            if (route.name === 'Home') { 
              iconName = focused 
                ? 'ios-home-sharp' 
                : 'ios-home-outline'; 
            } else if (route.name === 'HomeDetail') { 
              iconName = focused ? 'ios-list-circle' : 'ios-list-circle-outline'; 
            } else if (route.name === 'Profile') { 
              iconName = focused ? 'ios-person-circle-sharp' : 'ios-person-circle-outline'; 
            } 
            
            // You can return any component that you like here! 
            return <Ionicons name={iconName} size={size} color={color} />; 
          },
          tabBarStyle: { position: 'absolute' },
          tabBarActiveTintColor: 'tomato', 
          tabBarInactiveTintColor: 'gray', 
          headerShown: false 
        })} 
        > 
        <Tab.Screen name="Home" component={HomeStackScreen} /> 
        <Tab.Screen name="HomeDetail" component={HomeDetail} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator> 
  ); 
} 

export default TabStackScreen;