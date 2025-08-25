import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AntDesign, Entypo, Feather } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
    
      <Tabs.Screen name='index' options={{tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />}}/>
      <Tabs.Screen name='transaction' options={{tabBarIcon: ({ color }) => <AntDesign size={28} name="layout" color={color} />}}/>
      <Tabs.Screen name='wallet' options={{tabBarIcon: ({ color }) => <Entypo size={28} name="wallet" color={color} />}}/>
      <Tabs.Screen name='profile' options={{tabBarIcon: ({ color }) => <Feather size={28} name="user" color={color} />}}/>
    
    </Tabs>
  );
}
