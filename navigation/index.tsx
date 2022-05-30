/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
 import { StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import Home from '../screens/Home';
import Nutrition from '../screens/Nutrition';
import HomeIcon from '../shared/svgs/HomeIcon';
import NutritionIcon from '../shared/svgs/NutritionIcon';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import Shopping from '../screens/Shopping';
import ShoppingIcon from '../shared/svgs/ShoppingIcon';
import Recipes from '../screens/Recipes';
import RecipesIcon from '../shared/svgs/RecipesIcon';
import AccountIcon from '../shared/svgs/AccountIcon';
import Account from '../screens/Account';
import ActiveIndicator from './active-indicator/ActiveIndicator';
import Title from '../shared/text/title/Title';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
      <ActiveIndicator></ActiveIndicator>
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle:{
          flex: 1,
          justifyContent: 'space-evenly',
          paddingTop: 20,
          flexDirection: 'row',
          position: 'absolute',
          backgroundColor: 'white',
          width: '100%',
          bottom: 0,
          height: 90,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: -5,
          },
          shadowOpacity: 0.35,
          shadowRadius: 15
        },
    }}
      >
      <BottomTab.Screen
        name="Shopping"
        component={Shopping}
        options={()=>({
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({color}) => <ShoppingIcon color={color} />
        })}
        />
        <BottomTab.Screen 
        name="Recipes"
        component={Recipes}
        options={()=>({
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({color}) => <RecipesIcon color={color} />
        })}
        />
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={() => ({
          tabBarLabel: '',
          tabBarIcon: ({ color }) => <View style={styles.home}>
            <HomeIcon  color={color} />
          </View>,
          headerShadowVisible: false,
          headerTitleStyle: {
            left: -110
          },
          title: <Title headerStyle>fridged</Title>,
        })}

      />
      <BottomTab.Screen
        name="Nutrition"
        component={Nutrition}
        options={()=>({
          tabBarLabel: '',
          title: 'Nutrition',
          headerShown: false,
          tabBarIcon: ({ color }) => <NutritionIcon color={color} />,
        })}
      />
      <BottomTab.Screen 
        name="Account"
        component={Account}
        options={()=>({
          tabBarLabel: '',
          title: 'Account',
          headerShown: false,
          tabBarIcon: ({ color }) => <AccountIcon color={color} />,
        })}
      />
    </BottomTab.Navigator>
  );
}


const styles = StyleSheet.create({
  home: {
    padding: 20,
    borderRadius: 50,
    backgroundColor: 'white',
    top: -15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10,
  },
});
