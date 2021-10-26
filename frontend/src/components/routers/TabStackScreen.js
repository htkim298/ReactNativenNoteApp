import * as React from 'react'; 
import { Text, View } from 'react-native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import HomeScreen from 'components/screens/HomeScreen'; 
import HomeDetailScreen from 'components/screens/HomeDetailScreen'; 
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileHomeScreen from 'components/screens/profiles/ProfileHomeScreen';
import WriteScreen from 'components/screens/writes/WriteScreen';

const HomeStack = createStackNavigator(); 
const HomeStackScreen = ({}) => { 
  return ( 
    <HomeStack.Navigator> 
      <HomeStack.Screen
        name='HomeScreen'
        options={{ headerShown: false }}
        component={HomeScreen} 
      />
      <HomeStack.Screen 
        name="HomeDetailScreen"
        options={{ title: 'HomeDetail' }}
        component={HomeDetailScreen}
      />
    </HomeStack.Navigator>
  )
}

// const HomeDetailStack = createStackNavigator();
// const HomeDetailStackScreen = ({ navigation }) => {
//   return (
//     <HomeDetailStack.Navigator>
//       <HomeDetailStack.Screen 
//         name="HomeDetailScreen"
//         options={{ title: 'HomeDetail' }}
//         // options={{ headerShown: false }}
//         component={HomeDetailScreen}
//       />
//     </HomeDetailStack.Navigator>
//   )
// }

const WriteStack = createStackNavigator();
const WriteStackScreen = () => {
  return (
    <WriteStack.Navigator>
      <WriteStack.Screen
        name="WriteScreen"
        options={{ headerShown: false }}
        component={WriteScreen}
      />
    </WriteStack.Navigator>
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
                ? 'ios-home' 
                : 'ios-home-outline';
            } else if (route.name === 'HomeDetail') { 
              iconName = focused ? 'layers' : 'layers-outline'; 
            } else if (route.name === 'Write') { 
              iconName = focused ? 'pencil' : 'pencil-outline'; 
            } else if (route.name === 'Profile') { 
              iconName = focused ? 'ios-person' : 'ios-person-outline'; 
            }
            
            // You can return any component that you like here! 
            return <Ionicons name={iconName} size={29} color={color} />; 
          },
          tabBarStyle: { position: 'absolute' },
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'tomato', 
          tabBarInactiveTintColor: 'gray', 
          headerShown: false,
        })}
        >
        <Tab.Screen name="Home" component={HomeStackScreen} /> 
        {/* <Tab.Screen name="HomeDetail" component={HomeDetailStackScreen} /> */}
        <Tab.Screen name="Write" component={WriteStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator> 
  ); 
} 

export default TabStackScreen;