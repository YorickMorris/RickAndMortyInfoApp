import {styles} from '../styles'
import { 
  SafeAreaProvider,
  SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
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
    Image,
    TouchableOpacity
} from 'react-native';
class Episodes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            isLoading2:true,
            dataSource: null,
            data2:null,
            name:null,
            episode:null,
            air_date:null,
            characterName:null,
        }
    }
    async componentDidMount() {
        try {
            let page = 'https://rickandmortyapi.com/api/episode/'+this.props.route.params;// Navigation' dan gelen değeri buraya yolla.
            let data = [];
            let data2= [];
            let name=null;
            let episode=null;
            let air_date=null;
            let characterName=[];
            if (page != null) {
                const response = await fetch(page);
                const responseJson = await response.json();
                data = responseJson.characters;
                console.log('Karakterler dizisi: '+data);
                if(data!=null){
                    await Promise.all(data.map(async (element) =>{
                        const response2 = await fetch(element);
                        const responseJson2 = await response2.json();
                        data2=data2.concat(responseJson2.image);
                        characterName=characterName.concat(responseJson2.name);
                    })
                    );  
                }
                
              
                name = responseJson.name;
                episode = responseJson.episode;
                air_date = responseJson.air_date;

            }
            console.log('Karakterler Image: '+data2)
            this.setState({
                isLoading: false,
                isLoading2:false,
                dataSource: data,
                data2:data2,
                name:name,
                episode:episode,
                air_date:air_date,
                characterName:characterName,
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
        
            return (
                <SafeAreaView style={styles.container} >
                    <View style={styles.container}>
                        <Text style={styles.item2}>{this.state.episode}</Text>
                        <Text style={styles.item2}>Episode Name: {this.state.name}</Text>
                        <Text style={styles.item2}>Air Date: {this.state.air_date}</Text>
                        <FlatList
                            numColumns={3}
                            columnWrapperStyle={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}
                            data={this.state.data2}
                            renderItem={({ item,index }) => (
                                <TouchableOpacity 
                                style={styles.touch}
                                onPress={() =>
                                    this.props.navigation.navigate('Character',this.state.dataSource[index])
                                }
                                >
                                    <View style={styles.item2}>
                                        <View style={styles.item1,{width:80,height:100}}>
                                            <Image style={styles.item1,{height:50,width:50}} source={{uri: ''+item}}/>
                                            <Text style={styles.item2}>{this.state.characterName[index]}</Text>
                                        </View>
                                    </View>
                                      
                                    
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item, index) => index}
                            extraData={this.state} />
                    </View>
                </SafeAreaView>
        
            );
        }
        
    }
}

export default Episodes;