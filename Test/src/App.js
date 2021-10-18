
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './navigation/routes'
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
import { styles } from './styles'
import { enableScreens } from 'react-native-screens';
enableScreens();



export default class App extends React.Component {




  render() {

    return (
        <Routes/>
    );

  
  }
  
}

  



const Stack = createNativeStackNavigator();


