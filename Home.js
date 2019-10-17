import React from 'react';
import { StyleSheet,View,Text, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {Entypo} from '@expo/vector-icons';
import {  Card} from 'native-base';

class Home extends React.Component {
    static navigationOptions ={
      title:"Contact App"
    }

  render() {
    return (
      <View style={styles.container}>

       <Card style={styles.listItem}> 
          <View style={styles.infoContainer}>
              <Text style={styles.infoText} >
              You Successfully selected { this.props.friends.current.length } friends!
              </Text>
          </View>
        </Card>
        <TouchableOpacity style={styles.floatButton} onPress={() =>
            this.props.navigation.navigate('Friends')
          }>
            <Entypo name="plus" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
      color:"#30336B",
      fontSize:30,
      marginVertical:5,
      fontWeight:"bold"
  },
  floatButton: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    position: "absolute",
    bottom: 10,
    right: 10,
    height: 60,
    backgroundColor: "#B83227",
    borderRadius: 100
  },
  listItem: {
    flexDirection: "row",
    padding: 20,
    backgroundColor:"#01CBC6",

  },
  infoContainer: {
    flexDirection: "column",
   
  },
  infoText: {
    fontSize: 30,
    fontWeight: "400",
    paddingLeft: 10,
    paddingTop: 2
  },
  
});

const mapStateToProps = (state) => {
  const { friends } = state
  return { friends }
};

export default connect(mapStateToProps)(Home);
