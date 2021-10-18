import React from 'react';
import {styles} from '../styles'
import { 
  SafeAreaProvider,
  SafeAreaView } from 'react-native-safe-area-context';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    TextComponent,
    FlatList,
    StatusBar,
    Button,
    TouchableOpacity
  } from 'react-native';

  class Home extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
        dataSource: null,
      }
    }
    async componentDidMount() {

      try {
        let page = 'https://rickandmortyapi.com/api/episode';
        let data = [];
        while (page != null) {
          const response = await fetch(page);
          const responseJson = await response.json();
          data = data.concat(responseJson.results);
          page = responseJson.info.next;
        }
        this.setState({
          isLoading: false,
          dataSource: data,
        });
  
      } catch (error) {
        console.error(error);
      }
  
  }
  render(){
    if (this.state.isLoading) {

      return (
        <SafeAreaView>
          <View >
            <ActivityIndicator />
          </View>
        </SafeAreaView>
      );
    } else {



      return(
        
        <SafeAreaView style={styles.container}>
          <View>
            <FlatList
              numColumns={3}
              columnWrapperStyle={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}
              data={this.state.dataSource}
              renderItem={({ item,index }) => (
                <TouchableOpacity 
                  style={styles.touch}
                  onPress={() =>
                    this.props.navigation.navigate('Episode',index+1)
                  }
                >
                  <View style={styles.item1} ><Text>{item.episode}</Text></View>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index}
              extraData={this.state} />
          </View>
        </SafeAreaView>
       
   );

    };
    
  }
}
 
     
  export default Home;