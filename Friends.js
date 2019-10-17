import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity,ScrollView} from 'react-native';
import { Card,Button, Icon } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFriend } from './FriendActions';



class Friends extends React.Component {
  static navigationOptions ={
    title:'Contact App'
  }

  renderTag = (data) => {
    return(
      <TouchableOpacity onPress={() =>
        this.props.addFriend()
      }>
        <Card style={styles.listItem}> 
          <View style={styles.iconContainer}>
            <Text style={styles.contactIcon}>
                {`${data.firstName[0].toUpperCase()}`}
            </Text>
          </View>
          <View style={styles.infoContainer}>
              <Text style={styles.infoText} >
                  {`${data.firstName.toUpperCase()}`} {`${data.lastName.toUpperCase()}`} 
              </Text>
              <Text style={styles.infoText} >
                  {`${data.Mobile}`}
              </Text>
              <Text style={styles.infoText} >
                  {`${data.Email}`}
              </Text>
          </View>
        </Card>
      </TouchableOpacity>
    )
  }

  

  render() {
    return (
      <ScrollView>
      <View style={styles.containerStyle}>
    <FlatList data={this.props.friends.possible} 
     renderItem={({item})=>
    this.renderTag(item)}  />
   

    <View style = {styles.flexbutton}> 
    
    </View>
      </View>
      
        </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  
 
  containerStyle:{
    borderTopWidth:0,
    borderBottomWidth:0
  },
  listItem: {
    flexDirection: "row",
    padding: 20
  },
  iconContainer: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B83227",
    borderRadius: 100
  },
  contactIcon: {
    fontSize: 28,
    color: "#fff"
  },
  infoContainer: {
    flexDirection: "column"
  },
  infoText: {
    fontSize: 16,
    fontWeight: "400",
    paddingLeft: 10,
    paddingTop: 2
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
  button:{
      alignItems:"center",
      justifyContent:"center",
      color:"#fff",
      fontSize:30,
      position:'absolute',
      bottom:0
  },
  buttonText:{
    color:"#fff",
    fontSize:20
  },
  flexbutton:{
    flex:1,
    justifyContent:"flex-end",


  }
});

const mapStateToProps = (state) => {
    const { friends } = state
    return { friends }
  };

const mapDispatchToProps = dispatch => (
    bindActionCreators({
      addFriend,
    }, dispatch)
  );
  
  export default connect(mapStateToProps, mapDispatchToProps)(Friends);
