import React from 'react';
import { StyleSheet,View,Text, Button } from 'react-native';
import { connect } from 'react-redux';

class Home extends React.Component {
    static navigationOptions ={
      title:'Welcome to FriendList App..'
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>We have { this.props.friends.current.length } friends!</Text>
        <Button 
          title="Add some friends"
          fontWeight="bold"
          color="#3C40C6"
          onPress={() =>
            this.props.navigation.navigate('Friends')
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#53E0BC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
      color:"#fff",
      fontSize:20,
      marginVertical:5
  }
  
});

const mapStateToProps = (state) => {
  const { friends } = state
  return { friends }
};

export default connect(mapStateToProps)(Home);
