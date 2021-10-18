import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    TextComponent,
    SafeAreaView,
    FlatList,
    StatusBar,
    Button,
    TouchableOpacity
} from 'react-native';
import HomeScreen from '../screens/home';
import EpisodeScreen from '../screens/episode';
import CharacterScreen from '../screens/character';
import Home from '../screens/home';

const Stack=createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown:false,
                }}
            />
            <Stack.Screen
                name="Episode"
                component={EpisodeScreen}
                options={{
                    title:'Bölümün adı',
                    headerStyle:{
                        backgroundColor:'#f00',
                    },
                    headerTintColor:'#fff',
                    headerTitleStyle:'bold',
                }}
            />
             <Stack.Screen
                name="Character"
                component={CharacterScreen}
                options={{
                    title:'Karakterin adı',
                    headerStyle:{
                        backgroundColor:'#f00',
                    },
                    headerTintColor:'#fff',
                    headerTitleStyle:'bold',
                }}
            />    
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Routes;