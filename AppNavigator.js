import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './Home';
import Friends from './Friends';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Friends: { screen: Friends},
},{
  defaultNavigationOptions:{
    headerTintColor:"#fff",
    headerStyle:{
      backgroundColor:"#E71C23"
    },
    headerTitleStyle:{
      color:"#fff"
    }
  }
}
);

export default createAppContainer (AppNavigator);
