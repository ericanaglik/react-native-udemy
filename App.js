import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import ImageScreen from './src/screens/ImageScreen'
import ColorScreen from './src/screens/ColorScreen'
import HomeScreen from './src/screens/HomeScreen'
import SquareScreen from './src/screens/SquareScreen'

const navigator = createStackNavigator(
  {
    Color: ColorScreen,
    Image: ImageScreen,
    Home: HomeScreen,
    Square: SquareScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Welcome"
    }
  }
);

export default createAppContainer(navigator);
