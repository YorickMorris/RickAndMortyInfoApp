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
    AppRegistry,
    ActivityIndicator,
    TextComponent,
    FlatList,
    Image,
    StatusBar,
    Button,
    TouchableOpacity
  } from 'react-native';
  class Characters extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          isLoading: true,
          dataSource: null,
          name:null,
          status:null,
          species:null,
          type: null,
          gender:null,
          origin:null,
          location:null,
          image:null,
        }
      }
      async componentDidMount() {
  
        try {
          let page = this.props.route.params;// Navigation' dan gelen değeri buraya yolla.
          console.log('Character url: '+page);
          let data = [];
          let name=null;
          let status=null;
          let species=null;
          let type=null;
          let gender=null;
          let origin=null;
          let location=null;
          let image=null;
          if (page != null) {
            const response = await fetch(page);
            const responseJson = await response.json();
            data = responseJson.episode;
            name = responseJson.name;
            status = responseJson.status;
            species = responseJson.species;
            type = responseJson.type;
            gender = responseJson.gender;
            origin = responseJson.origin.name;
            location = responseJson.location.name;
            image = responseJson.image;
            console.log('Image: '+image);

          }
          this.setState({
            isLoading: false,
            name: name,
            status: status,
            species: species,
            type: type,
            gender: gender,
            origin: origin,
            location: location,
            image: image,
            dataSource:data
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
      }else{

        return(
        <SafeAreaView style={styles.container}> 
        <View>
            <Text>{this.state.name}</Text>
            <Text>{this.state.status}</Text>
            <Text>{this.state.species}</Text>
            <Text>{this.state.type}</Text>
            <Text>{this.state.gender}</Text>
            <Text>{this.state.origin}</Text>
            <Text>{this.state.location}</Text>
            
            <Image style={{height:200,width:200}} source={{uri: this.state.image}}/>
           
        </View>
        </SafeAreaView> 
      );}
      
    }
  }
  
  export default Characters;