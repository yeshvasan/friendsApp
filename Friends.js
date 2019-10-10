import React from 'react';
import { StyleSheet, Text, View, Button, FlatList} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFriend } from './FriendActions';

class Friends extends React.Component {
  static navigationOptions ={
    title:'ADD YOUR FAVOURITE FRIENDS..'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Add friends here!</Text>
        {
          this.props.friends.possible.map((friend, index) => (
           
         
          <Text style={styles.addButton}
              key={ friend }
              onPress={() =>
                this.props.addFriend(index)
              }
            >{ `Add ${ friend }` }</Text>
          
         
          )
        )
        }
        <Button 
          title="Back to home"
          type="outline"
          color="#3C40C6"
          marginVertical="5"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01CBC6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton:{
   
    fontSize:20,
    
   marginVertical:5,
   color:"#EAF0F1",
   alignItems:"center",
   justifyContent:"center"
   
  },
  text:{
    color:"#B83227",
    fontSize:20,
    marginVertical:5
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