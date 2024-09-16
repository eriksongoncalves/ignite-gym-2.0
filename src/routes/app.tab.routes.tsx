import * as React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import colors from 'tailwindcss/colors'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import Entypo from '@expo/vector-icons/Entypo'

import { Home } from '@src/screens/Home'

export type BottomTabParamListBase = {
  home_tab: undefined
  historical_tab: undefined
  profile_tab: undefined
}

const { Navigator, Screen } = createBottomTabNavigator<BottomTabParamListBase>()

export function AppTabRoutes() {
  return (
    <Navigator
      backBehavior="none"
      screenOptions={{
        tabBarActiveTintColor: colors.green['500'],
        tabBarInactiveTintColor: colors.gray['200'],
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 88,
          backgroundColor: colors.gray['600']
        }
      }}
    >
      <Screen
        name="home_tab"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-outline"
              size={30}
              color={color}
            />
          )
        }}
      />
      <Screen
        name="historical_tab"
        component={() => <></>}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo name="back-in-time" size={24} color={color} />
          )
        }}
      />
      <Screen
        name="profile_tab"
        component={() => <></>}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-circle" size={24} color={color} />
          )
        }}
      />
    </Navigator>
  )
}
